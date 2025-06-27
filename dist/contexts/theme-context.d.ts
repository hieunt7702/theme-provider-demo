import { default as React, ReactNode } from 'react';

export type ThemeType = "default" | "dark" | "light" | "children";
interface IconSet {
    HomeIcon: React.ComponentType<any>;
    SettingsIcon: React.ComponentType<any>;
    UserIcon: React.ComponentType<any>;
    HandleIcon: React.ComponentType<any>;
    PencilOutlineIcon: React.ComponentType<any>;
    MemoryPenOutlineIcon: React.ComponentType<any>;
    ColorPenOutlineIcon: React.ComponentType<any>;
    PaintPenOutlineIcon: React.ComponentType<any>;
    PenOutlineIcon: React.ComponentType<any>;
    EraserIcon: React.ComponentType<any>;
    PlusIcon: React.ComponentType<any>;
    MinusIcon: React.ComponentType<any>;
    FontsIcon: React.ComponentType<any>;
    FontBoldIcon: React.ComponentType<any>;
    FontItalicIcon: React.ComponentType<any>;
    FontUnderlineIcon: React.ComponentType<any>;
    CircleOutlineIcon: React.ComponentType<any>;
    RectangleOutlineIcon: React.ComponentType<any>;
    SquareIcon: React.ComponentType<any>;
    UndoIcon: React.ComponentType<any>;
    RedoIcon: React.ComponentType<any>;
    MenuIcon: React.ComponentType<any>;
    CheckIcon: React.ComponentType<any>;
    CopyImageIcon: React.ComponentType<any>;
    SaveCloudIcon: React.ComponentType<any>;
    ExportIcon: React.ComponentType<any>;
    PDFIcon: React.ComponentType<any>;
    ImageIcon: React.ComponentType<any>;
    ArrowRightIcon: React.ComponentType<any>;
    MoreIcon: React.ComponentType<any>;
    MultipleCardsIcon: React.ComponentType<any>;
    AddBoardIcon: React.ComponentType<any>;
    SplineIcon: React.ComponentType<any>;
    CleanIcon: React.ComponentType<any>;
    ImageUpIcon: React.ComponentType<any>;
}
interface ThemeConfig {
    global: string;
    iconSet: IconSet;
    components: {
        navbar: string;
        button: string;
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
