// src/theme-context.tsx
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { defaultIcons } from "../icons/defaultIcons";
import { lightIcons } from "../icons/lightIcons";
import { darkIcons } from "../icons/darkIcons";
import { childrenIcons } from "../icons/childrenIcons";
import { IconSet } from "../components/types/drawing";

export type ThemeType = "default" | "dark" | "light" | "children";


interface ComponentTheme {
    bgColor: string;
    textColor: string;
    hoverColor?: string;
    activeColor?: string;
    borderColor?: string;
}

interface ThemeConfig {
    global: string;
    iconSet: IconSet;
    components: {
        navbar: string;
        button: string;
        buttonSelected: string;
        buttonBorder: string;
        buttonIcon?: string;
        // bạn có thể thêm component khác tại đây
    };
}


type ThemeMap = Record<ThemeType, ThemeConfig>;

const themes: ThemeMap = {
    default: {
        global: "bg-white text-gray-700 text-base !font-work-sans",
        iconSet: defaultIcons as IconSet,
        components: {
            navbar: "bg-white text-black hover:bg-gray-100",
            button: "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-200",
            buttonSelected: "!bg-blue-200 text-white !border-transparent",
            buttonBorder:
                "bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-100",
            buttonIcon:
                "bg-transparent !text-blue-500 hover:!bg-blue-100 active:!bg-blue-200",
        },

    },
    light: {
        global: "bg-gray-50 text-gray-900 text-base font-sans",
        iconSet: lightIcons as IconSet,
        components: {
            navbar: "bg-white text-gray-800 hover:bg-gray-200",
            button: "bg-green-500 text-white hover:bg-green-600 active:bg-green-200",
            buttonSelected: "bg-green-200 text-white",
            buttonBorder:
                "bg-transparent text-green-600 border border-green-600 hover:bg-green-100",
        },
    },
    dark: {
        global: "bg-gray-900 text-white text-base font-mono",
        iconSet: darkIcons as IconSet,
        components: {
            navbar: "bg-gray-800 text-white hover:bg-gray-200",
            button: "bg-indigo-600 text-white hover:bg-indigo-200 active:bg-indigo-800",
            buttonSelected: "bg-green-200 text-white",
            buttonBorder:
                "bg-transparent text-indigo-400 hover:bg-indigo-900",
        },
    },
    children: {
        global: "bg-yellow-100 text-yellow-900 text-lg font-vtv323",
        iconSet: childrenIcons as IconSet,
        components: {
            navbar: "bg-yellow-200 text-yellow-800 hover:bg-yellow-300",
            button: "bg-pink-400 text-white hover:bg-pink-500 active:bg-pink-600",
            buttonSelected: "bg-pink-200 text-white",
            buttonBorder:
                "bg-transparent text-pink-600 border border-pink-600 hover:bg-pink-100",
            buttonIcon:
                "bg-transparent !text-pink-500  hover:!bg-pink-100 active:!bg-pink-200",
        },
    },
};



interface ThemeContextType {
    theme: ThemeType;
    config: ThemeConfig;
    setTheme: (theme: ThemeType) => void;
    iconSet: IconSet;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setThemeState] = useState<ThemeType>("default");

    useEffect(() => {
        // ✅ Load từ localStorage (lúc app khởi chạy)
        const saved = localStorage.getItem("app_theme") as ThemeType;
        if (saved && themes[saved]) {
            setThemeState(saved);
        }
    }, []);

    const setTheme = (newTheme: ThemeType, persist = true) => {
        setThemeState(newTheme);
        if (persist) localStorage.setItem("app_theme", newTheme);
    };
    const value: ThemeContextType = {
        theme,
        config: themes[theme],
        setTheme,
        iconSet: themes[theme].iconSet,
    };

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useTheme must be used within ThemeProvider");
    return context;
};
