import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { GEOMETRY_TYPE, Point, ToolType } from '../types/drawing';
import { TextEditor } from './TextEditor';
import { BRUSH_TYPE, useDrawing } from '../contexts/DrawingContext';
import { LaserPointer } from './LaserPointer';
import {
    DrawingResult,
    DrawingState,
    ToolbarCallbacks,
    Area,
    TableConfig
} from '../types/toolbar-actions';

interface Canvas2Props extends ToolbarCallbacks { }

export const Canvas2 = forwardRef<HTMLCanvasElement, Canvas2Props>((props, ref) => {
    const {
        currentPage,
        setCurrentPage,
        currentGeometryType,
        currentAction,
        setCurrentAction,
        isDrawing,
        setIsDrawing,
        currentTool,
        currentColor,
        currentBrushSize,
        currentBrushType,
        setShowTextInput,
        setTextPosition,
        showTextInput,
        textPosition,
        zoomLevel,
        setZoomLevel,
        textValue,
        mousePosition,
        setMousePosition,
        isClicking,
        setClicking,
        currentBrushOpacity
    } = useDrawing();

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const tempCanvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPanning, setIsPanning] = useState(false);
    const [isSpacePressed, setIsSpacePressed] = useState(false);
    const [panStart, setPanStart] = useState<Point | null>(null);
    const [canvasOffset, setCanvasOffset] = useState<Point>({ x: 0, y: 0 });
    const zoomFactor = zoomLevel / 100;
    const [random, setRandom] = useState(Math.random());

    // Helper functions for drawing shapes
    const drawHeart = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) => {
        const actualWidth = Math.abs(width);
        const actualHeight = Math.abs(height);

        // Scale the heart shape
        const scale = Math.min(actualWidth, actualHeight) / 30;

        ctx.save();
        ctx.translate(x, y);
        ctx.scale(scale, scale);

        ctx.beginPath();
        ctx.moveTo(0, 10);

        // Left curve
        ctx.bezierCurveTo(-10, 0, -20, 10, 0, 30);

        // Right curve
        ctx.bezierCurveTo(20, 10, 10, 0, 0, 10);

        ctx.closePath();
        ctx.stroke();
        ctx.restore();
    };

    const drawTriangle = (ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number) => {
        const actualWidth = Math.abs(width);
        const actualHeight = Math.abs(height);

        ctx.beginPath();
        if (width >= 0) {
            // Vẽ từ trái sang phải
            ctx.moveTo(x, y);  // Đỉnh trái
            ctx.lineTo(x + actualWidth, y + actualHeight);  // Góc phải dưới
            ctx.lineTo(x - actualWidth, y + actualHeight);  // Góc trái dưới
        } else {
            // Vẽ từ phải sang trái
            ctx.moveTo(x, y);  // Đỉnh phải
            ctx.lineTo(x + actualWidth, y + actualHeight);  // Góc phải dưới
            ctx.lineTo(x + actualWidth * 2, y);  // Góc phải trên
        }
        ctx.closePath();
        ctx.stroke();
    };

    const drawSquare = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
        ctx.strokeRect(x, y, size, size);
    };


    // Upload handler

    useEffect(() => {
        if (ref && typeof ref === 'object' && 'current' in ref) {
            (ref as React.MutableRefObject<HTMLCanvasElement | null>).current = canvasRef.current;
        }
    }, [ref]);

    // Handle Canvas Actions
    const handleClean = () => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!ctx || !canvas) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        props.onClean?.();
    };

    const handleErase = (area: Area) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!ctx || !canvas) return;

        ctx.clearRect(area.x, area.y, area.width, area.height);
        props.onErase?.(area);
    };

    const handleZoom = (type: 'in' | 'out') => {
        if (type === 'in') {
            setZoomLevel(prev => Math.min(prev + 0.1, 3));
            props.onZoomIn?.();
        } else {
            setZoomLevel(prev => Math.max(prev - 0.1, 0.5));
            props.onZoomOut?.();
        }
    };

    const handleAddTable = (config: TableConfig) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!ctx || !canvas) return;

        const { rows, columns, position, cellWidth = 80, cellHeight = 40, style } = config;
        const { borderColor = '#000000', borderWidth = 1, backgroundColor = '#ffffff' } = style || {};

        ctx.strokeStyle = borderColor;
        ctx.lineWidth = borderWidth;
        ctx.fillStyle = backgroundColor;

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                const x = position.x + j * cellWidth;
                const y = position.y + i * cellHeight;

                ctx.fillRect(x, y, cellWidth, cellHeight);
                ctx.strokeRect(x, y, cellWidth, cellHeight);
            }
        }

        props.onAddTable?.(config);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space' && !e.repeat && !isSpacePressed && currentTool !== ToolType.TEXT) {
                e.preventDefault();
                setIsSpacePressed(true);
                if (containerRef.current) {
                    containerRef.current.style.cursor = 'grab';
                }
            }
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.code === 'Space') {
                e.preventDefault();
                setIsSpacePressed(false);
                if (containerRef.current && currentTool !== ToolType.PAN) {
                    containerRef.current.style.cursor = 'default';
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, [isSpacePressed, currentTool]);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const tempCanvas = tempCanvasRef.current!;
        const context = canvas.getContext('2d')!;
        const tempContext = tempCanvas.getContext('2d')!;



        // Xóa cả hai canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        tempContext.clearRect(0, 0, tempCanvas.width, tempCanvas.height);            // Lưu trạng thái và áp dụng zoom cho canvas chính
        context.save();
        context.scale(zoomFactor, zoomFactor);

        // Lưu trạng thái và áp dụng zoom cho canvas tạm
        tempContext.save();
        tempContext.scale(zoomFactor, zoomFactor);

        // Vẽ ảnh nền trên canvas chính
        currentPage?.commands?.forEach((command) => {
            if (command.type === ToolType.IMAGE && command.image) {
                const image = command.image;
                const imgWidth = command.width ?? image.width;
                const imgHeight = command.height ?? image.height;

                // Kích thước canvas (đã set width/height tương ứng với clientWidth/clientHeight × DPR)
                const canvasWidth = canvas.width;
                const canvasHeight = canvas.height;

                // Khởi tạo kích thước vẽ = kích thước gốc
                let drawWidth = imgWidth;
                let drawHeight = imgHeight;

                // Nếu ảnh lớn hơn canvas thì scale xuống vừa khít
                if (imgWidth > canvasWidth || imgHeight > canvasHeight) {
                    const scale = Math.min(
                        canvasWidth / imgWidth,
                        canvasHeight / imgHeight
                    ) / zoomFactor;
                    drawWidth = imgWidth * scale;
                    drawHeight = imgHeight * scale;
                }

                // Tọa độ canh giữa
                const drawX = (canvasWidth - drawWidth) / 2;
                const drawY = (canvasHeight - drawHeight) / 2;

                context.drawImage(image, drawX, drawY, drawWidth, drawHeight);
            }
        });


        // Vẽ các lệnh khác trên canvas tạm
        currentPage?.commands?.forEach((command) => {
            if (command.type === ToolType.IMAGE) return; // Bỏ qua ảnh
            tempContext.beginPath();
            tempContext.lineCap = 'round';
            tempContext.lineJoin = 'round';

            // Áp dụng hiệu ứng theo loại bút
            switch (command.brushType) {
                case BRUSH_TYPE.PAINT_PEN:
                    tempContext.globalAlpha = command.opacity || 1;
                    tempContext.lineWidth = (command.size * 2) / zoomFactor;
                    break;

                case BRUSH_TYPE.MEMORY_PEN:
                case BRUSH_TYPE.COLOR_PEN:
                    tempContext.globalAlpha = command.opacity || 1;
                    tempContext.lineWidth = command.size / zoomFactor;
                    break;

                case BRUSH_TYPE.PENCIL:
                    tempContext.globalAlpha = command.opacity || 1;
                    tempContext.lineWidth = (command.size * 0.8) / zoomFactor;
                    break;

                case BRUSH_TYPE.PEN:
                default:
                    tempContext.globalAlpha = command.opacity || 1;
                    tempContext.lineWidth = (command.size * 0.5) / zoomFactor;
                    break;
            }
            if (command.type === ToolType.FREE_HAND || command.type === ToolType.ERASER) {
                tempContext.moveTo(command.points![0].x, command.points![0].y);
                command.points!.forEach((point) => tempContext.lineTo(point.x, point.y));
                tempContext.strokeStyle = command.type === ToolType.ERASER ? '#FFFFFF' : command.color;
                tempContext.globalCompositeOperation = command.type === ToolType.ERASER ? 'destination-out' : 'source-over';
                tempContext.globalAlpha = command.type === ToolType.ERASER ? 1 : command.opacity || 1;
                tempContext.stroke();
            } else if (command.type === ToolType.GEOMETRY) {
                tempContext.strokeStyle = command.color || '#000000';
                tempContext.lineWidth = command.geometryType === GEOMETRY_TYPE.HEART ?
                    (command.size * 0.25) / zoomFactor :
                    (command.size * 0.5) / zoomFactor;
                tempContext.globalCompositeOperation = 'source-over';

                switch (command.geometryType) {
                    case GEOMETRY_TYPE.LINE:
                        tempContext.beginPath();
                        tempContext.moveTo(command.fromX!, command.fromY!);
                        tempContext.lineTo(command.toX!, command.toY!);
                        tempContext.stroke();
                        break;

                    case GEOMETRY_TYPE.SQUARE:
                        const squareSize = Math.max(
                            Math.abs(command.width!),
                            Math.abs(command.height!)
                        );
                        drawSquare(tempContext, command.x!, command.y!, squareSize);
                        break;

                    case GEOMETRY_TYPE.RECTANGLE:
                        tempContext.strokeRect(
                            command.x!,
                            command.y!,
                            command.width!,
                            command.height!
                        );
                        break;

                    case GEOMETRY_TYPE.CIRCLE:
                        tempContext.beginPath();
                        tempContext.arc(
                            command.x!,
                            command.y!,
                            command.radius!,
                            0,
                            2 * Math.PI
                        );
                        tempContext.stroke();
                        break;

                    case GEOMETRY_TYPE.HEART:
                        drawHeart(
                            tempContext,
                            command.x!,
                            command.y!,
                            Math.abs(command.width!),
                            Math.abs(command.height!)
                        );
                        break;

                    case GEOMETRY_TYPE.TRINGTANGLE:
                        drawTriangle(
                            tempContext,
                            command.x!,
                            command.y!,
                            command.width!,
                            command.height!
                        );
                        break;
                }
            } else if (command.type === ToolType.TEXT) {
                const style = command.textStyle || { fontFamily: 'Arial', fontSize: 16, bold: false, italic: false, underline: false };

                // Thiết lập font và style cho text
                const fontStyles = [];
                if (style.italic) fontStyles.push('italic');
                if (style.bold) fontStyles.push('bold');
                fontStyles.push(`${style.fontSize}px`); // Không chia cho zoomFactor vì scale sẽ tự điều chỉnh
                fontStyles.push(style.fontFamily);

                tempContext.save(); // Lưu context hiện tại

                // Reset transformation để vẽ text với kích thước thật
                tempContext.setTransform(1, 0, 0, 1, 0, 0);

                // Áp dụng scale và translation mới
                tempContext.translate(command.x! * zoomFactor, command.y! * zoomFactor);
                tempContext.scale(1, 1); // Sử dụng scale 1 để giữ nguyên kích thước text

                tempContext.font = fontStyles.join(' ');
                tempContext.fillStyle = command.color;
                tempContext.textBaseline = 'top';
                tempContext.globalCompositeOperation = 'source-over';

                // Xử lý xuống dòng
                const lines = command.text!.split('\n');
                const lineHeight = style.fontSize * 1.2; // Khoảng cách giữa các dòng

                lines.forEach((line, index) => {
                    // Vẽ text cho mỗi dòng
                    tempContext.fillText(line, 0, lineHeight * index);

                    // Vẽ gạch chân nếu có
                    if (style.underline) {
                        const textWidth = tempContext.measureText(line).width;
                        tempContext.beginPath();
                        tempContext.moveTo(0, lineHeight * index + style.fontSize + 2);
                        tempContext.lineTo(textWidth, lineHeight * index + style.fontSize + 2);
                        tempContext.strokeStyle = command.color;
                        tempContext.lineWidth = 1;
                        tempContext.stroke();
                    }
                });

                tempContext.restore(); // Khôi phục context ban đầu
            }
            tempContext.globalAlpha = 1;
        });

        // Vẽ hành động hiện tại trên canvas tạm
        if (currentAction) {
            tempContext.beginPath();
            tempContext.lineCap = 'round';
            tempContext.lineJoin = 'round';

            switch (currentAction.brushType) {
                case BRUSH_TYPE.PAINT_PEN:
                    tempContext.globalAlpha = currentBrushOpacity
                    tempContext.lineWidth = (currentAction.size * 2) / zoomFactor;
                    break;

                case BRUSH_TYPE.MEMORY_PEN:
                case BRUSH_TYPE.COLOR_PEN:
                    tempContext.globalAlpha = currentBrushOpacity;
                    tempContext.lineWidth = currentAction.size / zoomFactor;
                    break;

                case BRUSH_TYPE.PENCIL:
                    tempContext.globalAlpha = currentBrushOpacity;
                    tempContext.lineWidth = (currentAction.size * 0.8) / zoomFactor;
                    break;

                case BRUSH_TYPE.PEN:
                default:
                    tempContext.globalAlpha = currentBrushOpacity;
                    tempContext.lineWidth = (currentAction.size * 0.5) / zoomFactor;
                    break;
            }

            if (currentAction.type === ToolType.FREE_HAND || currentAction.type === ToolType.ERASER) {
                tempContext.moveTo(currentAction.points![0].x, currentAction.points![0].y);
                currentAction.points!.forEach((point) => tempContext.lineTo(point.x, point.y));
                tempContext.strokeStyle = currentAction.type === ToolType.ERASER ? '#FFFFFF' : currentAction.color;
                tempContext.globalCompositeOperation = currentAction.type === ToolType.ERASER ? 'destination-out' : 'source-over';
                tempContext.globalAlpha = currentAction.type === ToolType.ERASER ? 1 : currentBrushOpacity || 1;
                tempContext.stroke();
            } else if (currentAction.type === ToolType.GEOMETRY) {
                tempContext.strokeStyle = currentAction.color || '#000000';
                tempContext.lineWidth = currentAction.geometryType === GEOMETRY_TYPE.HEART ?
                    (currentAction.size * 0.25) / zoomFactor :
                    (currentAction.size * 0.5) / zoomFactor;
                tempContext.globalCompositeOperation = 'source-over';

                switch (currentGeometryType) {
                    case GEOMETRY_TYPE.LINE:
                        tempContext.beginPath();
                        tempContext.moveTo(currentAction.fromX!, currentAction.fromY!);
                        tempContext.lineTo(currentAction.toX!, currentAction.toY!);
                        tempContext.stroke();
                        break;

                    case GEOMETRY_TYPE.SQUARE:
                        const size = Math.max(
                            Math.abs(currentAction.width!),
                            Math.abs(currentAction.height!)
                        );
                        drawSquare(
                            tempContext,
                            currentAction.x!,
                            currentAction.y!,
                            size
                        );
                        break;

                    case GEOMETRY_TYPE.RECTANGLE:
                        tempContext.strokeRect(
                            currentAction.x!,
                            currentAction.y!,
                            currentAction.width!,
                            currentAction.height!
                        );
                        break;

                    case GEOMETRY_TYPE.CIRCLE:
                        tempContext.beginPath();
                        tempContext.arc(
                            currentAction.x!,
                            currentAction.y!,
                            currentAction.radius!,
                            0,
                            2 * Math.PI
                        );
                        tempContext.stroke();
                        break;

                    case GEOMETRY_TYPE.HEART:
                        drawHeart(
                            tempContext,
                            currentAction.x!,
                            currentAction.y!,
                            Math.abs(currentAction.width!),
                            Math.abs(currentAction.height!)
                        );
                        break;

                    case GEOMETRY_TYPE.TRINGTANGLE:
                        drawTriangle(
                            tempContext,
                            currentAction.x!,
                            currentAction.y!,
                            currentAction.width!,
                            currentAction.height!
                        );
                        break;
                }
            }
            tempContext.globalAlpha = 1;
        }            // Đặt lại trạng thái context trước khi vẽ lại
        context.restore();
        tempContext.restore();

        // Sao chép nội dung từ canvas tạm sang canvas chính với tỷ lệ đúng
        context.drawImage(tempCanvas, 0, 0, (tempCanvas.width ?? 0), (tempCanvas.height ?? 0));
        // context.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);

    }, [currentPage, currentAction, zoomLevel, random]);
    const getAdjustedCoordinates = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / zoomFactor;
        const y = (e.clientY - rect.top) / zoomFactor;
        return { x, y };
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        setClicking(true);
        setIsDrawing(true);
        const { x, y } = getAdjustedCoordinates(e);
        const rect = e.currentTarget.getBoundingClientRect();

        // Call onDrawingStart callback
        if (props.onDrawingStart && currentTool !== 'pan' && !isSpacePressed) {
            const drawingState: DrawingState = {
                tool: currentTool,
                color: currentColor,
                size: currentBrushSize,
                type: currentTool === ToolType.GEOMETRY ? currentGeometryType : undefined
            };
            props.onDrawingStart(drawingState);
        }

        if ((isSpacePressed || currentTool === 'pan') && currentTool !== ToolType.TEXT) {
            e.preventDefault();
            setIsPanning(true);
            setPanStart({ x: e.clientX - canvasOffset.x, y: e.clientY - canvasOffset.y });
            if (containerRef.current) {
                containerRef.current.style.cursor = 'grabbing';
            }
            return;
        }

        if (currentTool === ToolType.TEXT && (!textValue || !showTextInput)) {
            // Chỉ set vị trí text khi bắt đầu vẽ text mới
            setTextPosition({ x, y });
            setShowTextInput(true);
            return;
        }

        if (currentTool === ToolType.PENCIL) {
            setCurrentAction({
                type: ToolType.FREE_HAND,
                points: [{ x, y }],
                color: currentColor,
                size: currentBrushSize,
                brushType: currentBrushType,
                opacity: currentBrushOpacity
            });
        }
        if (currentTool === ToolType.ERASER) {
            setCurrentAction({
                type: ToolType.ERASER,
                points: [{ x, y }],
                color: '#FFFFFF',
                size: currentBrushSize * 2, // Tăng kích thước tẩy lên gấp đôi
                opacity: 1, // Force opacity là 1
            });
        }
        if (currentTool === ToolType.GEOMETRY) {
            const baseAction = {
                type: ToolType.GEOMETRY,
                color: currentColor,
                size: currentBrushSize,
                timestamp: Date.now(),
                geometryType: currentGeometryType
            };

            switch (currentGeometryType) {
                case GEOMETRY_TYPE.LINE:
                    setCurrentAction({
                        ...baseAction,
                        fromX: x,
                        fromY: y,
                        toX: x,
                        toY: y
                    });
                    break;

                case GEOMETRY_TYPE.SQUARE:
                case GEOMETRY_TYPE.RECTANGLE:
                case GEOMETRY_TYPE.HEART:
                case GEOMETRY_TYPE.TRINGTANGLE:
                    setCurrentAction({
                        ...baseAction,
                        x,
                        y,
                        width: 0,
                        height: 0
                    });
                    break;

                case GEOMETRY_TYPE.CIRCLE:
                    setCurrentAction({
                        ...baseAction,
                        x,
                        y,
                        radius: 0
                    });
                    break;
            }
        }
    };
    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        // Luôn cập nhật vị trí chuột
        const rect = canvasRef.current!.getBoundingClientRect();
        // const { x: mouseX, y: mouseY } = getAdjustedCoordinates(e);
        // Lấy vị trí chuột tương đối so với canvas container
        const mouseX = (e.clientX - rect.left);
        const mouseY = (e.clientY - rect.top);

        // Cập nhật vị trí chuột thực trên màn hình
        setMousePosition({
            x: mouseX,
            y: mouseY
        });

        if (isPanning) {
            const newX = e.clientX - (panStart?.x || 0);
            const newY = e.clientY - (panStart?.y || 0);
            setCanvasOffset({ x: newX, y: newY });
            return;
        }

        if (isSpacePressed || currentTool === ToolType.PAN) {
            return;
        }

        if (!isDrawing || !currentAction) return;

        const { x, y } = getAdjustedCoordinates(e);

        if (currentAction.type === ToolType.FREE_HAND || currentAction.type === ToolType.ERASER) {
            setCurrentAction(prev => ({
                ...prev!,
                points: [...(prev!.points as Point[]), { x, y }],
            }));
        } if (currentAction.type === ToolType.GEOMETRY) {
            switch (currentGeometryType) {
                case GEOMETRY_TYPE.LINE:
                    setCurrentAction(prev => ({
                        ...prev!,
                        toX: x,
                        toY: y,
                    }));
                    break;

                case GEOMETRY_TYPE.SQUARE:
                    const size = Math.max(
                        Math.abs(x - currentAction.x!),
                        Math.abs(y - currentAction.y!)
                    );
                    setCurrentAction(prev => ({
                        ...prev!,
                        width: size,
                        height: size,
                    }));
                    break;

                case GEOMETRY_TYPE.RECTANGLE:
                case GEOMETRY_TYPE.HEART:
                case GEOMETRY_TYPE.TRINGTANGLE:
                    setCurrentAction(prev => ({
                        ...prev!,
                        width: x - prev!.x!,
                        height: y - prev!.y!,
                    }));
                    break;

                case GEOMETRY_TYPE.CIRCLE:
                    const radius = Math.sqrt(
                        Math.pow(x - currentAction.x!, 2) +
                        Math.pow(y - currentAction.y!, 2)
                    );
                    setCurrentAction(prev => ({
                        ...prev!,
                        radius
                    }));
                    break;
            }
        }

    };

    const handleMouseUp = () => {
        setClicking(false)
        if (isPanning) {
            setIsPanning(false);
            if (containerRef.current) {
                containerRef.current.style.cursor = isSpacePressed || currentTool === 'pan' ? 'grab' : 'default';
            }
            return;
        }

        if (isDrawing && currentAction) {
            // Cập nhật state
            setCurrentPage(prev => ({
                ...prev,
                commands: [...prev.commands, currentAction],
            }));

            // Call onDrawingComplete callback
            if (props.onDrawingComplete && mousePosition) {
                const drawingResult: DrawingResult = {
                    command: currentAction,
                    position: mousePosition
                };
                props.onDrawingComplete(drawingResult);
            }

            setCurrentAction(null);
            setIsDrawing(false);
        }
    };

    useEffect(() => {

        const canvas = canvasRef.current!;
        const tempCanvas = tempCanvasRef.current!;
        const resizeCanvas = () => {
            const parent = canvas.parentElement!;                // Đặt kích thước canvas theo kích thước thực của container
            const dpr = window.devicePixelRatio || 1;
            const rect = parent.getBoundingClientRect();

            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            tempCanvas.width = rect.width * dpr;
            tempCanvas.height = rect.height * dpr;

            // Đặt lại kích thước hiển thị CSS
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;
            tempCanvas.style.width = `${rect.width}px`;
            tempCanvas.style.height = `${rect.height}px`;
            setRandom(Math.random()); // Cập nhật random để trigger re-render
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        return () => window.removeEventListener('resize', resizeCanvas);
    }, []);


    return (
        <div
            ref={containerRef}
            className="relative w-full h-[600px] overflow-hidden select-none"
            style={{ cursor: (isSpacePressed || currentTool === 'pan') ? (isPanning ? 'grabbing' : 'grab') : 'default' }}
        >
            <div
                style={{
                    transform: `translate(${canvasOffset.x}px, ${canvasOffset.y}px)`,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
            >
                <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 w-full h-full bg-gray-100"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                />
                <canvas
                    ref={tempCanvasRef}
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                />
                {showTextInput && textPosition && (
                    <TextEditor position={{ x: textPosition.x, y: textPosition.y }} />
                )}
                {<LaserPointer
                    x={mousePosition?.x || 0}
                    y={mousePosition?.y || 0}
                    isClicking={isClicking}
                    isDrawing={isDrawing}
                    tool={currentTool}
                />}
            </div>

        </div>
    );
});
