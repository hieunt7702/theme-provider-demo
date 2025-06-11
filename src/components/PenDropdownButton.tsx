import { BsCheck } from "react-icons/bs";
import { useTheme } from "../theme-context";
import { ButtonIcon } from "./ButtonIcon"
import Dropdown from "./Dropdown"
import { InputRange } from "./InputRange";

interface PenDropdownButtonProps {
    isActive?: boolean;
    onColorChange?: (color: string) => void;
    onBrushSizeChange: (size: number) => void;
    onClick?: () => void;
    currentColor?: string;
}

export const PenDropdownButton = ({ isActive, onColorChange, onBrushSizeChange, onClick, currentColor }: PenDropdownButtonProps) => {
    const { iconSet, config } = useTheme();
    const dataColorsDefault = [
        "#000000", "#f0a3a3", "#f0c3a3", "#f0e3a3", "#a3f0a3", "#a3f0e3"
    ]

    return (
        <Dropdown
            placement="right"
            dropdown={
                <div className="flex flex-col gap-3 p-3">
                    <div className="flex flex-col gap-2">
                        <span>Màu</span>
                        <div className="flex items-center gap-2">
                            {dataColorsDefault.map((color) => (
                                <ChipColor
                                    key={color}
                                    color={color}
                                    onClick={() => onColorChange?.(color)}
                                    checked={currentColor === color}
                                />
                            ))}
                            <label htmlFor={"ColorPicker"} style={{ background: currentColor }} className={`w-6 h-6 flex-none rounded outline-none relative`}>
                                <input
                                    type="color"
                                    className="w-6 h6 flex-none rounded outline-none invisible"
                                    value={currentColor}
                                    onChange={(e) => onColorChange?.(e.target.value)}
                                    id={"ColorPicker"}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Độ dày nét</span>
                        <InputRange onChange={onBrushSizeChange} />
                    </div>
                </div>
            }
        >
            {({ isOpen }) => (
                <ButtonIcon
                    onClick={onClick}
                    Icon={iconSet.PencelOutline}
                    isActive={isOpen || isActive}
                />
            )}
        </Dropdown>
    )
}

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
        {checked && ("v")}
        {/* {checked && <iconSet.BsCheck />} */}
        {/* {checked && <BsCheck className="w-6 h-6 text-white" />} */}
    </div >
    );
}