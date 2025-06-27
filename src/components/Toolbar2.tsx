import { useTheme } from "../contexts/theme-context";
import { BRUSH_TYPE, useDrawing } from "../contexts/DrawingContext";
// import { BoardDropdownButton } from "./BoardDropdownButton";
import ButtonIcon from "./ButtonIcon";
import Dropdown from "./Dropdown";
import { MenuDropdownButton } from "./MenuDropdownButton";
import { PenDropdownButton } from "./PenDropdownButton";
import { TextEditorDropdownButton } from "./TextEditorDropdownButton";
import { PageDropdownButton } from "./PageDropdownButton";
import { ToolType } from "./types/drawing";
import { GeometryDropdownButton } from "./GeometryDropdownButton";

export const Toolbar2 = () => {
    const {
        currentTool,
        setCurrentTool,
        currentColor,
        setCurrentColor,
        setCurrentBrushSize,
        zoomLevel,
        undo,
        redo,
        resetZoom,
        zoomOut,
        zoomIn,
        mousePosition,
        clear,
        importImage
    } = useDrawing();

    const { config, iconSet } = useTheme();
    const style = config.components.buttonIcon;

    const {
        HandleIcon,
        EraserIcon,
        PlusIcon,
        MinusIcon,
        SquareDashedIcon,
        UndoIcon,
        RedoIcon,
        SplineIcon,
        CleanIcon,
        ImageUpIcon,
        PartyPopperIcon
    } = iconSet;

    return (
        <div className="absolute top-0 left-0 z-10 flex flex-col gap-8" style={{ pointerEvents: 'none' }}>
            <div className="h-10 flex-none flex items-center gap-3 shadow-custom-11 bg-white px-1 rounded" style={{ pointerEvents: 'auto' }}>
                <MenuDropdownButton />
                <PageDropdownButton />
                {mousePosition && (
                    <div className="text-xs text-gray-500 ml-2">
                        X: {mousePosition.x.toFixed(2)}, Y: {mousePosition.y.toFixed(2)}
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-2">
                <div className="w-10 flex-none flex flex-col items-center gap-2 bg-white rounded shadow-custom-11 py-2" style={{ pointerEvents: 'auto' }}>
                    <ButtonIcon
                        Icon={HandleIcon}
                        onClick={() => setCurrentTool(ToolType.PAN)}
                        isActive={currentTool === ToolType.PAN}
                        title="Pan"
                    />
                    <PenDropdownButton
                        isActive={currentTool === ToolType.PENCIL}
                        onClick={() => setCurrentTool(ToolType.PENCIL)}
                        onColorChange={setCurrentColor}
                        onBrushSizeChange={setCurrentBrushSize}
                        currentColor={currentColor}
                    />
                    <TextEditorDropdownButton
                        isActive={currentTool === ToolType.TEXT}
                        onClick={() => setCurrentTool(ToolType.TEXT)}
                    />
                    <GeometryDropdownButton
                        isActive={currentTool === ToolType.GEOMETRY}
                        onClick={() => setCurrentTool(ToolType.GEOMETRY)}
                        onColorChange={setCurrentColor}
                        onBrushSizeChange={setCurrentBrushSize}
                        currentColor={currentColor}
                    />
                    <ButtonIcon
                        Icon={SquareDashedIcon}
                        title="Chọn vùng"
                    />
                    <label className={`h-8 w-8 flex items-center justify-center flex-none rounded hover:bg-gray-100 active:bg-gray-300 cursor-pointer ${style}}`}>
                        <ImageUpIcon className="w-5 h-5" />
                        <input type="file" accept="image/*" onChange={importImage} className="hidden" />
                    </label>
                    <ButtonIcon
                        Icon={EraserIcon}
                        onClick={() => setCurrentTool(ToolType.ERASER)}
                        isActive={currentTool === 'eraser'}
                        title="Tẩy"
                    />
                    <ButtonIcon
                        Icon={CleanIcon}
                        onClick={clear}
                        title="Xóa bảng"
                    />
                    <ButtonIcon
                        Icon={PartyPopperIcon}
                        onClick={clear}
                        title="Xóa bảng"
                    />

                </div>
                <div className="w-10 flex-none flex flex-col items-center gap-2 bg-white rounded shadow-custom-11 py-2" style={{ pointerEvents: 'auto' }}>
                    <ButtonIcon Icon={UndoIcon} onClick={undo} title="Undo" />
                    <ButtonIcon Icon={RedoIcon} onClick={redo} title="Redo" />
                    <div className="flex flex-col items-center gap-1">
                        <ButtonIcon Icon={MinusIcon} onClick={zoomOut} title="Zoom Out" />
                        <span className={`text-xs`}>{zoomLevel}</span>
                        <ButtonIcon Icon={PlusIcon} onClick={zoomIn} title="Zoom In" />
                    </div>
                </div>
            </div>
        </div>
    );
};