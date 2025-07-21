import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { GEOMETRY_TYPE, Point, ToolType, DrawingCommand } from '../types/drawing';
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
interface CanvasProps extends ToolbarCallbacks {
}

export const Canvas = forwardRef<HTMLCanvasElement, CanvasProps>((props, ref) => {
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
        currentBrushOpacity,
        dataCommands
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
    const [selectedPoint, setSelectedPoint] = useState<{ x: number, y: number, command: DrawingCommand } | null>(null);
    const [hoveredCommand, setHoveredCommand] = useState<DrawingCommand | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStartPosition, setDragStartPosition] = useState<Point | null>(null);

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
            (ref as React.RefObject<HTMLCanvasElement | null>).current = canvasRef.current;
        }
    }, [ref]);


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

        // Vẽ khung cho command đang hover hoặc được chọn
        const commandToHighlight = selectedPoint?.command || hoveredCommand;
        if (commandToHighlight) {
            let bounds = { x: 0, y: 0, width: 0, height: 0 };

            // Tính toán bounds dựa vào loại command
            if (commandToHighlight.points?.length) {
                // Với nét vẽ tay/tẩy: tính min/max của tất cả các điểm
                const xPoints = commandToHighlight.points.map((p: Point) => p.x);
                const yPoints = commandToHighlight.points.map((p: Point) => p.y);
                const minX = Math.min(...xPoints);
                const maxX = Math.max(...xPoints);
                const minY = Math.min(...yPoints);
                const maxY = Math.max(...yPoints);
                bounds = {
                    x: minX,
                    y: minY,
                    width: maxX - minX,
                    height: maxY - minY
                };
            } else if (commandToHighlight.type === ToolType.GEOMETRY) {
                // Với hình học: lấy thông tin trực tiếp
                bounds = {
                    x: commandToHighlight.x || 0,
                    y: commandToHighlight.y || 0,
                    width: commandToHighlight.width || 0,
                    height: commandToHighlight.height || 0
                };
            }

            const padding = commandToHighlight.size || 10; // Padding dựa vào kích thước nét vẽ
            context.save();
            context.strokeStyle = '#FF0000';
            context.lineWidth = 1;
            context.setLineDash([5, 3]);

            // Vẽ hình chữ nhật bao quanh toàn bộ command
            context.strokeRect(
                bounds.x - padding,
                bounds.y - padding,
                bounds.width + padding * 2,
                bounds.height + padding * 2
            );

            context.restore();
        }

    }, [currentPage, currentAction, zoomLevel, random, selectedPoint, hoveredCommand]);
    const getAdjustedCoordinates = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / zoomFactor;
        const y = (e.clientY - rect.top) / zoomFactor;
        return { x, y };
    };

    const checkPointInPath = (x: number, y: number, command: DrawingCommand) => {
        const threshold = command.size || 5; // Dùng kích thước của nét vẽ làm ngưỡng

        if (command.points?.length) {
            // Với nét vẽ tay/tẩy: tính toán bounds
            const xPoints = command.points.map(p => p.x);
            const yPoints = command.points.map(p => p.y);
            const minX = Math.min(...xPoints) - threshold;
            const maxX = Math.max(...xPoints) + threshold;
            const minY = Math.min(...yPoints) - threshold;
            const maxY = Math.max(...yPoints) + threshold;

            // Kiểm tra điểm có nằm trong bounds không
            return x >= minX && x <= maxX && y >= minY && y <= maxY;
        } else if (command.type === ToolType.GEOMETRY) {
            // Với hình học: kiểm tra bounds + độ dày nét vẽ
            const cx = command.x || 0;
            const cy = command.y || 0;
            const width = command.width || 0;
            const height = command.height || 0;

            return x >= cx - threshold && x <= cx + width + threshold &&
                y >= cy - threshold && y <= cy + height + threshold;
        }
        return false;
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const { x, y } = getAdjustedCoordinates(e);
        const rect = e.currentTarget.getBoundingClientRect();

        if (currentTool === ToolType.SELECT) {
            // Tìm command gần nhất với điểm click
            const clickedCommand = currentPage?.commands?.find(cmd => checkPointInPath(x, y, cmd));
            if (clickedCommand) {
                setSelectedPoint({ x, y, command: clickedCommand });
                setIsDragging(true);
                setDragStartPosition({ x, y });
            } else {
                setSelectedPoint(null);
            }
            return;
        }

        setClicking(true);
        setIsDrawing(true);

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
        const { x, y } = getAdjustedCoordinates(e);
        const mouseX = (e.clientX - rect.left);
        const mouseY = (e.clientY - rect.top);

        // Xử lý kéo command đã chọn
        if (isDragging && selectedPoint && dragStartPosition) {
            const dx = x - dragStartPosition.x;
            const dy = y - dragStartPosition.y;

            const updatedCommand = { ...selectedPoint.command };

            if (updatedCommand.points?.length) {
                // Di chuyển tất cả các điểm nếu là nét vẽ tay/tẩy
                updatedCommand.points = updatedCommand.points.map(point => ({
                    x: point.x + dx,
                    y: point.y + dy
                }));
            } else if (updatedCommand.type === ToolType.GEOMETRY) {
                // Di chuyển các tọa độ nếu là hình học
                if (updatedCommand.x !== undefined) updatedCommand.x += dx;
                if (updatedCommand.y !== undefined) updatedCommand.y += dy;
                if (updatedCommand.fromX !== undefined) updatedCommand.fromX += dx;
                if (updatedCommand.fromY !== undefined) updatedCommand.fromY += dy;
                if (updatedCommand.toX !== undefined) updatedCommand.toX += dx;
                if (updatedCommand.toY !== undefined) updatedCommand.toY += dy;
            }

            // Cập nhật command trong danh sách
            setCurrentPage(prev => ({
                ...prev,
                commands: prev.commands.map(cmd =>
                    cmd === selectedPoint.command ? updatedCommand : cmd
                )
            }));

            // Cập nhật selectedPoint và dragStartPosition
            setSelectedPoint({
                x: x,
                y: y,
                command: updatedCommand
            });
            setDragStartPosition({ x, y });
            return;
        }

        // Kiểm tra hover khi đang ở chế độ SELECT
        if (currentTool === ToolType.SELECT) {
            const hoveredCmd = currentPage?.commands?.find(cmd => checkPointInPath(x, y, cmd));
            setHoveredCommand(hoveredCmd || null);
        } else {
            setHoveredCommand(null);
        }

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

        const adjustedCoords = getAdjustedCoordinates(e);
        const drawX = adjustedCoords.x;
        const drawY = adjustedCoords.y;

        if (currentAction.type === ToolType.FREE_HAND || currentAction.type === ToolType.ERASER) {
            setCurrentAction(prev => ({
                ...prev!,
                points: [...(prev!.points as Point[]), { x: drawX, y: drawY }],
            }));
        } if (currentAction.type === ToolType.GEOMETRY) {
            switch (currentGeometryType) {
                case GEOMETRY_TYPE.LINE:
                    setCurrentAction(prev => ({
                        ...prev!,
                        toX: drawX,
                        toY: drawY,
                    }));
                    break;

                case GEOMETRY_TYPE.SQUARE:
                    const size = Math.max(
                        Math.abs(drawX - currentAction.x!),
                        Math.abs(drawY - currentAction.y!)
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
                        width: drawX - prev!.x!,
                        height: drawY - prev!.y!,
                    }));
                    break;

                case GEOMETRY_TYPE.CIRCLE:
                    const radius = Math.sqrt(
                        Math.pow(drawX - currentAction.x!, 2) +
                        Math.pow(drawY - currentAction.y!, 2)
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
        setClicking(false);
        setIsDragging(false);
        setDragStartPosition(null);

        if (isPanning) {
            setIsPanning(false);
            if (containerRef.current) {
                containerRef.current.style.cursor = isSpacePressed || currentTool === 'pan' ? 'grab' : 'default';
            }
            return;
        }

        if (isDrawing && currentAction) {
            // Cập nhật state với cả currentAction và dataCommands
            setCurrentPage(prev => ({
                ...prev,
                commands: [...prev.commands, currentAction],
                // commands: [...(dataCommands || []), currentAction],
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
