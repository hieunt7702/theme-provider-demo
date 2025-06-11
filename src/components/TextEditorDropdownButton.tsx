import { BsCheck } from "react-icons/bs";
import { useTheme } from "../theme-context";
import { useDrawing } from "../contexts/DrawingContext";
import { ButtonIcon } from "./ButtonIcon"
import Dropdown from "./Dropdown"

interface TextEditorDropdownButtonProps {
    isActive?: boolean;
    onClick?: () => void;
}

interface ChipColorProps {
    color: string;
    onClick?: () => void;
    checked?: boolean;
}

const fontFamilies = ['Arial', 'Times New Roman', 'Courier New', 'Georgia', 'Verdana'];
const fontSizes = [8, 10, 12, 14, 16, 18, 20, 24, 28, 32, 36, 48, 72];
const dataColorsDefault = [
    "#000000", "#f0a3a3", "#f0c3a3", "#f0e3a3", "#a3f0a3", "#a3f0e3"
];
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
                            {dataColorsDefault.map((color) => (
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
                                        {fontFamilies.map((font) => (
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
                                            {fontSizes.map((font) => (
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
                        <div className="flex gap-1">
                            <button
                                className={`px-3 py-1 border rounded-sm hover:bg-gray-100 font-bold ${textStyle.bold ? 'bg-gray-200' : ''}`}
                                onClick={() => setTextStyle({ ...textStyle, bold: !textStyle.bold })}
                                title="Bold"
                            >
                                B
                            </button>
                            <button
                                className={`px-3 py-1 border rounded-sm hover:bg-gray-100 italic ${textStyle.italic ? 'bg-gray-200' : ''}`}
                                onClick={() => setTextStyle({ ...textStyle, italic: !textStyle.italic })}
                                title="Italic"
                            >
                                I
                            </button>
                            <button
                                className={`px-3 py-1 border rounded-sm hover:bg-gray-100 underline ${textStyle.underline ? 'bg-gray-200' : ''}`}
                                onClick={() => setTextStyle({ ...textStyle, underline: !textStyle.underline })}
                                title="Underline"
                            >
                                U
                            </button>
                        </div>
                    </div>
                </div>
            }
        >
            {({ isOpen }) => (
                <ButtonIcon
                    onClick={onClick}
                    Icon={iconSet.BsFonts}
                    isActive={isOpen || isActive}
                />
            )}
        </Dropdown>
    );
};

const ChipColor = ({ color, onClick, checked }: ChipColorProps) => {
    return (
        <button
            className="w-6 h-6 flex-none rounded cursor-pointer hover:opacity-90 active:opacity-80 relative flex items-center justify-center text-white"
            style={{ backgroundColor: color }}
            onClick={onClick}
        >
            {checked && <span>V</span>}
        </button>
    );
};