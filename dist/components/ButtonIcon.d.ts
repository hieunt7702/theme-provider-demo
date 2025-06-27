/// <reference types="react" />
export interface IButtonIconProps {
    Icon: React.ComponentType<any>;
    isActive?: boolean;
    onClick?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    title?: string;
}
declare const ButtonIcon: ({ Icon, isActive, onClick, title, onChange }: IButtonIconProps) => import("react/jsx-runtime").JSX.Element;
export default ButtonIcon;
