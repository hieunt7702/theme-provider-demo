export interface ToolbarCallbacks {
    onSaveAsImage?: (dataUrl: string) => void;
    onSaveAsPDF?: (pdfBlob: Blob) => void;
    onSaveToCloud?: () => void;
    onImageUpload?: (file: File) => void;
    onImagePaste?: (dataUrl: string) => void;
    onDrawingStart?: () => void;
    onDrawingComplete?: (paths: any[]) => void;
    onCopy?: (selection: any) => void;
    onCut?: (selection: any) => void;
    onPaste?: (data: any) => void;
    onExportPNG?: () => void;
    onExportPDF?: () => void;
    onExportToCloud?: () => void;
}
