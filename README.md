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
import { DrawingContent } from 'theme-provider-demo';

function App() {
  // File operation handlers
  const handleSaveImage = (dataUrl: string) => {
    console.log('Saving image:', dataUrl);
  };

  const handleSaveToCloud = async (data: { commands: any[]; timestamp: number }) => {
    console.log('Saving to cloud:', data);
    await cloudStorage.save(data);
  };

  // Drawing action handlers
  const handleDrawingStart = (state: DrawingState) => {
    console.log('Drawing started with:', state);
    analytics.trackDrawingStart(state);
  };

  const handleDrawingComplete = (result: DrawingResult) => {
    console.log('Drawing completed:', result);
    saveToHistory(result.command);
  };

  // Image handling
  const handleImageUpload = async (event: FileUploadEvent) => {
    const { file, position, dimensions } = event;
    console.log('Uploading image at:', position);
    await uploadToServer(file, dimensions);
  };

  const handleAction = () => {

  }

  return (
    <DrawingContent 
      onSaveAsImage={handleSaveImage}
      onSaveToCloud={handleSaveToCloud}
      onDrawingStart={handleDrawingStart}
      onDrawingComplete={handleDrawingComplete}
      onImageUpload={handleImageUpload}
      onDrawingStart={handleAction}
      onImagePaste={handleAction}
      onClean={handleAction}
      onErase={handleAction}
      onZoomIn={handleAction}
      onZoomOut={handleAction}
    />
  );
}

### Components

jsx
import { ThemeProvider, DrawingProvider, DrawingContent } from 'theme-provider-demo';
import 'o-drawing-library/dist/index.css'

function App() {
  return (
    <ThemeProvider>
      <DrawingProvider>
        <DrawingContent />
      </DrawingProvider>
    </ThemeProvider>
  );
}

## License

MIT © [hieunt7702]

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for details.
