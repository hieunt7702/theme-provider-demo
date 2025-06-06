import { useTheme } from "../theme-context";

export const ButtonBorder = () => {
    const { config } = useTheme();
    const style = config.components.buttonBorder;

    return (
        <button
            className={`px-4 py-2 rounded ${style} `}
        >
            Border Button
        </button>
    );
};