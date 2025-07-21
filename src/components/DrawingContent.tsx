import React from 'react';
import { Toolbar } from './Toolbar';
import { useDrawing } from '../contexts/DrawingContext';
import { ToolbarCallbacks } from '../types/toolbar-actions';
import { Canvas } from './Canvas';
import { DrawingCommand } from '../types/drawing';
import { useTheme } from '../contexts/theme-context';

interface DrawingContentProps extends ToolbarCallbacks {
    className?: string;
}

const DrawingContent: React.FC<DrawingContentProps> = (props) => {
    const { canvasRef } = useDrawing();
    const { config } = useTheme();
    return (
        <div className={`${config.global} min-h-screen w-full relative`} >
            <Toolbar {...props} />
            <Canvas
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