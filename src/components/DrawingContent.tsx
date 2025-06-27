import React from 'react';
import Toolbar from './Toolbar';
import { Toolbar2 } from './Toolbar2';
import { Canvas2 } from './Canvas2';
import { useDrawing } from '../contexts/DrawingContext';

const DrawingContent: React.FC = () => {
    const { canvasRef } = useDrawing();

    return (
        <div className="relative">
            <Toolbar2 />
            <Canvas2 ref={canvasRef} />
        </div>
    );
};

export default DrawingContent;