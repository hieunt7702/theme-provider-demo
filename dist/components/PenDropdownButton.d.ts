export interface PenDropdownButtonProps {
    isActive?: boolean;
    onColorChange?: (color: string) => void;
    onBrushSizeChange: (size: number) => void;
    onClick?: () => void;
    currentColor?: string;
}
export declare const PenDropdownButton: ({ isActive, onColorChange, onBrushSizeChange, onClick, currentColor }: PenDropdownButtonProps) => import("react/jsx-runtime").JSX.Element;
