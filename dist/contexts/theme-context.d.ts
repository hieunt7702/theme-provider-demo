import { ReactNode } from 'react';
import { IconSet } from '../types/drawing';

export type ThemeType = "default" | "dark" | "light" | "children";
interface ThemeConfig {
    global: string;
    iconSet: IconSet;
    components: {
        navbar: string;
        button: string;
        buttonSelected: string;
        buttonBorder: string;
        buttonIcon?: string;
    };
}
interface ThemeContextType {
    theme: ThemeType;
    config: ThemeConfig;
    setTheme: (theme: ThemeType) => void;
    iconSet: IconSet;
}
export declare const ThemeProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => ThemeContextType;
export {};
