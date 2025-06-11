import { useTheme } from "../theme-context";
import { useDrawing } from "../contexts/DrawingContext";
// import { BoardDropdownButton } from "./BoardDropdownButton";
import { ButtonIcon } from "./ButtonIcon"
import Dropdown from "./Dropdown";
import { MenuDropdownButton } from "./MenuDropdownButton";
import { PenDropdownButton } from "./PenDropdownButton";
import { TextEditorDropdownButton } from "./TextEditorDropdownButton";

export const Toolbar2 = () => {
    const {
        currentTool,
        setCurrentTool,
        currentColor,
        setCurrentColor,
        currentBrushSize,
        setCurrentBrushSize,
        textStyle,
        setTextStyle,
        zoomLevel,
        undo,
        redo,
        resetZoom,
        zoomOut,
        zoomIn,
        mousePosition
    } = useDrawing();

    const { config, iconSet } = useTheme();

    const {
        HandleIcon,
        PencelOutline,
        BsFonts,
        FiMinus,
        GrHomeOption,
        GrUndo,
        GrRedo,
        RxDividerHorizontal,
        FiPlus,
        RiCheckboxMultipleBlankLine,
        IoMenu
    } = iconSet;

    return (
        <div className="absolute top-[200px] left-0 z-10 ml-2 flex flex-col gap-8" style={{ pointerEvents: 'none' }}>
            <div className="h-10 flex-none flex items-center gap-3 shadow-custom-11 bg-white px-1 rounded" style={{ pointerEvents: 'auto' }}>
                <MenuDropdownButton />
                {/* <BoardDropdownButton /> */}
                {mousePosition && (
                    <div className="text-xs text-gray-500 ml-2">
                        X: {mousePosition.x}, Y: {mousePosition.y}
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <div className="w-10 flex-none flex flex-col items-center gap-2 bg-white rounded shadow-custom-11 py-2" style={{ pointerEvents: 'auto' }}>
                    <ButtonIcon
                        Icon={HandleIcon}
                        onClick={() => setCurrentTool('pan')}
                        isActive={currentTool === 'pan'}
                        title="Pan"
                    />
                    <PenDropdownButton
                        isActive={currentTool === 'pencil'}
                        onClick={() => setCurrentTool('pencil')}
                        onColorChange={setCurrentColor}
                        onBrushSizeChange={setCurrentBrushSize}
                        currentColor={currentColor}
                    />
                    <TextEditorDropdownButton
                        isActive={currentTool === 'text'}
                        onClick={() => setCurrentTool('text')}
                    />
                    <ButtonIcon
                        Icon={RxDividerHorizontal}
                        onClick={() => setCurrentTool('line')}
                        isActive={currentTool === 'line'}
                        title="Line"
                    />
                    <ButtonIcon Icon={GrHomeOption} onClick={resetZoom} title="Reset View" />
                </div>
                <div className="w-10 flex-none flex flex-col items-center gap-2 bg-white rounded shadow-custom-11 py-2" style={{ pointerEvents: 'auto' }}>
                    <ButtonIcon Icon={GrUndo} onClick={undo} title="Undo" />
                    <ButtonIcon Icon={GrRedo} onClick={redo} title="Redo" />
                    <div className="flex flex-col items-center">
                        <ButtonIcon Icon={FiMinus} onClick={zoomOut} title="Zoom Out" />
                        <span className={`text-xs ${config.components?.button}`}>{zoomLevel}%</span>
                        <ButtonIcon Icon={FiPlus} onClick={zoomIn} title="Zoom In" />
                    </div>
                </div>
            </div>
        </div>
    );
};