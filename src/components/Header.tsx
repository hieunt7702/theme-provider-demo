// src/components/Header.tsx
import React from "react";
import { useTheme } from "../theme-context";

const Header = () => {
    const { config } = useTheme();
    const { HomeIcon, SettingsIcon, UserIcon } = config.iconSet;

    return (
        <header className="flex items-center gap-4">
            <HomeIcon className="w-6 h-6" />
            <SettingsIcon className="w-6 h-6" />
            <UserIcon className="w-6 h-6" />
        </header>
    );
};

export default Header;
