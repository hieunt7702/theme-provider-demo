import { useTheme } from "../theme-context";
import { ButtonIcon } from "./ButtonIcon"
import Dropdown from "./Dropdown"

export const MenuDropdownButton = () => {
    const { iconSet, config } = useTheme();
    return (
        <Dropdown
            placement="bottom"
            dropdown={
                <ul className="p-2 space-y-2">
                    <li className={`h-8 flex-none ${config?.components?.buttonIcon} px-3 py-1 rounded cursor-pointer flex items-center gap-3`}>
                        <iconSet.RiCheckboxMultipleBlankLine className="w-5 h-5 flex-none" />
                        <span className="flex-none">Sao chép dưới dạng ảnh</span>
                    </li>
                    <li className={`h-8 flex-none ${config?.components?.buttonIcon} px-3 py-1 rounded cursor-pointer flex items-center gap-3`}>
                        <iconSet.RiCheckboxMultipleBlankLine className="w-5 h-5 flex-none" />
                        <span className="flex-none">Lưu về Cloud class</span>
                    </li>
                    <div className="w-full">
                        <Dropdown
                            placement="right"
                            isChild
                            dropdown={
                                <div className="w-full flex flex-col gap-2 p-2">
                                    <div className={`h-8 flex-none ${config?.components?.buttonIcon} px-2 py-1 rounded cursor-pointer flex items-center gap-3`}>
                                        <iconSet.RiCheckboxMultipleBlankLine className="w-5 h-5 flex-none" />
                                        <span className="flex-none">PDF (.pdf)</span>
                                    </div>
                                    <div className={`h-8 flex-none ${config?.components?.buttonIcon} px-2 py-1 rounded cursor-pointer flex items-center gap-3`}>
                                        <iconSet.RiCheckboxMultipleBlankLine className="w-5 h-5 flex-none" />
                                        <span className="flex-none">Ảnh PNG (.png)</span>
                                    </div>
                                </div>
                            }
                        >{({ isOpen }) => (
                            <li className={`w-full h-8 flex-none ${config?.components?.buttonIcon} ${isOpen ? "!bg-pink-200" : ""} px-3 py-1 rounded cursor-pointer flex items-center justify-between gap-3`}>
                                <div className="flex items-center gap-3">
                                    <iconSet.RiCheckboxMultipleBlankLine className="w-5 h-5 flex-none" />
                                    <span className="flex-none">Xuất</span>
                                </div>
                                <iconSet.IoMenu className={`w-5 h-5 flex-none ${isOpen ? "rotate-180" : ""}`} />
                            </li>)}
                        </Dropdown>
                    </div>
                </ul>
            }
        >
            {({ isOpen }) => (<ButtonIcon Icon={iconSet.IoMenu} isActive={isOpen} />)}
        </Dropdown>
    )
}