import { BRUSH_TYPE } from '../../contexts/DrawingContext';

export interface Point {
    x: number;
    y: number;
}
export interface DrawingCommand {
    type: 'freehand' | 'erase' | 'line' | 'rectangle' | 'circle' | 'text' | 'image' | 'select' | 'move';
    brushType?: BRUSH_TYPE;
    points?: Point[];
    fromX?: number;
    fromY?: number;
    toX?: number;
    toY?: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    radius?: number;
    color: string;
    size: number;
    text?: string;
    textStyle?: {
        fontFamily: string;
        fontSize: number;
        bold: boolean;
        italic: boolean;
        underline: boolean;
    };
    image?: HTMLImageElement;
    isSelected?: boolean;
    selectionArea?: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    moveOffset?: {
        x: number;
        y: number;
    };
    zIndex?: number;
}
export interface Page {
    id: number;
    name: string;
    commands: DrawingCommand[];
}
