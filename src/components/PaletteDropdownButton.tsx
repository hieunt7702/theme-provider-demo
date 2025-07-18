import { useTheme } from "../contexts/theme-context";
import Dropdown from "./Dropdown"
import ButtonIcon from "./ButtonIcon";
import { COLOR_DEFAULT } from "../static/static";
import ChipColor from "./ChipColor";
import { useDrawing } from "../contexts/DrawingContext";
import { ToolType } from "../types/drawing";

export interface PaletteDropdownButtonProps {
    isActive?: boolean;
    onColorChange?: (color: string) => void;
    onClick?: () => void;
    currentColor?: string;
}

export const PaletteDropdownButton = ({ isActive, onColorChange, onClick, currentColor }: PaletteDropdownButtonProps) => {
    const { iconSet } = useTheme();
    const { setCurrentTool } = useDrawing();
    return (
        <Dropdown
            placement="right"
            dropdown={
                <div className="flex flex-col gap-3 p-3">
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-medium">Màu</span>
                        <div className="flex items-center gap-2">
                            {COLOR_DEFAULT.map((color) => (
                                <ChipColor
                                    key={color}
                                    color={color}
                                    onClick={() => onColorChange?.(color)}
                                    checked={currentColor === color}
                                />
                            ))}
                            <label htmlFor={"ColorPicker"} style={{ background: currentColor }} className={`w-6 h-6 flex-none rounded outline-none relative cursor-pointer`}>
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
                </div>
            }
            handleOpenChange={(isOpen) => {
                if (!isOpen) {
                    setCurrentTool(ToolType.PENCIL);
                }
            }}
        >
            {({ isOpen }) => (
                <ButtonIcon
                    onClick={onClick}
                    Icon={iconSet.PaletteIcon}
                    isActive={isOpen || isActive}
                    title="Bảng màu"
                />
            )}
        </Dropdown>
    )
}

