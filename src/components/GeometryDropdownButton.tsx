import { BsCheck } from "react-icons/bs";
import { useTheme } from "../contexts/theme-context";
import Dropdown from "./Dropdown"
import { InputRange } from "./InputRange";
import { BRUSH_TYPE, useDrawing } from "../contexts/DrawingContext";
import ButtonIcon from "./ButtonIcon";
import { GEOMETRY_TYPE } from "./types/drawing";
import { COLOR_DEFAULT } from "../static/static";

export interface GeometryDropdownButtonProps {
    isActive?: boolean;
    onColorChange?: (color: string) => void;
    onBrushSizeChange: (size: number) => void;
    onClick?: () => void;
    currentColor?: string;
}

export const GeometryDropdownButton = ({ isActive, onColorChange, onBrushSizeChange, onClick, currentColor }: GeometryDropdownButtonProps) => {
    const { iconSet, config } = useTheme();

    const dataGeometryType = [
        { type: GEOMETRY_TYPE.LINE, name: "Đường thẳng", icon: iconSet.LineIcon },
        { type: GEOMETRY_TYPE.SQUARE, name: "Hình vuông", icon: iconSet.SquareIcon },
        { type: GEOMETRY_TYPE.TRINGTANGLE, name: "Hình tam giác", icon: iconSet.TriangleIcon },
        { type: GEOMETRY_TYPE.CIRCLE, name: "Hình tròn", icon: iconSet.CircleIcon },
        { type: GEOMETRY_TYPE.HEART, name: "Trái tim", icon: iconSet.HeartIcon }
    ]


    const { currentBrushSize, setCurrentGeometryType, currentGeometryType } = useDrawing();
    return (
        <Dropdown
            placement="right"
            dropdown={
                <div className="flex flex-col gap-3 p-3">
                    <div className="flex flex-col gap-2">
                        <span>Màu</span>
                        <div className="flex items-center gap-2">
                            {COLOR_DEFAULT.map((color) => (
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
                        <span>Loại hình</span>
                        <div className="flex items-center gap-2">
                            {dataGeometryType.map((geo) => (
                                <ButtonIcon
                                    key={geo.name}
                                    Icon={geo.icon || iconSet.PencilOutlineIcon}
                                    onClick={() => setCurrentGeometryType(geo.type)}
                                    isActive={currentGeometryType === geo.type}
                                />
                            ))}
                        </div>

                    </div>
                    <div className="flex flex-col gap-2">
                        <span>Độ dày nét</span>
                        <InputRange onChange={onBrushSizeChange} value={currentBrushSize} />
                    </div>
                </div>
            }
        >
            {({ isOpen }) => (
                <ButtonIcon
                    onClick={onClick}
                    Icon={iconSet.SplineIcon}
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
        {checked && <iconSet.CheckIcon className="w-4 h-4" />}
        {/* {checked && <BsCheck className="w-6 h-6 text-white" />} */}
    </div >
    );
}