import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { GEOMETRY_TYPE, Point, ToolType } from './types/drawing';
import { TextEditor } from './TextEditor';
import { BRUSH_TYPE, useDrawing } from '../contexts/DrawingContext';
import { LaserPointer } from './LaserPointer';

export const Canvas2 = forwardRef<HTMLCanvasElement>((_, ref) => {
    const {
        currentPage,
        setCurrentPage,
        currentGeometryType,
        setCurrentGeometryType,
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
        textValue,
        textStyle,
        setTextStyle,
        mousePosition,
        setMousePosition,
        isClicking,
        setClicking,
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

    useEffect(() => {
        if (ref && typeof ref === 'object' && 'current' in ref) {
            (ref as React.MutableRefObject<HTMLCanvasElement | null>).current = canvasRef.current;
        }
    }, [ref]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space' && !e.repeat && !isSpacePressed) {
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
                context.drawImage(command.image, 0, 0, canvas.width / zoomFactor, canvas.height / zoomFactor);
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
                    tempContext.globalAlpha = 0.5;
                    tempContext.lineWidth = (command.size * 2) / zoomFactor;
                    break;

                case BRUSH_TYPE.MEMORY_PEN:
                case BRUSH_TYPE.COLOR_PEN:
                    tempContext.globalAlpha = 0.7;
                    tempContext.lineWidth = command.size / zoomFactor;
                    break;

                case BRUSH_TYPE.PENCIL:
                    tempContext.globalAlpha = 0.6;
                    tempContext.lineWidth = (command.size * 0.8) / zoomFactor;
                    break;

                case BRUSH_TYPE.PEN:
                default:
                    tempContext.globalAlpha = 1;
                    tempContext.lineWidth = (command.size * 0.5) / zoomFactor;
                    break;
            }
            if (command.type === ToolType.FREE_HAND || command.type === ToolType.ERASER) {
                tempContext.moveTo(command.points![0].x, command.points![0].y);
                command.points!.forEach((point) => tempContext.lineTo(point.x, point.y));
                tempContext.strokeStyle = command.type === ToolType.ERASER ? '#FFFFFF' : command.color;
                tempContext.globalCompositeOperation = command.type === ToolType.ERASER ? 'destination-out' : 'source-over';
                tempContext.stroke();
            } else if (command.type === ToolType.GEOMETRY) {
                if (command.geometryType === GEOMETRY_TYPE.LINE) {
                    tempContext.moveTo(command.fromX!, command.fromY!);
                    tempContext.lineTo(command.toX!, command.toY!);
                    tempContext.strokeStyle = command.color;
                    tempContext.lineWidth = (command.size * 0.5) / zoomFactor;
                    tempContext.globalCompositeOperation = 'source-over';
                    tempContext.stroke();
                } else if (command.geometryType === GEOMETRY_TYPE.RECTANGLE) {
                    tempContext.strokeRect(command.x!, command.y!, command.width!, command.height!);
                    tempContext.strokeStyle = command.color;
                    tempContext.lineWidth = (command.size * 0.5) / zoomFactor;
                    tempContext.globalCompositeOperation = 'source-over';
                    tempContext.stroke();
                } else if (command.geometryType === GEOMETRY_TYPE.CIRCLE) {
                    tempContext.arc(command.x!, command.y!, command.radius!, 0, 2 * Math.PI);
                    tempContext.strokeStyle = command.color;
                    tempContext.lineWidth = (command.size * 0.5) / zoomFactor;
                    tempContext.globalCompositeOperation = 'source-over';
                    tempContext.stroke();
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
                    tempContext.globalAlpha = 0.5;
                    tempContext.lineWidth = (currentAction.size * 2) / zoomFactor;
                    break;

                case BRUSH_TYPE.MEMORY_PEN:
                case BRUSH_TYPE.COLOR_PEN:
                    tempContext.globalAlpha = 0.7;
                    tempContext.lineWidth = currentAction.size / zoomFactor;
                    break;

                case BRUSH_TYPE.PENCIL:
                    tempContext.globalAlpha = 0.6;
                    tempContext.lineWidth = (currentAction.size * 0.8) / zoomFactor;
                    break;

                case BRUSH_TYPE.PEN:
                default:
                    tempContext.globalAlpha = 1;
                    tempContext.lineWidth = (currentAction.size * 0.5) / zoomFactor;
                    break;
            }

            if (currentAction.type === ToolType.FREE_HAND || currentAction.type === ToolType.ERASER) {
                tempContext.moveTo(currentAction.points![0].x, currentAction.points![0].y);
                currentAction.points!.forEach((point) => tempContext.lineTo(point.x, point.y));
                tempContext.strokeStyle = currentAction.type === ToolType.ERASER ? '#FFFFFF' : currentAction.color;
                tempContext.globalCompositeOperation = currentAction.type === ToolType.ERASER ? 'destination-out' : 'source-over';
                tempContext.stroke();
            } else if (currentAction.type === ToolType.GEOMETRY) {
                if (currentGeometryType === GEOMETRY_TYPE.LINE) {
                    tempContext.moveTo(currentAction.fromX!, currentAction.fromY!);
                    tempContext.lineTo(currentAction.toX!, currentAction.toY!);
                    tempContext.strokeStyle = currentAction.color;
                    tempContext.globalCompositeOperation = 'source-over';
                    tempContext.stroke();
                } else if (currentGeometryType === GEOMETRY_TYPE.RECTANGLE) {
                    tempContext.strokeRect(currentAction.x!, currentAction.y!, currentAction.width!, currentAction.height!);
                    tempContext.strokeStyle = currentAction.color;
                    tempContext.globalCompositeOperation = 'source-over';
                    tempContext.stroke();
                } else if (currentGeometryType === GEOMETRY_TYPE.CIRCLE) {
                    tempContext.arc(currentAction.x!, currentAction.y!, currentAction.radius!, 0, 2 * Math.PI);
                    tempContext.strokeStyle = currentAction.color;
                    tempContext.globalCompositeOperation = 'source-over';
                    tempContext.stroke();
                }

            }
            tempContext.globalAlpha = 1;
        }            // Đặt lại trạng thái context trước khi vẽ lại
        context.restore();
        tempContext.restore();

        // Sao chép nội dung từ canvas tạm sang canvas chính với tỷ lệ đúng
        context.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);

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

        if (isSpacePressed || currentTool === 'pan') {
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
            });
        }
        if (currentTool === ToolType.ERASER) {
            setCurrentAction({
                type: ToolType.ERASER,
                points: [{ x, y }],
                color: currentColor,
                size: currentBrushSize,
            });
        }
        if (currentTool === ToolType.GEOMETRY) {
            setCurrentAction({
                type: ToolType.GEOMETRY,
                geometryType: GEOMETRY_TYPE.LINE,
                fromX: x,
                fromY: y,
                toX: x,
                toY: y,
                color: currentColor,
                size: currentBrushSize,
            })
            if (currentAction?.geometryType === GEOMETRY_TYPE.LINE) {
                setCurrentAction({
                    type: ToolType.GEOMETRY,
                    geometryType: GEOMETRY_TYPE.LINE,
                    fromX: x,
                    fromY: y,
                    toX: x,
                    toY: y,
                    color: currentColor,
                    size: currentBrushSize,
                })
            }
            if (currentAction?.geometryType === GEOMETRY_TYPE.SQUARE) {
                setCurrentAction({
                    type: ToolType.GEOMETRY,
                    geometryType: GEOMETRY_TYPE.SQUARE,
                    x,
                    y,
                    width: 0,
                    height: 0,
                    color: currentColor,
                    size: currentBrushSize,
                });
            }
            if (currentAction?.geometryType === GEOMETRY_TYPE.SQUARE) {
                setCurrentAction({
                    type: ToolType.GEOMETRY,
                    geometryType: GEOMETRY_TYPE.CIRCLE,
                    x,
                    y,
                    radius: 0,
                    color: currentColor,
                    size: currentBrushSize,
                });
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
        }
        if (currentAction.type === ToolType.GEOMETRY) {
            if (currentGeometryType === GEOMETRY_TYPE.LINE) {
                setCurrentAction(prev => ({
                    ...prev!,
                    toX: x,
                    toY: y,
                }));
            }

            if (currentGeometryType === GEOMETRY_TYPE.SQUARE) {
                setCurrentAction(prev => ({
                    ...prev!,
                    x: Math.min(prev!.x!, x),
                    y: Math.min(prev!.y!, y),
                    width: Math.abs(x - prev!.x!),
                    height: Math.abs(y - prev!.y!),
                }));
            }

            if (currentGeometryType === GEOMETRY_TYPE.CIRCLE) {
                const radius = Math.sqrt((x - currentAction.x!) ** 2 + (y - currentAction.y!) ** 2);
                setCurrentAction(prev => ({ ...prev!, radius }));
            }
        }

        console.log("Move", x, y)
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
            setCurrentPage(prev => ({
                ...prev,
                commands: [...prev.commands, currentAction],
            }));
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
