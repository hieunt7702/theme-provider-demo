import { useDrawing } from "../contexts/DrawingContext";
import { useTheme } from "../contexts/theme-context";
import ButtonIcon from "./ButtonIcon";
import Dropdown from "./Dropdown"

export const PageDropdownButton = () => {
    const { iconSet, config } = useTheme();
    const {
        ArrowRightIcon,
        MoreIcon,
        MultipleCardsIcon,
        AddBoardIcon,
    } = iconSet;
    const { pages, addPage, deletePage, currentPageId, setCurrentPageId } = useDrawing()


    return (
        <Dropdown
            placement="bottom" dropdown={({ onClose: parentClose }) => (
                <div className="p-2 space-y-2">
                    <div
                        onClick={addPage}
                        className={`w-full h-8 flex-none ${config?.components?.buttonIcon}  px-3 py-1 rounded cursor-pointer flex items-center justify-between gap-3`}>
                        <div className="flex items-center gap-3">
                            <AddBoardIcon className="w-5 h-5 flex-none" strokeWidth={1.6}/>
                            <span className="flex-none">Thêm bảng</span>
                        </div>
                        <ArrowRightIcon className={`w-5 h-5 flex-none`} strokeWidth={1.6}/>
                    </div>
                    {pages.map((page, index) => (
                        <div className="w-full">
                            <Dropdown
                                placement="right"
                                isChild
                                dropdown={({ onClose: childClose }) => (
                                    <div className="w-full flex flex-col gap-2 p-2">
                                        <div
                                            onClick={() => {
                                                childClose();
                                            }}
                                            className={`h-8 flex-none ${config?.components?.buttonIcon} px-2 py-1 rounded cursor-pointer flex items-center gap-3`}>
                                            <span className="flex-none">Đổi tên bảng</span>
                                        </div>
                                        <div
                                            onClick={() => {
                                                deletePage(page.id)
                                                childClose();
                                            }}
                                            className={`h-8 flex-none ${config?.components?.buttonIcon} px-2 py-1 rounded cursor-pointer flex items-center gap-3`}>
                                            <span className="flex-none">Xóa bảng</span>
                                        </div>
                                    </div>
                                )}
                            >{({ isOpen }) => (
                                <div
                                    className={`w-full h-8 flex-none ${config?.components?.buttonIcon} ${(isOpen || currentPageId === page.id) ? config?.components?.buttonSelected : ""} px-3 py-1 rounded cursor-pointer flex items-center justify-between gap-5`}>
                                    <span
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            e.preventDefault();
                                            setCurrentPageId(page.id)
                                        }}
                                        className="flex-none cursor-pointer">{page?.name}</span>
                                    <MoreIcon className={`w-5 h-5 flex-none`} strokeWidth={1.6}/>
                                </div>)}
                            </Dropdown>
                        </div>
                    ))}
                </div>
            )}
        >
            {({ isOpen }) => (<ButtonIcon Icon={MultipleCardsIcon} isActive={isOpen} />)}
        </Dropdown>
    )
}