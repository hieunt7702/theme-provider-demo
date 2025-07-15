import { BRUSH_TYPE } from '../contexts/DrawingContext';

export interface Point {
    x: number;
    y: number;
}
export interface DrawingCommand {
    type: ToolType;
    brushType?: BRUSH_TYPE;
    geometryType?: GEOMETRY_TYPE;
    points?: Point[];
    fromX?: number;
    fromY?: number;
    toX?: number;
    toY?: number;
    x?: number;
    y?: number;
    width?: number;
    height?: number;
    radius?: number;
    color: string;
    size: number;
    text?: string;
    textStyle?: {
        fontFamily: string;
        fontSize: number;
        bold: boolean;
        italic: boolean;
        underline: boolean;
    };
    image?: HTMLImageElement;
    isSelected?: boolean;
    selectionArea?: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    moveOffset?: {
        x: number;
        y: number;
    };
    zIndex?: number;
}
export declare enum ToolType {
    FREE_HAND = "freehand",
    PAN = "pan",
    SELECT = "select",
    PENCIL = "pencil",
    ERASER = "eraser",
    GEOMETRY = "geometry",
    TEXT = "text",
    IMAGE = "image"
}
export interface Page {
    id: number;
    name: string;
    commands: DrawingCommand[];
}
export declare enum GEOMETRY_TYPE {
    LINE = "line",
    SQUARE = "square",
    RECTANGLE = "rectangle",
    CIRCLE = "circle",
    HEART = "heart",
    TRINGTANGLE = "tringtangle"
}
export interface IconSet {
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
    LineIcon?: React.ComponentType<any>;
    RectangleIcon?: React.ComponentType<any>;
    CircleIcon?: React.ComponentType<any>;
    HeartIcon?: React.ComponentType<any>;
    TriangleIcon?: React.ComponentType<any>;
    SquareDashedIcon: React.ComponentType<any>;
    DeleteOutlineIcon: React.ComponentType<any>;
    ArrowDownIcon: React.ComponentType<any>;
    PenLineIcon: React.ComponentType<any>;
    ShredderIcon: React.ComponentType<any>;
    PartyPopperIcon: React.ComponentType<any>;
}
