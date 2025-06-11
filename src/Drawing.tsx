import React from 'react';
import Toolbar from './components/Toolbar';
import { Toolbar2 } from './components/Toolbar2';
import { Canvas2 } from './components/Canvas2';
import { useDrawing } from './contexts/DrawingContext';

const Drawing: React.FC = () => {
    const {
        currentTool,
        setCurrentTool,
        currentBrushType,
        setCurrentBrushType,
        currentColor,
        setCurrentColor,
        currentBrushSize,
        setCurrentBrushSize,
        pages,
        setPages,
        currentPageId,
        setCurrentPageId,
        currentPage,
        setCurrentPage,
        isDrawing,
        setIsDrawing,
        currentAction,
        setCurrentAction,
        showTextInput,
        setShowTextInput,
        textPosition,
        setTextPosition,
        textValue,
        setTextValue,
        textStyle,
        setTextStyle,
        zoomLevel,
        selectedElements,
        setSelectedElements,
        selectionArea,
        setSelectionArea,
        isDragging,
        setIsDragging,
        dragStart,
        setDragStart,
        canvasRef,
        undo,
        redo,
        clear,
        zoomIn,
        zoomOut,
        resetZoom,
        handleTextSubmit,
        saveAsPNG,
        saveAsPDF,
        importImage,
        handleStartSelect,
        handleUpdateSelection,
        handleFinishSelect,
        updateSelectedElements,
    } = useDrawing();

    return (
        <div className="p-4 relative">
            <h1 className="text-2xl font-bold mb-4">Ứng dụng vẽ tùy chỉnh</h1>
            <Toolbar />
            <Toolbar2 />
            <Canvas2
                ref={canvasRef}
            />
        </div>
    );
};

export default Drawing;