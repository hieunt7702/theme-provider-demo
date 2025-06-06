import { useTheme } from "../theme-context";
import { ButtonIcon } from "./ButtonIcon";

export const Navbar = () => {
    const { config, iconSet } = useTheme();
    const style = config.components.navbar;

    const { HomeIcon, SettingsIcon, UserIcon } = iconSet;

    return (
        <nav
            className={`flex items-center justify-between p-4 ${style}`}
        >
            <div className="flex items-center space-x-4">
                <ButtonIcon Icon={HomeIcon} />
                <ButtonIcon Icon={SettingsIcon} />
                <ButtonIcon Icon={UserIcon} />
            </div>
            <h1 className="text-xl font-bold">My Themed App 32</h1>
        </nav>
    );
};
