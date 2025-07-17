/// <reference types="react" />
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
declare const ButtonIcon: ({ Icon, isActive, onClick, onMouseDown, onMouseUp, onMouseMove, title, onChange, className }: IButtonIconProps) => import("react/jsx-runtime").JSX.Element;
export default ButtonIcon;
