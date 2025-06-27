import exp from "constants";
import { useTheme } from "../contexts/theme-context";

const ButtonBorder = () => {
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

export default ButtonBorder;