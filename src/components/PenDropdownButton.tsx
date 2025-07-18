import { useTheme } from "../contexts/theme-context";
import Dropdown from "./Dropdown"
import { InputRange } from "./InputRange";
import { BRUSH_TYPE, useDrawing } from "../contexts/DrawingContext";
import ButtonIcon from "./ButtonIcon";
import { COLOR_DEFAULT } from "../static/static";
import ChipColor from "./ChipColor";

export interface PenDropdownButtonProps {
    isActive?: boolean;
    onColorChange?: (color: string) => void;
    onBrushSizeChange: (size: number) => void;
    onClick?: () => void;
    currentColor?: string;
}

export const PenDropdownButton = ({ isActive, onColorChange, onBrushSizeChange, onClick, currentColor }: PenDropdownButtonProps) => {
    const { iconSet, config } = useTheme();
    const { PencilOutlineIcon,
        MemoryPenOutlineIcon,
        ColorPenOutlineIcon,
        PaintPenOutlineIcon,
        PenOutlineIcon, } = iconSet;

    const dataPenTypes = [
        { type: BRUSH_TYPE.PENCIL, name: "Bút chì", icon: PencilOutlineIcon },
        { type: BRUSH_TYPE.MEMORY_PEN, name: "Bút nhớ", icon: MemoryPenOutlineIcon },
        { type: BRUSH_TYPE.COLOR_PEN, name: "Bút màu", icon: ColorPenOutlineIcon },
        { type: BRUSH_TYPE.PAINT_PEN, name: "Bút sơn", icon: PaintPenOutlineIcon },
        { type: BRUSH_TYPE.PEN, name: "Bút bi", icon: PenOutlineIcon }
    ]

    const handleOpacityChange = (newOpacity: number) => {
        setCurrentBrushOpacity(newOpacity);
    };

    const { currentBrushSize, currentBrushType, setCurrentBrushType, setCurrentBrushOpacity, currentBrushOpacity } = useDrawing();
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
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-medium">loại bút</span>
                        <div className="flex items-center gap-2">
                            {dataPenTypes.map((pen) => (
                                <ButtonIcon
                                    key={pen.name}
                                    Icon={pen.icon}
                                    onClick={() => setCurrentBrushType(pen.type)}
                                    isActive={currentBrushType === pen.type}
                                />
                            ))}
                        </div>

                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-medium">Độ dày nét</span>
                        <InputRange onChange={onBrushSizeChange} value={currentBrushSize} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-medium">Độ trong suốt</span>
                        <InputRange
                            value={currentBrushOpacity * 100}
                            onChange={(value) => handleOpacityChange(value / 100)}
                            maxValue={100}
                        />
                    </div>

                </div>
            }
        >
            {({ isOpen }) => (
                <ButtonIcon
                    title="Bút vẽ"
                    onClick={onClick}
                    Icon={iconSet.PencilOutlineIcon}
                    isActive={isOpen || isActive}
                />
            )}
        </Dropdown>
    )
}
