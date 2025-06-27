import { useTheme } from "../contexts/theme-context";

export interface IButtonIconProps {
    Icon: React.ComponentType<any>;
    isActive?: boolean;
    onClick?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    title?: string;
}

const ButtonIcon = ({ Icon, isActive, onClick, title, onChange }: IButtonIconProps) => {
    const { config } = useTheme();
    const style = config.components.buttonIcon;

    return (<button
        className={`h-8 w-8 flex items-center justify-center flex-none rounded hover:bg-gray-100 active:bg-gray-300 ${style} ${isActive ? "!bg-pink-200" : ""}`}
        onClick={onClick}
        title={title}
    >
        <Icon className="w-5 h-5" />
    </button >
    );
};
export default ButtonIcon;