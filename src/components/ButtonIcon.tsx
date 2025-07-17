import { useTheme } from "../contexts/theme-context";

export interface IButtonIconProps {
    Icon: React.ComponentType<any>;
    isActive?: boolean;
    onClick?: () => void;
    onMouseDown?: () => void;
    onMouseUp?: () => void;
    onMouseMove?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    title?: string;
    className?: string;
}

const ButtonIcon = ({ 
    Icon, 
    isActive, 
    onClick, 
    onMouseDown,
    onMouseUp,
    onMouseMove,
    title, 
    onChange, 
    className 
}: IButtonIconProps) => {
    const { config } = useTheme();
    const style = config.components.buttonIcon;
    const isActiveStyle = config.components.buttonSelected;

    return (
        <button
            className={`h-8 w-8 flex items-center justify-center flex-none rounded hover:bg-gray-100 active:bg-gray-300 ${style} ${isActive ? isActiveStyle : ""} ${className}`}
            onClick={onClick}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
            title={title}
    >
        <Icon className="w-5 h-5" strokeWidth={1.6} />
    </button >
    );
};
export default ButtonIcon;