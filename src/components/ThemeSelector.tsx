import { useTheme } from "../contexts/theme-context";
import Dropdown from "./Dropdown";

export const ThemeSelector = () => {
    const { theme, setTheme, config, iconSet } = useTheme();
    const { ArrowRightIcon } = iconSet
    const dataTheme = [
        {
            value: "default",
            label: "Default"
        },
        {
            value: "light",
            label: "Light"
        },
        {
            value: "dark",
            label: "Dark"
        },
        {
            value: "children",
            label: "Children"
        },
    ]
    return (
        <Dropdown
            dropdown={({ onClose: parentClose }) => (
                <div className="p-2 space-y-2">
                    {dataTheme.map((item) => (
                        <div
                            key={item.value}
                            onClick={() => {
                                setTheme(item.value as any);
                                parentClose();
                            }}
                            className={`w-full h-8 flex-none ${config?.components?.buttonIcon}  px-3 py-1 rounded cursor-pointer flex items-center justify-between gap-3`}>
                            <div className="flex items-center gap-3">
                                <span className="flex-none">{item.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            placement="bottom"
        >
            {({ isOpen }) => (
                <div className={`w-full h-8 flex-none ${config?.components?.buttonIcon} ${isOpen ? config?.components?.buttonSelected : ""} px-3 py-1 rounded cursor-pointer flex items-center justify-between gap-3`}>
                    <div className="flex items-center gap-3">
                        <span className="flex-none">{theme}</span>
                    </div>
                    <ArrowRightIcon className={`w-5 h-5 flex-none`} />
                </div>)}

        </Dropdown>
    );
};
