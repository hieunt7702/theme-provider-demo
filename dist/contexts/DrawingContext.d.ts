import { default as React, ReactNode, Dispatch, SetStateAction } from 'react';
import { Page, DrawingCommand, Point, ToolType, GEOMETRY_TYPE } from '../types/drawing';

interface DrawingContextType {
    currentTool: ToolType;
    setCurrentTool: (tool: ToolType) => void;
    currentBrushType: BRUSH_TYPE;
    setCurrentBrushType: (brushType: BRUSH_TYPE) => void;
    currentGeometryType: GEOMETRY_TYPE;
    setCurrentGeometryType: (geometryType: GEOMETRY_TYPE) => void;
    currentColor: string;
    setCurrentColor: (color: string) => void;
    currentBrushSize: number;
    setCurrentBrushSize: (size: number) => void;
    pages: Page[];
    setPages: Dispatch<SetStateAction<Page[]>>;
    addPage: () => void;
    deletePage: (id: number) => void;
    renamePage: (id: number, newName: string) => void;
    currentPageId: number;
    setCurrentPageId: (id: number) => void;
    currentPage: Page;
    setCurrentPage: Dispatch<SetStateAction<Page>>;
    isDrawing: boolean;
    setIsDrawing: Dispatch<SetStateAction<boolean>>;
    currentAction: DrawingCommand | null;
    setCurrentAction: Dispatch<SetStateAction<DrawingCommand | null>>;
    undoStack: DrawingCommand[];
    setUndoStack: Dispatch<SetStateAction<DrawingCommand[]>>;
    mousePosition: Point | null;
    setMousePosition: Dispatch<SetStateAction<Point | null>>;
    showTextInput: boolean;
    setShowTextInput: Dispatch<SetStateAction<boolean>>;
    textPosition: Point | null;
    setTextPosition: Dispatch<SetStateAction<Point | null>>;
    textValue: string;
    setTextValue: Dispatch<SetStateAction<string>>;
    textStyle: {
        fontFamily: string;
        fontSize: number;
        bold: boolean;
        italic: boolean;
        underline: boolean;
    };
    setTextStyle: Dispatch<SetStateAction<{
        fontFamily: string;
        fontSize: number;
        bold: boolean;
        italic: boolean;
        underline: boolean;
    }>>;
    zoomLevel: number;
    setZoomLevel: Dispatch<SetStateAction<number>>;
    canvasRef: React.RefObject<HTMLCanvasElement | null>;
    undo: () => void;
    redo: () => void;
    clear: () => void;
    zoomIn: () => void;
    zoomOut: () => void;
    resetZoom: () => void;
    handleTextSubmit: () => void;
    saveAsPNG: () => void;
    saveAsPDF: () => void;
    importImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
    copyAsImage: () => void;
    isClicking: boolean;
    setClicking: Dispatch<SetStateAction<boolean>>;
}
export declare enum BRUSH_TYPE {
    PENCIL = "pencil",
    MEMORY_PEN = "memory_pen",
    COLOR_PEN = "color_pen",
    PAINT_PEN = "paint_pen",
    PEN = "pen"
}
export declare const DrawingProvider: React.FC<{
    children: ReactNode;
}>;
export declare const useDrawing: () => DrawingContextType;
export {};
