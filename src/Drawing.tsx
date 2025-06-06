import React, { useRef, useState, Dispatch, SetStateAction } from 'react';
import { Page, DrawingCommand, Point } from './components/types/drawing';
import Toolbar from './components/Toolbar';
import { Toolbar2 } from './components/Toolbar2';
import { Canvas2 } from './components/Canvas2';

const Drawing: React.FC = () => {
    const [currentTool, setCurrentTool] = useState('pencil');
    const [currentBrushType, setCurrentBrushType] = useState('pencil');
    const [currentColor, setCurrentColor] = useState('#000000');
    const [currentBrushSize, setCurrentBrushSize] = useState(5);
    const [pages, setPages] = useState<Page[]>([{ id: 1, commands: [] }]);
    const [currentPageId, setCurrentPageId] = useState(1);
    const [undoStack, setUndoStack] = useState<DrawingCommand[]>([]);
    const [currentAction, setCurrentAction] = useState<DrawingCommand | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [showTextInput, setShowTextInput] = useState(false);
    const [textPosition, setTextPosition] = useState<Point | null>(null);
    const [textValue, setTextValue] = useState('');
    const [zoomLevel, setZoomLevel] = useState(100);
    // Thêm các state mới cho chức năng chọn và di chuyển
    const [selectedElements, setSelectedElements] = useState<DrawingCommand[]>([]);
    const [selectionArea, setSelectionArea] = useState<{x: number; y: number; width: number; height: number} | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState<Point | null>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const currentPage = pages.find((page) => page.id === currentPageId)!;
    const setCurrentPage: Dispatch<SetStateAction<Page>> = (value) => {
        setPages((prevPages) => {
            const newPages = prevPages.map((page) =>
                page.id === currentPageId
                    ? typeof value === 'function'
                        ? value(page)
                        : value
                    : page
            );
            return newPages;
        });
    };

    const zoomIn = () => {
        setZoomLevel((prev) => Math.min(prev + 10, 200)); // Giới hạn zoom tối đa 200%
    };

    const zoomOut = () => {
        setZoomLevel((prev) => Math.max(prev - 10, 50)); // Giới hạn zoom tối thiểu 50%
    };

    const resetZoom = () => {
        setZoomLevel(100); // Đặt lại về 100%
    };

    const undo = () => {
        if (currentPage.commands.length > 0) {
            const lastCommand = currentPage.commands[currentPage.commands.length - 1];
            setCurrentPage((prev) => ({
                ...prev,
                commands: prev.commands.slice(0, -1),
            }));
            setUndoStack((prev) => [...prev, lastCommand]);
        }
    };

    const redo = () => {
        if (undoStack.length > 0) {
            const command = undoStack[undoStack.length - 1];
            setUndoStack((prev) => prev.slice(0, -1));
            setCurrentPage((prev) => ({
                ...prev,
                commands: [...prev.commands, command],
            }));
        }
    };

    const clear = () => {
        setCurrentPage({ ...currentPage, commands: [] });
        setUndoStack([]);
        setCurrentAction(null);
        setIsDrawing(false);
        setSelectedElements([]);
        setSelectionArea(null);
        setIsDragging(false);
        setDragStart(null);
    };

    const handleStartSelect = (point: Point) => {
        setSelectionArea({x: point.x, y: point.y, width: 0, height: 0});
        setSelectedElements([]);
    };

    const handleUpdateSelection = (point: Point) => {
        if (!selectionArea) return;
        
        setSelectionArea({
            x: Math.min(selectionArea.x, point.x),
            y: Math.min(selectionArea.y, point.y),
            width: Math.abs(point.x - selectionArea.x),
            height: Math.abs(point.y - selectionArea.y)
        });
    };

    const handleFinishSelect = () => {
        if (!selectionArea) return;

        const selected = currentPage.commands.filter(cmd => {
            if (cmd.type === 'freehand' || cmd.type === 'erase') {
                return cmd.points?.some(point => 
                    point.x >= selectionArea.x &&
                    point.x <= selectionArea.x + selectionArea.width &&
                    point.y >= selectionArea.y &&
                    point.y <= selectionArea.y + selectionArea.height
                );
            } else if (cmd.type === 'line') {
                return (cmd.fromX! >= selectionArea.x &&
                    cmd.fromX! <= selectionArea.x + selectionArea.width &&
                    cmd.fromY! >= selectionArea.y &&
                    cmd.fromY! <= selectionArea.y + selectionArea.height) ||
                    (cmd.toX! >= selectionArea.x &&
                    cmd.toX! <= selectionArea.x + selectionArea.width &&
                    cmd.toY! >= selectionArea.y &&
                    cmd.toY! <= selectionArea.y + selectionArea.height);
            } else if (cmd.type === 'rectangle' || cmd.type === 'text' || cmd.type === 'image') {
                return cmd.x! >= selectionArea.x &&
                    cmd.x! + (cmd.width || 0) <= selectionArea.x + selectionArea.width &&
                    cmd.y! >= selectionArea.y &&
                    cmd.y! + (cmd.height || 0) <= selectionArea.y + selectionArea.height;
            } else if (cmd.type === 'circle') {
                return cmd.x! >= selectionArea.x &&
                    cmd.x! <= selectionArea.x + selectionArea.width &&
                    cmd.y! >= selectionArea.y &&
                    cmd.y! <= selectionArea.y + selectionArea.height;
            }
            return false;
        });
        
        setSelectedElements(selected);
        setSelectionArea(null);
    };

    const updateSelectedElements = (offsetX: number, offsetY: number) => {
        setCurrentPage(prevPage => ({
            ...prevPage,
            commands: prevPage.commands.map(cmd => {
                if (!selectedElements.includes(cmd)) return cmd;
                
                if (cmd.type === 'freehand' || cmd.type === 'erase') {
                    return {
                        ...cmd,
                        points: cmd.points!.map(point => ({
                            x: point.x + offsetX,
                            y: point.y + offsetY
                        }))
                    };
                } else if (cmd.type === 'line') {
                    return {
                        ...cmd,
                        fromX: cmd.fromX! + offsetX,
                        fromY: cmd.fromY! + offsetY,
                        toX: cmd.toX! + offsetX,
                        toY: cmd.toY! + offsetY
                    };
                } else if (cmd.type === 'rectangle' || cmd.type === 'text' || cmd.type === 'circle' || cmd.type === 'image') {
                    return {
                        ...cmd,
                        x: cmd.x! + offsetX,
                        y: cmd.y! + offsetY
                    };
                }
                return cmd;
            })
        }));
    };

    const saveAsPNG = () => {
        if (canvasRef.current) {
            const dataURL = canvasRef.current.toDataURL();
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = `drawing-page-${currentPageId}.png`;
            link.click();
        }
    };

    const saveAsPDF = () => {
        if (canvasRef.current) {
            const dataURL = canvasRef.current.toDataURL('image/png');
            const latexContent = `
        \\documentclass[a4paper]{article}
        \\usepackage{graphicx}
        \\usepackage[margin=0.5in]{geometry}
        \\begin{document}
        \\centering
        \\includegraphics[width=\\textwidth]{${dataURL}}
        \\end{document}
      `;
            const blob = new Blob([latexContent], { type: 'text/latex' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `drawing-page-${currentPageId}.pdf`;
            link.click();
            URL.revokeObjectURL(url);
        }
    };

    const importImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                setCurrentPage((prev) => ({
                    ...prev,
                    commands: [
                        ...prev.commands,
                        { type: 'image', image: img, color: '#000000', size: 1 },
                    ],
                }));
            };
        }
    };

    const handleTextSubmit = () => {
        if (textValue && textPosition) {
            setCurrentPage((prev) => ({
                ...prev,
                commands: [
                    ...prev.commands,
                    {
                        type: 'text',
                        x: textPosition.x,
                        y: textPosition.y,
                        text: textValue,
                        color: currentColor,
                        size: currentBrushSize,
                        font: '16px Arial',
                    },
                ],
            }));
            setShowTextInput(false);
            setTextValue('');
            setTextPosition(null);
        }
    };

    return (
        <div className="p-4 relative">
            <h1 className="text-2xl font-bold mb-4">Ứng dụng vẽ tùy chỉnh</h1>
            <Toolbar
                setCurrentTool={setCurrentTool}
                setCurrentBrushType={setCurrentBrushType}
                setCurrentColor={setCurrentColor}
                setCurrentBrushSize={setCurrentBrushSize}
                undo={undo}
                redo={redo}
                clear={clear}
                saveAsPNG={saveAsPNG}
                saveAsPDF={saveAsPDF}
                importImage={importImage}
                pages={pages}
                setPages={setPages}
                currentPageId={currentPageId}
                setCurrentPageId={setCurrentPageId}
                zoomLevel={zoomLevel}
                zoomIn={zoomIn}
                zoomOut={zoomOut}
                resetZoom={resetZoom}
            />
            <Toolbar2 />
            <Canvas2
                ref={canvasRef}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                currentAction={currentAction}
                setCurrentAction={setCurrentAction}
                isDrawing={isDrawing}
                setIsDrawing={setIsDrawing}
                currentTool={currentTool}
                currentColor={currentColor}
                currentBrushSize={currentBrushSize}
                currentBrushType={currentBrushType}
                setShowTextInput={setShowTextInput}
                setTextPosition={setTextPosition}
                zoomLevel={zoomLevel}
                selectedElements={selectedElements}
                setSelectedElements={setSelectedElements}
                selectionArea={selectionArea}
                setSelectionArea={setSelectionArea}
                isDragging={isDragging}
                setIsDragging={setIsDragging}
                dragStart={dragStart}
                setDragStart={setDragStart}
                handleStartSelect={handleStartSelect}
                handleUpdateSelection={handleUpdateSelection}
                handleFinishSelect={handleFinishSelect}
                updateSelectedElements={updateSelectedElements}
            />
            {showTextInput && textPosition && (
                <div
                    className="absolute"
                    style={{
                        top: textPosition.y * (zoomLevel / 100),
                        left: textPosition.x * (zoomLevel / 100),
                        transform: `scale(${zoomLevel / 100})`,
                        transformOrigin: 'top left',
                    }}
                >
                    <input
                        type="text"
                        value={textValue}
                        onChange={(e) => setTextValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleTextSubmit()}
                        className="border p-1"
                        autoFocus
                    />
                    <button
                        onClick={handleTextSubmit}
                        className="ml-2 px-2 py-1 bg-blue-500 text-white rounded"
                    >
                        OK
                    </button>
                </div>
            )}
        </div>
    );
};

export default Drawing;