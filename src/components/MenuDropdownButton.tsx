import { useDrawing } from "../contexts/DrawingContext";
import { useTheme } from "../contexts/theme-context";
import ButtonIcon from "./ButtonIcon";
import Dropdown from "./Dropdown"

export const MenuDropdownButton = () => {
    const { iconSet, config } = useTheme();
    const {
        MenuIcon,
        CopyImageIcon,
        SaveCloudIcon,
        ExportIcon,
        PDFIcon,
        ImageIcon,
        NextIcon,
    } = iconSet;
    const { copyAsImage, saveAsPDF, saveAsPNG } = useDrawing()

    const handleSavePDF = () => {
        saveAsPDF();
    }

    const handleSavePNG = () => {
        saveAsPNG();
    }

    return (
        <Dropdown
            placement="bottom"
            dropdown={({ onClose: parentClose }) => (
                <ul className="p-2 space-y-2">
                    <li
                        onClick={() => {
                            copyAsImage();
                            parentClose();
                        }}
                        className={`h-8 flex-none ${config?.components?.buttonIcon} px-3 py-1 rounded cursor-pointer flex items-center gap-3`}>
                        <CopyImageIcon className="w-5 h-5 flex-none" />
                        <span className="flex-none">Sao chép dưới dạng ảnh</span>
                    </li>
                    <li className={`h-8 flex-none ${config?.components?.buttonIcon} px-3 py-1 rounded cursor-pointer flex items-center gap-3`}>
                        <SaveCloudIcon className="w-5 h-5 flex-none" />
                        <span className="flex-none">Lưu về Cloud class</span>
                    </li>
                    <div className="w-full">
                        <Dropdown
                            placement="right"
                            isChild
                            dropdown={({ onClose: childClose }) => (
                                <div className="w-full flex flex-col gap-2 p-2">
                                    <div
                                        onClick={() => {
                                            handleSavePDF();
                                            childClose();
                                        }}
                                        className={`h-8 flex-none ${config?.components?.buttonIcon} px-2 py-1 rounded cursor-pointer flex items-center gap-3`}>
                                        <PDFIcon className="w-5 h-5 flex-none" />
                                        <span className="flex-none">PDF (.pdf)</span>
                                    </div>
                                    <div
                                        onClick={() => {
                                            handleSavePNG();
                                            childClose();
                                        }}
                                        className={`h-8 flex-none ${config?.components?.buttonIcon} px-2 py-1 rounded cursor-pointer flex items-center gap-3`}>
                                        <ImageIcon className="w-5 h-5 flex-none" />
                                        <span className="flex-none">Ảnh PNG (.png)</span>
                                    </div>
                                </div>
                            )}
                        >{({ isOpen }) => (
                            <li className={`w-full h-8 flex-none ${config?.components?.buttonIcon} ${isOpen ? "!bg-pink-200" : ""} px-3 py-1 rounded cursor-pointer flex items-center justify-between gap-3`}>
                                <div className="flex items-center gap-3">
                                    <ExportIcon className="w-5 h-5 flex-none" />
                                    <span className="flex-none">Xuất</span>
                                </div>
                                <NextIcon className={`w-5 h-5 flex-none`} />
                            </li>)}
                        </Dropdown>
                    </div>
                </ul>
            )}
        >
            {({ isOpen }) => (<ButtonIcon Icon={MenuIcon} isActive={isOpen} />)}
        </Dropdown>
    )
}