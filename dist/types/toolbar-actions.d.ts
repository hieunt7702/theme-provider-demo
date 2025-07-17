import { DrawingCommand, Point } from './drawing';

export interface FileUploadEvent {
    file: File;
    position?: Point;
    dimensions?: {
        width: number;
        height: number;
    };
}
export interface DrawingState {
    tool: string;
    color?: string;
    size?: number;
    type?: string;
}
export interface DrawingResult {
    command: DrawingCommand;
    position: Point;
    duration?: number;
}
export interface Area {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface TableConfig {
    rows: number;
    columns: number;
    position: Point;
    cellWidth?: number;
    cellHeight?: number;
    style?: {
        borderColor?: string;
        borderWidth?: number;
        backgroundColor?: string;
    };
}
export interface ToolbarCallbacks {
    onSaveAsImage?: (dataUrl: string) => void;
    onSaveAsPDF?: (pdfBlob: Blob) => void;
    onSaveToCloud?: (data: {
        commands: DrawingCommand[];
        timestamp: number;
    }) => Promise<void>;
    onDrawingStart?: (state: DrawingState) => void;
    onDrawingComplete?: (result: DrawingResult) => void;
    onImageUpload?: (event: FileUploadEvent) => Promise<void>;
    onImagePaste?: (dataUrl: string, position: Point) => void;
    onCopy?: (selection: DrawingCommand[]) => void;
    onCut?: (selection: DrawingCommand[]) => void;
    onPaste?: (data: DrawingCommand[], position: Point) => void;
    onClean?: () => void;
    onErase?: (area: Area) => void;
    onZoomIn?: () => void;
    onZoomOut?: () => void;
    onAddTable?: (config: TableConfig) => void;
    onExportPNG?: (dataUrl: string, dimensions: {
        width: number;
        height: number;
    }) => void;
    onExportPDF?: (blob: Blob) => void;
    onExportToCloud?: (data: {
        type: 'png' | 'pdf';
        content: Blob | string;
        timestamp: number;
    }) => Promise<void>;
}
