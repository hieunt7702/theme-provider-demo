import { BsCheck } from "react-icons/bs";
import { useTheme } from "../contexts/theme-context";
import { useDrawing } from "../contexts/DrawingContext";
import ButtonIcon from "./ButtonIcon"
import Dropdown from "./Dropdown"
import { COLOR_DEFAULT, FONT_FAMILY_DEFAULT, FONT_SIZE_DEFAULT } from "../static/static";

interface TextEditorDropdownButtonProps {
    isActive?: boolean;
    onClick?: () => void;
}

interface ChipColorProps {
    color: string;
    onClick?: () => void;
    checked?: boolean;
}

export const TextEditorDropdownButton = ({ isActive, onClick }: TextEditorDropdownButtonProps) => {
    const { iconSet } = useTheme();
    const {
        currentColor,
        setCurrentColor,
        textStyle,
        setTextStyle
    } = useDrawing();

    return (
        <Dropdown
            placement="right"
            dropdown={
                <div className="flex flex-col gap-3 p-3 min-w-[200px] bg-white rounded shadow-lg">
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-medium">Color</span>
                        <div className="flex items-center gap-2 flex-wrap">
                            {COLOR_DEFAULT.map((color) => (
                                <ChipColor
                                    key={color}
                                    color={color}
                                    onClick={() => setCurrentColor(color)}
                                    checked={currentColor === color}
                                />
                            ))}
                            <label
                                htmlFor="ColorPicker"
                                className="w-6 h-6 flex-none rounded outline-none cursor-pointer relative overflow-hidden"
                                style={{ background: currentColor }}
                            >
                                <input
                                    type="color"
                                    id="ColorPicker"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    value={currentColor}
                                    onChange={(e) => setCurrentColor(e.target.value)}
                                />
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-sm font-medium">Text Style</span>
                        <div className="flex flex-wrap gap-2">
                            <Dropdown
                                placement="bottom"
                                dropdown={({ onClose }) => (
                                    <div className="flex flex-col min-w-[200px] bg-white rounded shadow-custom-11 py-1.5">
                                        {FONT_FAMILY_DEFAULT.map((font) => (
                                            <span
                                                onClick={() => {
                                                    onClose();
                                                    setTextStyle({ ...textStyle, fontFamily: font })
                                                }}
                                                className="hover:bg-gray-100 h-9 flex-none px-3 flex items-center cursor-pointer" key={font}>{font}</span>
                                        ))}
                                    </div>
                                )}
                            >
                                {({ isOpen }) => (
                                    <div className={`h-10 min-w-[150px] flex-none flex items-center px-2 hover:bg-gray-100 bg-gray-50 rounded-sm cursor-pointer ${isOpen ? '!bg-gray-100' : ''}`}>
                                        {textStyle.fontFamily}
                                    </div>
                                )}
                            </Dropdown>
                            <Dropdown
                                placement="bottom"
                                dropdown={({ onClose }) => (
                                    <div className="flex flex-col flex-none max-h-[200px] bg-white rounded shadow-custom-11 py-1.5">
                                        <div className="w-full h-full flex flex-col overflow-y-auto">
                                            {FONT_SIZE_DEFAULT.map((font) => (
                                                <span
                                                    onClick={() => {
                                                        onClose();
                                                        setTextStyle({ ...textStyle, fontSize: font })
                                                    }}
                                                    className="hover:bg-gray-100 h-9 flex-none px-3 flex items-center cursor-pointer" key={font}>{font}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                classNames="!min-w-[50px]"
                            >
                                {({ isOpen }) => (
                                    <div className={`h-10 w-[50px] flex-none flex items-center px-2 hover:bg-gray-100 bg-gray-50 rounded-sm cursor-pointer ${isOpen ? '!bg-gray-100' : ''}`}>
                                        {textStyle.fontSize}px
                                    </div>
                                )}
                            </Dropdown>
                        </div>
                        <div className="flex gap-2">
                            <ButtonIcon
                                Icon={iconSet.FontBoldIcon}
                                className="border border-gray-200"
                                onClick={() => setTextStyle({ ...textStyle, bold: !textStyle.bold })}
                                isActive={textStyle.bold}
                            />
                            <ButtonIcon
                                Icon={iconSet.FontItalicIcon}
                                className="border border-gray-200"
                                onClick={() => setTextStyle({ ...textStyle, italic: !textStyle.italic })}
                                isActive={textStyle.italic}
                            />
                            <ButtonIcon
                                Icon={iconSet.FontUnderlineIcon}
                                className="border border-gray-200"
                                onClick={() => setTextStyle({ ...textStyle, underline: !textStyle.underline })}
                                isActive={textStyle.underline}
                            />
                        </div>
                    </div>
                </div>
            }
        >
            {({ isOpen }) => (
                <ButtonIcon
                    onClick={onClick}
                    Icon={iconSet.FontsIcon}
                    isActive={isOpen || isActive}
                />
            )}
        </Dropdown>
    );
};

const ChipColor = ({ color, onClick, checked }: ChipColorProps) => {
    const { iconSet } = useTheme();
    return (
        <button
            className="w-6 h-6 flex-none rounded cursor-pointer hover:opacity-90 active:opacity-80 relative flex items-center justify-center text-white"
            style={{ backgroundColor: color }}
            onClick={onClick}
        >
            {checked && <iconSet.CheckIcon className="w-4 h-4" />}
        </button>
    );
};