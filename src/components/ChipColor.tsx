import { useTheme } from "../contexts/theme-context";
import DrawingContent from "./DrawingContent";

interface ChipColorProps {
    color: string;
    onClick?: () => void;
    checked?: boolean;
}
const ChipColor = ({ color, onClick, checked }: ChipColorProps) => {
    const { config, iconSet } = useTheme();
    return (<div
        className="w-6 h-6 flex-none rounded cursor-pointer hover:opacity-95 active:opacity-80 relative flex items-center justify-center text-white"
        style={{ backgroundColor: color }}
        onClick={onClick}
    >
        {checked && <iconSet.CheckIcon className="w-4 h-4" />}
        {/* {checked && <BsCheck className="w-6 h-6 text-white" />} */}
    </div >
    );
}

export default ChipColor;
