export interface GeometryDropdownButtonProps {
    isActive?: boolean;
    onColorChange?: (color: string) => void;
    onBrushSizeChange: (size: number) => void;
    onClick?: () => void;
    currentColor?: string;
}
export declare const GeometryDropdownButton: ({ isActive, onColorChange, onBrushSizeChange, onClick, currentColor }: GeometryDropdownButtonProps) => import("react/jsx-runtime").JSX.Element;
