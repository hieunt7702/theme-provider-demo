export interface Point {
    x: number;
    y: number;
}

export interface DrawingCommand {
    type: 'freehand' | 'erase' | 'line' | 'rectangle' | 'circle' | 'text' | 'image' | 'select' | 'move';
    brushType?: 'pencil' | 'pen' | 'marker' | 'paint';
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
    font?: string;
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
    commands: DrawingCommand[];
}