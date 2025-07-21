import { DrawingCommand, Point } from "./drawing";

export interface FileUploadEvent {
  file: File;
  position?: Point; // Vị trí muốn paste ảnh
  dimensions?: {
    width: number;
    height: number;
  };
}

export interface DrawingState {
  tool: string;       // Công cụ đang sử dụng (pen, eraser, etc.)
  color?: string;     // Màu sắc 
  size?: number;      // Kích thước nét vẽ
  type?: string;      // Loại hình vẽ (với geometry)
}

export interface DrawingResult {
  command: DrawingCommand;     // Command vừa vẽ xong
  position: Point;            // Vị trí cuối cùng
  duration?: number;          // Thời gian vẽ
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
  // File operations
  onSaveAsImage?: (dataUrl: string) => void;
  onSaveAsPDF?: (pdfBlob: Blob) => void;
  onSaveToCloud?: (data: {
    commands: DrawingCommand[];
    timestamp: number;
  }) => Promise<void>;
  
  // Drawing operations
  onDrawingStart?: (state: DrawingState) => void;
  onDrawingComplete?: (result: DrawingResult) => void;
  
  // Image handling
  onImageUpload?: (event: FileUploadEvent) => Promise<void>;
  onImagePaste?: (dataUrl: string, position: Point) => void;
  
  // Selection actions
  onCopy?: (selection: DrawingCommand[]) => void;
  onCut?: (selection: DrawingCommand[]) => void;
  onPaste?: (data: DrawingCommand[], position: Point) => void;
  
  // Canvas actions
  onUndo?: (dataCommands: DrawingCommand[]) => void;
  onRedo?: (dataCommands: DrawingCommand[]) => void;
  onClean?: (dataCommands: DrawingCommand[]) => void;
  onErase?: (area: Area) => void;
  onZoomIn?: () => void;
  onZoomOut?: () => void;
  onAddTable?: (config: TableConfig) => void;
  
  // Export actions
  onExportPNG?: (dataUrl: string, dimensions: { width: number; height: number }) => void;
  onExportPDF?: (blob: Blob) => void;
  onExportToCloud?: (data: {
    type: 'png' | 'pdf';
    content: Blob | string;
    timestamp: number;
  }) => Promise<void>;
}
