import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Point } from './types/drawing';
import { TextEditor } from './TextEditor';
import { useDrawing } from '../contexts/DrawingContext';
import { LaserPointer } from './LaserPointer';

export const Canvas2 = forwardRef<HTMLCanvasElement>((_, ref) => {
    const {
        currentPage,
        setCurrentPage,
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
                if (containerRef.current && currentTool !== 'pan') {
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
        currentPage.commands.forEach((command) => {
            if (command.type === 'image' && command.image) {
                context.drawImage(command.image, 0, 0, canvas.width / zoomFactor, canvas.height / zoomFactor);
            }
        });

        // Vẽ các lệnh khác trên canvas tạm
        currentPage.commands.forEach((command) => {
            if (command.type === 'image') return; // Bỏ qua ảnh
            tempContext.beginPath();
            tempContext.lineCap = 'round';
            tempContext.lineJoin = 'round';

            // Áp dụng hiệu ứng theo loại bút
            if (command.brushType === 'paint') {
                tempContext.globalAlpha = 0.5;
                tempContext.lineWidth = (command.size * 2) / zoomFactor;
            } else if (command.brushType === 'marker') {
                tempContext.globalAlpha = 0.7;
                tempContext.lineWidth = command.size / zoomFactor;
            } else if (command.brushType === 'pen') {
                tempContext.lineWidth = (command.size * 0.5) / zoomFactor;
                tempContext.globalAlpha = 1;
            } else {
                tempContext.globalAlpha = 1;
                tempContext.lineWidth = command.size / zoomFactor;
            }

            if (command.type === 'freehand' || command.type === 'erase') {
                tempContext.moveTo(command.points![0].x, command.points![0].y);
                command.points!.forEach((point) => tempContext.lineTo(point.x, point.y));
                tempContext.strokeStyle = command.type === 'erase' ? '#FFFFFF' : command.color;
                tempContext.globalCompositeOperation = command.type === 'erase' ? 'destination-out' : 'source-over';
                tempContext.stroke();
            } else if (command.type === 'line') {
                tempContext.moveTo(command.fromX!, command.fromY!);
                tempContext.lineTo(command.toX!, command.toY!);
                tempContext.strokeStyle = command.color;
                tempContext.globalCompositeOperation = 'source-over';
                tempContext.stroke();
            } else if (command.type === 'rectangle') {
                tempContext.strokeRect(command.x!, command.y!, command.width!, command.height!);
                tempContext.strokeStyle = command.color;
                tempContext.globalCompositeOperation = 'source-over';
                tempContext.stroke();
            } else if (command.type === 'circle') {
                tempContext.arc(command.x!, command.y!, command.radius!, 0, 2 * Math.PI);
                tempContext.strokeStyle = command.color;
                tempContext.globalCompositeOperation = 'source-over';
                tempContext.stroke();
            }
            else if (command.type === 'text') {
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

            if (currentAction.brushType === 'paint') {
                tempContext.globalAlpha = 0.5;
                tempContext.lineWidth = (currentAction.size * 2) / zoomFactor;
            } else if (currentAction.brushType === 'marker') {
                tempContext.globalAlpha = 0.7;
                tempContext.lineWidth = currentAction.size / zoomFactor;
            } else if (currentAction.brushType === 'pen') {
                tempContext.lineWidth = (currentAction.size * 0.5) / zoomFactor;
                tempContext.globalAlpha = 1;
            } else {
                tempContext.globalAlpha = 1;
                tempContext.lineWidth = currentAction.size / zoomFactor;
            }

            if (currentAction.type === 'freehand' || currentAction.type === 'erase') {
                tempContext.moveTo(currentAction.points![0].x, currentAction.points![0].y);
                currentAction.points!.forEach((point) => tempContext.lineTo(point.x, point.y));
                tempContext.strokeStyle = currentAction.type === 'erase' ? '#FFFFFF' : currentAction.color;
                tempContext.globalCompositeOperation = currentAction.type === 'erase' ? 'destination-out' : 'source-over';
                tempContext.stroke();
            } else if (currentAction.type === 'line') {
                tempContext.moveTo(currentAction.fromX!, currentAction.fromY!);
                tempContext.lineTo(currentAction.toX!, currentAction.toY!);
                tempContext.strokeStyle = currentAction.color;
                tempContext.globalCompositeOperation = 'source-over';
                tempContext.stroke();
            } else if (currentAction.type === 'rectangle') {
                tempContext.strokeRect(currentAction.x!, currentAction.y!, currentAction.width!, currentAction.height!);
                tempContext.strokeStyle = currentAction.color;
                tempContext.globalCompositeOperation = 'source-over';
                tempContext.stroke();
            } else if (currentAction.type === 'circle') {
                tempContext.arc(currentAction.x!, currentAction.y!, currentAction.radius!, 0, 2 * Math.PI);
                tempContext.strokeStyle = currentAction.color;
                tempContext.globalCompositeOperation = 'source-over';
                tempContext.stroke();
            }
            tempContext.globalAlpha = 1;
        }            // Đặt lại trạng thái context trước khi vẽ lại
        context.restore();
        tempContext.restore();

        // Sao chép nội dung từ canvas tạm sang canvas chính với tỷ lệ đúng
        context.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);

    }, [currentPage, currentAction, zoomLevel]);
    const getAdjustedCoordinates = (e: React.MouseEvent<HTMLCanvasElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / zoomFactor;
        const y = (e.clientY - rect.top) / zoomFactor;
        return { x, y };
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
        setClicking(true);
        if (isSpacePressed || currentTool === 'pan') {
            e.preventDefault();
            setIsPanning(true);
            setPanStart({ x: e.clientX - canvasOffset.x, y: e.clientY - canvasOffset.y });
            if (containerRef.current) {
                containerRef.current.style.cursor = 'grabbing';
            }
            return;
        }
        const { x, y } = getAdjustedCoordinates(e);

        if (currentTool === 'text' && (!textValue || !showTextInput)) {
            // Chỉ set vị trí text khi bắt đầu vẽ text mới
            setTextPosition({ x, y });
            setShowTextInput(true);
            return;
        }

        setIsDrawing(true);

        if (currentTool === 'pencil') {
            setCurrentAction({
                type: 'freehand',
                points: [{ x, y }],
                color: currentColor,
                size: currentBrushSize,
                brushType: currentBrushType as 'pencil' | 'pen' | 'marker' | 'paint',
            });
        } else if (currentTool === 'eraser') {
            setCurrentAction({
                type: 'erase',
                points: [{ x, y }],
                color: currentColor,
                size: currentBrushSize,
            });
        } else if (currentTool === 'line') {
            setCurrentAction({
                type: 'line',
                fromX: x,
                fromY: y,
                toX: x,
                toY: y,
                color: currentColor,
                size: currentBrushSize,
            });
        } else if (currentTool === 'rectangle') {
            setCurrentAction({
                type: 'rectangle',
                x,
                y,
                width: 0,
                height: 0,
                color: currentColor,
                size: currentBrushSize,
            });
        } else if (currentTool === 'circle') {
            setCurrentAction({
                type: 'circle',
                x,
                y,
                radius: 0,
                color: currentColor,
                size: currentBrushSize,
            });
        }
    };
    const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
        // Luôn cập nhật vị trí chuột
        const rect = canvasRef.current!.getBoundingClientRect();

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

        if (isSpacePressed || currentTool === 'pan') {
            return;
        }

        if (!isDrawing || !currentAction) return;

        const { x, y } = getAdjustedCoordinates(e);

        if (currentAction.type === 'freehand' || currentAction.type === 'erase') {
            setCurrentAction(prev => ({
                ...prev!,
                points: [...(prev!.points as Point[]), { x, y }],
            }));
        } else if (currentAction.type === 'line') {
            setCurrentAction(prev => ({
                ...prev!,
                toX: x,
                toY: y,
            }));
        } else if (currentAction.type === 'rectangle') {
            setCurrentAction(prev => ({
                ...prev!,
                x: Math.min(prev!.x!, x),
                y: Math.min(prev!.y!, y),
                width: Math.abs(x - prev!.x!),
                height: Math.abs(y - prev!.y!),
            }));
        } else if (currentAction.type === 'circle') {
            const radius = Math.sqrt((x - currentAction.x!) ** 2 + (y - currentAction.y!) ** 2);
            setCurrentAction(prev => ({ ...prev!, radius }));
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
                    className="absolute top-0 left-0 w-full h-full"
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
                    <TextEditor position={textPosition} />
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
