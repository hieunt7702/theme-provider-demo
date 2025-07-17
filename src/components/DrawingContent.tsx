import React from 'react';
import { Toolbar } from './Toolbar';
import { Canvas2 } from './Canvas2';
import { useDrawing } from '../contexts/DrawingContext';
import { ToolbarCallbacks } from '../types/toolbar-actions';

interface DrawingContentProps extends ToolbarCallbacks {
    className?: string;
}

const DrawingContent: React.FC<DrawingContentProps> = (props) => {
    const { canvasRef } = useDrawing();

    return (
        <div className="relative">
            <Toolbar {...props} />
            <Canvas2 
                ref={canvasRef}
                onDrawingStart={props.onDrawingStart}
                onDrawingComplete={props.onDrawingComplete}
                onImageUpload={props.onImageUpload}
                onImagePaste={props.onImagePaste}
                onClean={props.onClean}
                onErase={props.onErase}
                onZoomIn={props.onZoomIn}
                onZoomOut={props.onZoomOut}
                onAddTable={props.onAddTable}
            />
        </div>
    );
};

export default DrawingContent;