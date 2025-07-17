import { default as React } from 'react';
import { DrawingCommand } from '../types/drawing';

interface ImageUploadEditorProps {
    onApply: (command: DrawingCommand) => void;
}
declare const ImageUploadEditor: React.FC<ImageUploadEditorProps>;
export default ImageUploadEditor;
