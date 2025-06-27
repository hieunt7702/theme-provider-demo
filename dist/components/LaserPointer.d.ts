import { default as React } from 'react';

interface LaserPointerProps {
    x: number;
    y: number;
    isClicking: boolean;
    isDrawing: boolean;
    tool: string;
    scale?: number;
}
export declare const LaserPointer: React.FC<LaserPointerProps>;
export {};
