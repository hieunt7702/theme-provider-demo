import { default as React } from 'react';
import { ToolbarCallbacks } from '../types/toolbar-actions';

interface DrawingContentProps extends ToolbarCallbacks {
    className?: string;
}
declare const DrawingContent: React.FC<DrawingContentProps>;
export default DrawingContent;
