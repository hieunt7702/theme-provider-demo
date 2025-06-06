import { useTheme } from "../theme-context";
import { ButtonIcon } from "./ButtonIcon"
import Dropdown from "./Dropdown";
import { MenuDropdownButton } from "./MenuDropdownButton";

export const Toolbar2 = () => {
    const { config, iconSet } = useTheme();

    const { HandleIcon,
        PencelOutline,
        BsFonts,
        FiMinus,
        GrHomeOption,
        GrUndo,
        GrRedo,
        RxDividerHorizontal,
        FiPlus, RiCheckboxMultipleBlankLine, IoMenu } = iconSet;
    return (
        <div className="absolute top-[200px] left-0 z-10 ml-2 flex flex-col gap-8">
            <div className="h-10 flex-none flex items-center gap-3 shadow-custom-11 bg-white px-1 rounded">
                <MenuDropdownButton />
                <ButtonIcon Icon={RiCheckboxMultipleBlankLine} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="w-10 flex-none flex flex-col items-center gap-2 bg-white rounded shadow-custom-11 py-2">
                    <ButtonIcon Icon={HandleIcon} />
                    <ButtonIcon Icon={PencelOutline} />
                    <ButtonIcon Icon={BsFonts} />
                    <ButtonIcon Icon={RxDividerHorizontal} />
                    <ButtonIcon Icon={GrHomeOption} />
                </div>
                <div className="w-10 flex-none flex flex-col items-center gap-2 bg-white rounded shadow-custom-11 py-2">
                    <ButtonIcon Icon={GrUndo} />
                    <ButtonIcon Icon={GrRedo} />
                    <ButtonIcon Icon={BsFonts} />
                    <ButtonIcon Icon={FiMinus} />
                    <ButtonIcon Icon={FiPlus} />
                </div>
            </div>
        </div>
    )
}