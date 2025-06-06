import { useTheme } from "../theme-context";

interface IProps {
    Icon: React.ComponentType<any>;
    isActive?: boolean;
    onClick?: () => void;
}

export const ButtonIcon = ({ Icon, isActive, onClick }: IProps) => {
    const { config } = useTheme();
    const style = config.components.buttonIcon;

    console.log(isActive)

    return (        <button
            className={`h-8 w-8 flex items-center justify-center flex-none rounded hover:bg-gray-100 active:bg-gray-300 ${style} ${isActive ? "!bg-pink-200" : ""}`}
            onClick={onClick}
        >
            <Icon className="w-5 h-5" />
        </button>
    );
};