import { useTheme } from "../contexts/theme-context";
import { useDrawing } from "../contexts/DrawingContext";
// import { BoardDropdownButton } from "./BoardDropdownButton";
import ButtonIcon from "./ButtonIcon";
import { MenuDropdownButton } from "./MenuDropdownButton";
import { PenDropdownButton } from "./PenDropdownButton";
import { TextEditorDropdownButton } from "./TextEditorDropdownButton";
import { PageDropdownButton } from "./PageDropdownButton";
import { DrawingCommand, ToolType } from "../types/drawing";
import { GeometryDropdownButton } from "./GeometryDropdownButton";
import ImageUploadEditor from "./ImageUploadEditor";
import { useState } from "react";
import { ToolbarCallbacks } from "../types/toolbar-actions";
import { PaletteDropdownButton } from "./PaletteDropdownButton";
import { Tooltip } from "./Tooltip";

interface ToolbarProps extends ToolbarCallbacks { }

export const Toolbar = (props: ToolbarProps) => {
    const {
        currentTool,
        setCurrentTool,
        currentColor,
        setCurrentColor,
        setCurrentBrushSize,
        zoomLevel,
        undo,
        redo,
        zoomOut,
        zoomIn,
        mousePosition,
        clear,
        currentPage,
        setCurrentPage,
        dataCommands,
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
        CleanIcon,
        ImageUpIcon,
    } = iconSet;

    const [showImageEditor, setShowImageEditor] = useState(false);

    // Khi user đã chỉnh xong và nhấn "Áp dụng"
    const handleImageApply = async (command: DrawingCommand) => {
        // Only proceed if we have valid image data
        if (!command.image || command.type !== ToolType.IMAGE || !mousePosition) {
            console.warn('Invalid image command or missing mouse position');
            return;
        }

        try {
            // Create a temporary canvas for image processing
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // Ensure we have valid dimensions
            const width = command.width || command.image.width || 0;
            const height = command.height || command.image.height || 0;

            if (!ctx || width <= 0 || height <= 0) {
                throw new Error('Invalid canvas context or dimensions');
            }

            // Set canvas dimensions
            canvas.width = width;
            canvas.height = height;

            // Draw and process the image
            ctx.save();

            // Apply any transformations from the editor
            if (command.rotation) {
                ctx.translate(width / 2, height / 2);
                ctx.rotate((command.rotation * Math.PI) / 180);
                ctx.translate(-width / 2, -height / 2);
            }

            ctx.drawImage(command.image, 0, 0, width, height);
            ctx.restore();

            // Convert to blob and create file
            const blob = await new Promise<Blob | null>((resolve) => {
                canvas.toBlob((b) => resolve(b), 'image/png', 0.95);
            });

            if (!blob) {
                throw new Error('Failed to create image blob');
            }

            // Create file and update state
            const file = new File([blob], 'drawing-image.png', { type: 'image/png' });

            setCurrentPage((prev) => ({
                ...prev,
                commands: [...prev.commands, command],
            }));

            // Notify parent about the upload
            props.onImageUpload?.({
                file,
                position: mousePosition,
                dimensions: { width, height }
            });

            setShowImageEditor(false);

        } catch (error) {
            console.error('Error processing image:', error);
            // You might want to show an error message to the user here
        }
    };

    return (
        <>
            <div className="absolute top-0 left-0 z-10 flex flex-col gap-8" style={{ pointerEvents: 'none' }}>
                <div className="h-10 flex-none flex items-center gap-3 shadow-custom-11 bg-white px-1 rounded" style={{ pointerEvents: 'auto' }}>
                    <MenuDropdownButton
                        onSaveImage={() => {
                            const canvas = document.querySelector('canvas');
                            if (canvas instanceof HTMLCanvasElement) {
                                if (props.onSaveAsImage) {
                                    props.onSaveAsImage(canvas.toDataURL('image/png'));
                                }
                                if (props.onExportPNG) {
                                    props.onExportPNG(canvas.toDataURL('image/png'), {
                                        width: canvas.width,
                                        height: canvas.height
                                    });
                                }
                            }
                        }}
                        onSavePDF={() => {
                            const canvas = document.querySelector('canvas');
                            if (canvas instanceof HTMLCanvasElement && props.onSaveAsPDF) {
                                // Convert canvas to PDF using a library of your choice
                                canvas.toBlob((blob) => {
                                    if (blob && props.onSaveAsPDF) {
                                        props.onSaveAsPDF(blob);
                                    }
                                }, 'image/png');
                            }
                        }}
                        onSaveCloud={() => {
                            if (props.onSaveToCloud && currentPage) {
                                props.onSaveToCloud({
                                    commands: currentPage.commands,
                                    timestamp: Date.now()
                                });
                            }
                        }}
                    />
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
                            onClick={() => {
                                console.log('Switching to SELECT tool');
                                // setCurrentTool(ToolType.SELECT);
                            }}
                            isActive={currentTool === ToolType.SELECT}
                            title="Chọn vùng"
                        />
                        <Tooltip label="Tải ảnh lên" >
                            <label className={`h-8 w-8 flex items-center justify-center flex-none rounded hover:bg-gray-100 active:bg-gray-300 cursor-pointer ${style}}`}>
                                <ImageUpIcon className="w-5 h-5" />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (!file || !mousePosition) return;

                                        // Tạo command cho ảnh và thêm vào currentPage
                                        const img = new Image();
                                        img.onload = () => {
                                            // Thêm command vào currentPage
                                            setCurrentPage(prev => ({
                                                ...prev,
                                                commands: [...prev.commands, {
                                                    type: ToolType.IMAGE,
                                                    image: img,
                                                    x: mousePosition.x,
                                                    y: mousePosition.y,
                                                    width: img.width,
                                                    height: img.height,
                                                    color: currentColor,
                                                    size: 1 // size không ảnh hưởng với image
                                                }]
                                            }));

                                            // Sau khi thêm command xong mới gọi callback
                                            if (props.onImageUpload) {
                                                props.onImageUpload({
                                                    file,
                                                    position: mousePosition,
                                                    dimensions: {
                                                        width: img.width,
                                                        height: img.height
                                                    }
                                                });
                                            }
                                        };
                                        img.src = URL.createObjectURL(file);
                                    }}
                                    className="hidden"
                                />
                            </label>
                        </Tooltip>
                        {/* Nút upload/image sẽ toggle image editor */}
                        {/* <button
                            onClick={() => setShowImageEditor(true)}
                            className="h-8 w-8 flex items-center justify-center rounded hover:bg-gray-100 active:bg-gray-300"
                            title="Upload & Edit Image"
                        >
                            <ImageUpIcon className="w-5 h-5" />
                        </button> */}

                        <ButtonIcon
                            Icon={EraserIcon}
                            onClick={() => {
                                setCurrentTool(ToolType.ERASER);
                                // Only trigger erase on click if we're already in eraser mode
                                if (currentTool === ToolType.ERASER && mousePosition && props.onErase) {
                                    props.onErase({
                                        x: mousePosition.x - 20,
                                        y: mousePosition.y - 20,
                                        width: 40,
                                        height: 40
                                    });
                                }
                            }}
                            isActive={currentTool === ToolType.ERASER}
                            title="Tẩy"
                        />
                        <ButtonIcon
                            Icon={CleanIcon}
                            onClick={() => {
                                clear();
                                props.onClean && props.onClean(dataCommands);
                            }}
                            title="Xóa bảng"
                        />
                        <PaletteDropdownButton
                            isActive={currentTool === ToolType.PALETTE}
                            onClick={() => setCurrentTool(ToolType.PALETTE)}
                            onColorChange={setCurrentColor}
                            currentColor={currentColor}
                        />
                        {/* <ButtonIcon
                            Icon={PartyPopperIcon}
                            onClick={() => {
                                if (mousePosition && props.onAddTable) {
                                    props.onAddTable({
                                        rows: 3,
                                        columns: 4,
                                        position: mousePosition,
                                        cellWidth: 80,
                                        cellHeight: 40,
                                        style: {
                                            borderColor: currentColor,
                                            borderWidth: 1,
                                            backgroundColor: '#ffffff'
                                        }
                                    });
                                }
                            }}
                            title="Thêm bảng"
                        /> */}
                    </div>
                    <div className="w-10 flex-none flex flex-col items-center gap-2 bg-white rounded shadow-custom-11 py-2" style={{ pointerEvents: 'auto' }}>
                        <ButtonIcon Icon={UndoIcon}
                            onClick={() => {
                                const lastCommand = currentPage.commands[currentPage.commands.length - 1];
                                undo();
                                props.onUndo && props.onUndo(dataCommands);
                                // Notify parent about the last undone command
                                // if (props.onDrawingComplete && lastCommand && mousePosition) {
                                //     props.onDrawingComplete({
                                //         command: lastCommand,
                                //         position: mousePosition
                                //     });
                                // }
                            }}
                            title="Hoàn tác"
                        />
                        <ButtonIcon
                            Icon={RedoIcon}
                            onClick={() => {
                                redo();
                                props.onRedo && props.onRedo(dataCommands);
                                // Get the last command after redo
                                // const lastCommand = currentPage.commands[currentPage.commands.length - 1];
                                // if (props.onDrawingComplete && lastCommand && mousePosition) {
                                //     props.onDrawingComplete({
                                //         command: lastCommand,
                                //         position: mousePosition
                                //     });
                                // }
                            }}
                            title="Làm lại"
                        />
                        <div className="flex flex-col items-center gap-1">
                            <ButtonIcon
                                Icon={MinusIcon}
                                onClick={() => {
                                    zoomOut();
                                    props.onZoomOut?.();
                                }}
                                title="Thu nhỏ"
                            />
                            <span className={`text-xs`}>{Math.round(zoomLevel)}</span>
                            <ButtonIcon
                                Icon={PlusIcon}
                                onClick={() => {
                                    zoomIn();
                                    props.onZoomIn?.();
                                }}
                                title="Phóng to"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {showImageEditor && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                    onClick={() => setShowImageEditor(false)}
                >
                    <div
                        className="bg-white p-4 rounded shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <ImageUploadEditor onApply={handleImageApply} />
                        <button
                            className="mt-2 text-sm text-gray-600 hover:underline"
                            onClick={() => setShowImageEditor(false)}
                        >
                            Hủy bỏ
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};