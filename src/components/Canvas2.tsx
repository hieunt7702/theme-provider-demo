import React, { forwardRef, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { DrawingCommand, Point, Page } from './types/drawing';

interface CanvasProps {
    currentPage: Page;
    setCurrentPage: Dispatch<SetStateAction<Page>>;
    currentAction: DrawingCommand | null;
    setCurrentAction: Dispatch<SetStateAction<DrawingCommand | null>>;
    isDrawing: boolean;
    setIsDrawing: Dispatch<SetStateAction<boolean>>;
    currentTool: string;
    currentColor: string;
    currentBrushSize: number;
    currentBrushType: string;
    setShowTextInput: Dispatch<SetStateAction<boolean>>;
    setTextPosition: Dispatch<SetStateAction<Point | null>>;
    zoomLevel: number;
    selectedElements: DrawingCommand[];
    setSelectedElements: Dispatch<SetStateAction<DrawingCommand[]>>;
    selectionArea: {x: number; y: number; width: number; height: number} | null;
    setSelectionArea: Dispatch<SetStateAction<{x: number; y: number; width: number; height: number} | null>>;
    isDragging: boolean;
    setIsDragging: Dispatch<SetStateAction<boolean>>;
    dragStart: Point | null;
    setDragStart: Dispatch<SetStateAction<Point | null>>;
    handleStartSelect: (point: Point) => void;
    handleUpdateSelection: (point: Point) => void;
    handleFinishSelect: () => void;
    updateSelectedElements: (offsetX: number, offsetY: number) => void;
}

export const Canvas2 = forwardRef<HTMLCanvasElement, CanvasProps>(
    (
        {
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
            zoomLevel,
            selectedElements,
            setSelectedElements,
            selectionArea,
            setSelectionArea,
            isDragging,
            setIsDragging,
            dragStart,
            setDragStart,
            handleStartSelect,
            handleUpdateSelection,
            handleFinishSelect,
            updateSelectedElements,
        },
        ref
    ) => {
        const canvasRef = useRef<HTMLCanvasElement>(null);
        const tempCanvasRef = useRef<HTMLCanvasElement>(null);
        const zoomFactor = zoomLevel / 100;

        useEffect(() => {
            if (ref && typeof ref === 'object' && 'current' in ref) {
                (ref as React.MutableRefObject<HTMLCanvasElement | null>).current = canvasRef.current;
            }
        }, [ref]);

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
                } else if (command.type === 'text') {
                    tempContext.font = command.font || `${16 / zoomFactor}px Arial`;
                    tempContext.fillStyle = command.color;
                    tempContext.globalCompositeOperation = 'source-over';
                    tempContext.fillText(command.text!, command.x!, command.y!);
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

        }, [currentPage, currentAction, zoomLevel]);const getAdjustedCoordinates = (e: React.MouseEvent<HTMLCanvasElement>) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - rect.left) / zoomFactor;
            const y = (e.clientY - rect.top) / zoomFactor;
            return { x, y };
        };

        const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
            const { x, y } = getAdjustedCoordinates(e);
            const adjustedX = x;
            const adjustedY = y;

            if (currentTool === 'select') {
                const clickedElement = currentPage.commands.find(cmd => {
                    if (cmd.type === 'freehand' || cmd.type === 'erase') {
                        return cmd.points?.some(point => 
                            Math.abs(point.x - adjustedX) < 5 && 
                            Math.abs(point.y - adjustedY) < 5
                        );
                    } else if (cmd.type === 'line') {
                        const dx = cmd.toX! - cmd.fromX!;
                        const dy = cmd.toY! - cmd.fromY!;
                        const length = Math.sqrt(dx * dx + dy * dy);
                        const dist = Math.abs((dy * adjustedX - dx * adjustedY + cmd.toX! * cmd.fromY! - cmd.toY! * cmd.fromX!) / length);
                        return dist < 5;
                    } else if (cmd.type === 'rectangle') {
                        return adjustedX >= cmd.x! && 
                               adjustedX <= cmd.x! + cmd.width! && 
                               adjustedY >= cmd.y! && 
                               adjustedY <= cmd.y! + cmd.height!;
                    } else if (cmd.type === 'circle') {
                        const dx = adjustedX - cmd.x!;
                        const dy = adjustedY - cmd.y!;
                        return Math.sqrt(dx * dx + dy * dy) <= cmd.radius!;
                    }
                    return false;
                });

                if (clickedElement) {
                    if (!selectedElements.includes(clickedElement)) {
                        if (!e.shiftKey) {
                            setSelectedElements([clickedElement]);
                        } else {
                            setSelectedElements(prev => [...prev, clickedElement]);
                        }
                    }
                    setIsDragging(true);
                    setDragStart({ x: adjustedX, y: adjustedY });
                } else {
                    if (!e.shiftKey) {
                        setSelectedElements([]);
                    }
                    handleStartSelect({ x: adjustedX, y: adjustedY });
                }
            } else {
                setSelectedElements([]);
                if (currentTool === 'pencil') {
                    setCurrentAction({
                        type: 'freehand',
                        points: [{ x: adjustedX, y: adjustedY }],
                        color: currentColor,
                        size: currentBrushSize,
                        brushType: currentBrushType as 'pencil' | 'pen' | 'marker' | 'paint',
                    });
                } else if (currentTool === 'eraser') {
                    setCurrentAction({
                        type: 'erase',
                        points: [{ x: adjustedX, y: adjustedY }],
                        color: currentColor,
                        size: currentBrushSize,
                    });
                } else if (currentTool === 'line') {
                    setCurrentAction({
                        type: 'line',
                        fromX: adjustedX,
                        fromY: adjustedY,
                        toX: adjustedX,
                        toY: adjustedY,
                        color: currentColor,
                        size: currentBrushSize,
                        brushType: currentBrushType as 'pencil' | 'pen' | 'marker' | 'paint',
                    });
                } else if (currentTool === 'rectangle') {
                    setCurrentAction({
                        type: 'rectangle',
                        x: adjustedX,
                        y: adjustedY,
                        width: 0,
                        height: 0,
                        color: currentColor,
                        size: currentBrushSize,
                        brushType: currentBrushType as 'pencil' | 'pen' | 'marker' | 'paint',
                    });
                } else if (currentTool === 'circle') {
                    setCurrentAction({
                        type: 'circle',
                        x: adjustedX,
                        y: adjustedY,
                        radius: 0,
                        color: currentColor,
                        size: currentBrushSize,
                        brushType: currentBrushType as 'pencil' | 'pen' | 'marker' | 'paint',
                    });
                } else if (currentTool === 'text') {
                    setTextPosition({ x: adjustedX, y: adjustedY });
                    setShowTextInput(true);
                    return;
                }
                setIsDrawing(true);
            }
        };const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
            const { x, y } = getAdjustedCoordinates(e);
            const adjustedX = x;
            const adjustedY = y;

            if (currentTool === 'select') {
                if (isDragging && dragStart && selectedElements.length > 0) {
                    const offsetX = adjustedX - dragStart.x;
                    const offsetY = adjustedY - dragStart.y;
                    updateSelectedElements(offsetX, offsetY);
                    setDragStart({ x: adjustedX, y: adjustedY });
                } else if (selectionArea) {
                    handleUpdateSelection({ x: adjustedX, y: adjustedY });
                }
            } else if (isDrawing) {
                if (currentAction?.type === 'freehand' || currentAction?.type === 'erase') {
                    setCurrentAction((prev) => ({
                        ...prev!,
                        points: [...(prev!.points as Point[]), { x: adjustedX, y: adjustedY }],
                    }));
                } else if (currentAction?.type === 'line') {
                    setCurrentAction((prev) => ({ ...prev!, toX: adjustedX, toY: adjustedY }));
                } else if (currentAction?.type === 'rectangle') {
                    setCurrentAction((prev) => ({
                        ...prev!,
                        x: Math.min(prev!.x!, adjustedX),
                        y: Math.min(prev!.y!, adjustedY),
                        width: Math.abs(adjustedX - prev!.x!),
                        height: Math.abs(adjustedY - prev!.y!),
                    }));
                } else if (currentAction?.type === 'circle') {
                    const radius = Math.sqrt((adjustedX - currentAction.x!) ** 2 + (adjustedY - currentAction.y!) ** 2);
                    setCurrentAction((prev) => ({ ...prev!, radius }));
                }
            }
        };

        const handleMouseUp = () => {
            if (currentTool === 'select') {
                if (isDragging) {
                    setIsDragging(false);
                    setDragStart(null);
                } else if (selectionArea) {
                    handleFinishSelect();
                }
            } else if (isDrawing && currentAction) {
                setCurrentPage((prev) => ({
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
            <div className="relative w-full h-[600px]">
                <canvas
                    ref={canvasRef}
                    className="absolute top-0 left-0 w-full h-full"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    style={{ cursor: currentTool === 'select' ? 'crosshair' : 'default' }}
                />
                <canvas
                    ref={tempCanvasRef}
                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                />
                {selectionArea && (
                    <div
                        className="absolute border-2 border-blue-500 bg-blue-200 bg-opacity-20 pointer-events-none"
                        style={{
                            left: selectionArea.x * zoomFactor,
                            top: selectionArea.y * zoomFactor,
                            width: selectionArea.width * zoomFactor,
                            height: selectionArea.height * zoomFactor
                        }}
                    />
                )}
                {selectedElements.map((element, index) => {
                    if (element.type === 'freehand' || element.type === 'line' || element.type === 'rectangle' || element.type === 'circle') {
                        const bounds = element.type === 'freehand' 
                            ? {
                                x: Math.min(...element.points!.map(p => p.x)),
                                y: Math.min(...element.points!.map(p => p.y)),
                                width: Math.max(...element.points!.map(p => p.x)) - Math.min(...element.points!.map(p => p.x)),
                                height: Math.max(...element.points!.map(p => p.y)) - Math.min(...element.points!.map(p => p.y))
                            }
                            : element.type === 'line'
                            ? {
                                x: Math.min(element.fromX!, element.toX!),
                                y: Math.min(element.fromY!, element.toY!),
                                width: Math.abs(element.toX! - element.fromX!),
                                height: Math.abs(element.toY! - element.fromY!)
                            }
                            : {
                                x: element.x!,
                                y: element.y!,
                                width: element.width || element.radius! * 2,
                                height: element.height || element.radius! * 2
                            };

                        return (
                            <div
                                key={index}
                                className="absolute border-2 border-blue-500 bg-transparent"
                                style={{
                                    left: bounds.x * zoomFactor,
                                    top: bounds.y * zoomFactor,
                                    width: bounds.width * zoomFactor,
                                    height: bounds.height * zoomFactor,
                                    cursor: isDragging ? 'grabbing' : 'grab'
                                }}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        );
    }
);
