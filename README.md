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

  return (
    <DrawingContent 
      onSaveAsImage={handleSaveImage}
      onSaveToCloud={handleSaveToCloud}
      onDrawingStart={handleDrawingStart}
      onDrawingComplete={handleDrawingComplete}
      onImageUpload={handleImageUpload}
    />
  );
}
```

## Available Callbacks

### File Operations

```typescript
// Save canvas as image
onSaveAsImage?: (dataUrl: string) => void;

// Save canvas as PDF
onSaveAsPDF?: (pdfBlob: Blob) => void;

// Save drawing data to cloud
onSaveToCloud?: (data: {
  commands: DrawingCommand[];
  timestamp: number;
}) => Promise<void>;
```

### Drawing Actions

```typescript
// Called when drawing starts
onDrawingStart?: (state: DrawingState) => void;

interface DrawingState {
  tool: ToolType;           // Current tool (PENCIL, ERASER, GEOMETRY, TEXT)
  color?: string;          // Selected color
  size?: number;          // Brush size
  type?: GEOMETRY_TYPE;   // Geometry type (LINE, SQUARE, RECTANGLE, CIRCLE, HEART, TRIANGLE)
  brushType?: BRUSH_TYPE; // Pen type (PEN, PAINT_PEN, MEMORY_PEN, COLOR_PEN, PENCIL)
}

// Called when drawing completes
onDrawingComplete?: (result: DrawingResult) => void;

// Canvas Actions
onClean?: () => void;            // Clear the entire canvas
onErase?: (area: Area) => void;  // Erase a specific area
onZoomIn?: () => void;          // Zoom in canvas
onZoomOut?: () => void;         // Zoom out canvas
onAddTable?: (tableConfig: TableConfig) => void;  // Add a table

interface Area {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface TableConfig {
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

interface DrawingResult {
  command: DrawingCommand;  // The completed drawing command
  position: Point;         // Final position
  duration?: number;       // Drawing duration
}
```

### Canvas Features

```typescript
// Canvas navigation
onPan?: (offset: Point) => void;      // Canvas panning
onZoom?: (level: number) => void;     // Canvas zoom level change

// Drawing features
onBrushChange?: (brush: BRUSH_TYPE) => void;  // Change pen type
onGeometryChange?: (type: GEOMETRY_TYPE) => void; // Change geometry type
onTextStyleChange?: (style: TextStyle) => void;   // Change text style

interface TextStyle {
  fontFamily: string;
  fontSize: number;
  bold: boolean;
  italic: boolean;
  underline: boolean;
}

// Image handling
onImageUpload?: (event: FileUploadEvent) => Promise<void>;

interface FileUploadEvent {
  file: File;
  position?: Point;
  dimensions?: {
    width: number;
    height: number;
  };
}
```

### Selection Actions

```typescript
onCopy?: (selection: DrawingCommand[]) => void;
onCut?: (selection: DrawingCommand[]) => void;
onPaste?: (data: DrawingCommand[], position: Point) => void;
```

### Components

```jsx
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
```

## Components

### ThemeProvider

Provides theme context for the application.

```jsx
import { ThemeProvider, useTheme } from 'theme-provider-demo';

function MyComponent() {
  const { theme, setTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  );
}
```

### DrawingProvider

Provides drawing context and functionality.

```jsx
import { DrawingProvider, useDrawing } from 'theme-provider-demo';

function MyDrawingComponent() {
  const { importImage } = useDrawing();
  
  // Handle image upload
  const handleFileChange = (e) => {
    importImage(e);
  };
  
  return (
    <input type="file" onChange={handleFileChange} />
  );
}
```

### ButtonIcon

A customizable icon button component.

```jsx
import { ButtonIcon } from 'theme-provider-demo';

function ToolbarButton() {
  return (
    <ButtonIcon
      icon={<YourIcon />}
      onClick={() => console.log('clicked')}
      className="custom-class"
    />
  );
}
```

### ImageUploader

Component for uploading and manipulating images.

Features:
- Resize with aspect ratio preservation (hold Shift to ignore aspect ratio)
- Rotate image with the rotate icon
- Click outside to confirm changes
- Maintains original image quality

```jsx
import { ImageUploader } from 'theme-provider-demo';

function MyUploader() {
  return (
    <ImageUploader 
      icon={<UploadIcon />}
      className="custom-uploader"
    />
  );
}
```

## Drawing Content

The main drawing area component with toolbar.

```jsx
import { DrawingContent } from 'theme-provider-demo';

function MyDrawingApp() {
  return (
    <div className="drawing-container">
      <DrawingContent />
    </div>
  );
}
```

## Theme Customization

You can customize the theme by modifying the theme context:

```jsx
import { ThemeProvider } from 'theme-provider-demo';

const customTheme = {
  light: {
    // Your light theme colors
  },
  dark: {
    // Your dark theme colors
  }
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

## Example Use Cases

1. Canvas Controls Implementation:
```tsx
function DrawingApp() {
  const handleClean = () => {
    if (window.confirm('Are you sure you want to clear the canvas?')) {
      // Additional cleanup logic here
      console.log('Canvas cleared');
    }
  };

  const handleZoom = (type: 'in' | 'out') => {
    // Track zoom state if needed
    console.log(`Zooming ${type}`);
  };

  const handleAddTable = () => {
    const tableConfig = {
      rows: 3,
      columns: 4,
      position: { x: 100, y: 100 },
      cellWidth: 80,
      cellHeight: 40,
      style: {
        borderColor: '#000000',
        borderWidth: 1,
        backgroundColor: '#ffffff'
      }
    };
    console.log('Adding table:', tableConfig);
  };

  return (
    <DrawingContent 
      onClean={handleClean}
      onZoomIn={() => handleZoom('in')}
      onZoomOut={() => handleZoom('out')}
      onAddTable={handleAddTable}
      onErase={(area) => console.log('Erasing area:', area)}
    />
  );
}
```

2. Real-time Collaboration:
```tsx
<DrawingContent 
  onDrawingComplete={async (result) => {
    // Send drawing command to other users
    await socket.emit('drawing', {
      command: result.command,
      userId: currentUser.id
    });
  }}
/>
```

2. Auto-save Feature:
```tsx
<DrawingContent 
  onDrawingComplete={(result) => {
    // Save to local storage
    const history = getDrawingHistory();
    saveDrawingHistory([...history, result.command]);
  }}
  onSaveToCloud={async (data) => {
    // Backup to cloud
    await api.backupDrawing(data);
  }}
/>
```

3. Image Processing Pipeline:
```tsx
<DrawingContent 
  onImageUpload={async (event) => {
    const { file, dimensions } = event;
    
    // Process image before saving
    const optimizedImage = await imageProcessor.optimize(file);
    const thumbnail = await imageProcessor.createThumbnail(file);
    
    // Save both versions
    await Promise.all([
      storage.saveImage(optimizedImage),
      storage.saveThumbnail(thumbnail)
    ]);
  }}
/>
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Submit a pull request

## License

MIT © [Your Name]

Contributions are welcome! Please read our contributing guidelines.

## License

MIT © [hieunt7702]

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for details.
