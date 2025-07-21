import { ThemeProvider, useTheme } from "./contexts/theme-context";
import { DrawingProvider } from "./contexts/DrawingContext";
import DrawingContent from "./components/DrawingContent";
import { DrawingCommand } from "./types/drawing";
import {
  FileUploadEvent,
  DrawingState,
  DrawingResult,
  Area,
  TableConfig
} from "./types/toolbar-actions";
import React from "react";




const App = () => {
  const [dataCommands, setDataCommands] = React.useState<DrawingCommand[]>([]);

  // Example handlers for toolbar actions
  const handleSaveAsImage = (dataUrl: string) => {
    console.log('Saving image:', dataUrl);
    // Call your API here
  };

  const handleSaveAsPDF = (pdfBlob: Blob) => {
    console.log('Saving PDF:', pdfBlob);
    // Call your API here
  };

  const handleSaveToCloud = async (data: { commands: DrawingCommand[]; timestamp: number }) => {
    console.log('Saving to cloud:', data);
    // Call your cloud API here
    // Ví dụ:
    // await cloudApi.save(data);
  };

  const handleImageUpload = async (event: FileUploadEvent) => {
    console.log('Uploading image:', event);
    // Handle image upload to your server
    // Ví dụ:
    // const { file, position, dimensions } = event;
    // await uploadApi.upload(file, { position, dimensions });
  };

  const handleDrawingStart = (state: DrawingState) => {
    console.log('Drawing started with:', state);
    // Handle drawing start
    // Ví dụ lưu state để track session
  };

  const handleDrawingComplete = (result: DrawingResult) => {
    console.log('Drawing completed:', result);
    console.log('Current commands:', dataCommands);
    // Update commands state with the new drawing command
    setDataCommands(prev => [...prev, result.command]);
    // Handle drawing completion
    // Ví dụ: lưu command vào history
  };

  const handleExportToCloud = async (data: {
    type: 'png' | 'pdf';
    content: Blob | string;
    timestamp: number;
  }) => {
    console.log('Exporting to cloud:', data);
    // Handle cloud export logic
    // Ví dụ:
    // await cloudApi.export(data);
  };

  // Canvas action handlers
  const handleClean = (dataCommands: DrawingCommand[]) => {
    console.log('Canvas cleaned', dataCommands);
    // Thêm logic xử lý sau khi xóa canvas
    // Ví dụ: reset history, notify users
  };

  const handleUndo = (dataCommands: DrawingCommand[]) => {
    console.log('Undo action performed', dataCommands);
    // Thêm logic xử lý sau khi undo
    // Ví dụ: update history, notify users
  };

  const handleRedo = (dataCommands: DrawingCommand[]) => {
    console.log('Redo action performed', dataCommands);
    // Thêm logic xử lý sau khi redo
    // Ví dụ: update history, notify users
  };

  const handleErase = (area: Area) => {
    console.log('Erased area:', area);
    // Xử lý sau khi xóa một vùng
    // Ví dụ: lưu vào history để undo
  };

  const handleZoomIn = () => {
    console.log('Canvas zoomed in');
    // Xử lý sau khi zoom in
    // Ví dụ: lưu scale factor
  };

  const handleZoomOut = () => {
    console.log('Canvas zoomed out');
    // Xử lý sau khi zoom out
    // Ví dụ: update viewport
  };

  const handleAddTable = (config: TableConfig) => {
    console.log('Added table with config:', config);
    // Xử lý sau khi thêm bảng
    // Ví dụ: lưu table data để edit sau
  };

  return (
    <ThemeProvider>
      <DrawingProvider dataCommands={dataCommands} setDataCommands={setDataCommands}>
        <DrawingContent
          onSaveAsImage={handleSaveAsImage}
          onSaveAsPDF={handleSaveAsPDF}
          onSaveToCloud={handleSaveToCloud}
          onImageUpload={handleImageUpload}
          onExportToCloud={handleExportToCloud}
          onDrawingStart={handleDrawingStart}
          onDrawingComplete={handleDrawingComplete}
          onClean={handleClean}
          onErase={handleErase}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onAddTable={handleAddTable}
          onUndo={handleUndo}
          onRedo={handleRedo}
        />
      </DrawingProvider >
    </ThemeProvider>
  );
};


export default App;
