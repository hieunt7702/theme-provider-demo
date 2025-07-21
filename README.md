# Theme Provider Drawing Library

A powerful React library for creating drawing applications with theme support, extensive callback system, and image manipulation capabilities.

## Features

- 🎨 Rich Drawing Tools:
  - Multiple Pen Types:
    - Regular Pen
    - Paint Pen (50% opacity)
    - Memory Pen (70% opacity)
    - Color Pen (70% opacity)
    - Pencil (60% opacity)
  - Eraser tool
  - Text tool with rich formatting (bold, italic, underline)
  - Geometry tools:
    - Line
    - Square
    - Rectangle
    - Circle
    - Heart
    - Triangle
  - Image upload and editing capabilities
  - LaserPointer for presentations

- 🛠 Core Features:
  - Zoom in/out functionality
  - Canvas panning
  - Undo/Redo support
  - Multi-page support
  - Coordinate system display
  - Clear canvas option

- 💾 Export Options:
  - Save as PNG
  - Save as PDF
  - Cloud storage integration
  - Copy as image

- 🎯 Comprehensive Event System
- 🎨 Customizable Themes
- 📱 Responsive Design

## Installation

```bash
npm install o-drawing-library
# or
yarn add o-drawing-library
```

## Basic Usage with Callbacks

```tsx
import { ThemeProvider, DrawingProvider, DrawingContent } from 'o-drawing-library';
import 'o-drawing-library/dist/index.css'

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


## License

MIT © [hieunt7702]

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for details.
