import { jsPDF } from 'jspdf';
import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction, useRef, useEffect } from 'react';
import { Page, DrawingCommand, Point } from '../components/types/drawing';

interface DrawingContextType {
    // Tool states
    currentTool: 'select' | 'pencil' | 'eraser' | 'line' | 'rectangle' | 'circle' | 'text' | 'pan';
    setCurrentTool: (tool: 'select' | 'pencil' | 'eraser' | 'line' | 'rectangle' | 'circle' | 'text' | 'pan') => void;
    currentBrushType: BRUSH_TYPE;
    setCurrentBrushType: (brushType: BRUSH_TYPE) => void;
    currentColor: string;
    setCurrentColor: (color: string) => void;
    currentBrushSize: number;
    setCurrentBrushSize: (size: number) => void;
    // Page states
    pages: Page[];
    setPages: Dispatch<SetStateAction<Page[]>>;
    addPage: () => void;
    deletePage: (id: number) => void;
    renamePage: (id: number, newName: string) => void;
    currentPageId: number;
    setCurrentPageId: (id: number) => void;
    currentPage: Page;
    setCurrentPage: Dispatch<SetStateAction<Page>>;
    // Drawing states
    isDrawing: boolean;
    setIsDrawing: Dispatch<SetStateAction<boolean>>;
    currentAction: DrawingCommand | null;
    setCurrentAction: Dispatch<SetStateAction<DrawingCommand | null>>;
    undoStack: DrawingCommand[];
    setUndoStack: Dispatch<SetStateAction<DrawingCommand[]>>;
    mousePosition: Point | null;
    setMousePosition: Dispatch<SetStateAction<Point | null>>;

    // Text states
    showTextInput: boolean;
    setShowTextInput: Dispatch<SetStateAction<boolean>>;
    textPosition: Point | null;
    setTextPosition: Dispatch<SetStateAction<Point | null>>;
    textValue: string;
    setTextValue: Dispatch<SetStateAction<string>>;
    textStyle: {
        fontFamily: string;
        fontSize: number;
        bold: boolean;
        italic: boolean;
        underline: boolean;
    };
    setTextStyle: Dispatch<SetStateAction<{
        fontFamily: string;
        fontSize: number;
        bold: boolean;
        italic: boolean;
        underline: boolean;
    }>>;

    // Zoom states
    zoomLevel: number;
    setZoomLevel: Dispatch<SetStateAction<number>>;

    // Selection states
    selectedElements: DrawingCommand[];
    setSelectedElements: Dispatch<SetStateAction<DrawingCommand[]>>;
    selectionArea: { x: number; y: number; width: number; height: number } | null;
    setSelectionArea: Dispatch<SetStateAction<{ x: number; y: number; width: number; height: number } | null>>;
    isDragging: boolean;
    setIsDragging: Dispatch<SetStateAction<boolean>>;
    dragStart: Point | null;
    setDragStart: Dispatch<SetStateAction<Point | null>>;

    // Canvas ref
    canvasRef: React.RefObject<HTMLCanvasElement | null>;

    // Actions
    undo: () => void;
    redo: () => void;
    clear: () => void;
    zoomIn: () => void;
    zoomOut: () => void;
    resetZoom: () => void;
    handleTextSubmit: () => void;
    saveAsPNG: () => void;
    saveAsPDF: () => void;
    importImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleStartSelect: (point: Point) => void;
    handleUpdateSelection: (point: Point) => void;
    handleFinishSelect: () => void;
    updateSelectedElements: (offsetX: number, offsetY: number) => void;
    copyAsImage: () => void;

    //
    isClicking: boolean;
    setClicking: Dispatch<SetStateAction<boolean>>;
}

export enum BRUSH_TYPE {
    PENCIL = 'pencil',
    MEMORY_PEN = 'memory_pen',
    COLOR_PEN = 'color_pen',
    PAINT_PEN = 'paint_pen',
    PEN = 'pen',
}

const DrawingContext = createContext<DrawingContextType | undefined>(undefined);

export const DrawingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Tool states
    const [currentTool, setCurrentTool] = useState<'select' | "pencil" | 'eraser' | 'line' | 'rectangle' | 'circle' | 'text' | 'pan'>('pan');
    const [currentBrushType, setCurrentBrushType] = useState<BRUSH_TYPE>(BRUSH_TYPE.PENCIL);
    const [currentColor, setCurrentColor] = useState('#000000');
    const [currentBrushSize, setCurrentBrushSize] = useState(5);

    // Page states
    const [pages, setPages] = useState<Page[]>([{ id: 1, name: 'Bảng trắng 1', commands: [] }]);
    const [currentPageId, setCurrentPageId] = useState(1);
    const currentPage = pages.find((page) => page.id === currentPageId)!;
    const [isClicking, setClicking] = useState(false);
    const setCurrentPage: Dispatch<SetStateAction<Page>> = (value) => {
        setPages((prevPages) => {
            const newPages = prevPages.map((page) =>
                page.id === currentPageId
                    ? typeof value === 'function'
                        ? value(page)
                        : value
                    : page
            );
            return newPages;
        });
    };

    // Drawing states
    const [isDrawing, setIsDrawing] = useState(false);
    const [currentAction, setCurrentAction] = useState<DrawingCommand | null>(null);
    const [undoStack, setUndoStack] = useState<DrawingCommand[]>([]);

    // Text states
    const [showTextInput, setShowTextInput] = useState(false);
    const [textPosition, setTextPosition] = useState<Point | null>(null);
    const [textValue, setTextValue] = useState('');
    const [textStyle, setTextStyle] = useState({
        fontFamily: 'Arial',
        fontSize: 16,
        bold: false,
        italic: false,
        underline: false,
    });

    // Zoom states
    const [zoomLevel, setZoomLevel] = useState(100);

    // Selection states
    const [selectedElements, setSelectedElements] = useState<DrawingCommand[]>([]);
    const [selectionArea, setSelectionArea] = useState<{ x: number; y: number; width: number; height: number } | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState<Point | null>(null);

    // Mouse position tracking
    const [mousePosition, setMousePosition] = useState<Point | null>(null);

    // Canvas ref
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Actions
    const undo = () => {
        if (currentPage.commands.length > 0) {
            const lastCommand = currentPage.commands[currentPage.commands.length - 1];
            setCurrentPage((prev) => ({
                ...prev,
                commands: prev.commands.slice(0, -1),
            }));
            setUndoStack((prev) => [...prev, lastCommand]);
        }
    };

    const redo = () => {
        if (undoStack.length > 0) {
            const command = undoStack[undoStack.length - 1];
            setUndoStack((prev) => prev.slice(0, -1));
            setCurrentPage((prev) => ({
                ...prev,
                commands: [...prev.commands, command],
            }));
        }
    };

    const clear = () => {
        setCurrentPage({ ...currentPage, commands: [] });
        setUndoStack([]);
        setCurrentAction(null);
        setIsDrawing(false);
        setSelectedElements([]);
        setSelectionArea(null);
        setIsDragging(false);
        setDragStart(null);
    };

    useEffect(() => {
        if (currentTool !== 'text') {
            setShowTextInput(false);
            setTextValue('');
            setTextPosition(null);
        }
    }, [currentTool])

    const zoomIn = () => {
        setZoomLevel((prev) => Math.min(prev + 10, 200));
    };

    const zoomOut = () => {
        setZoomLevel((prev) => Math.max(prev - 10, 50));
    };

    const resetZoom = () => {
        setZoomLevel(100);
    };
    const handleTextSubmit = () => {
        if (textValue && textPosition) {
            setCurrentPage((prev) => ({
                ...prev,
                commands: [
                    ...prev.commands,
                    {
                        type: 'text',
                        x: textPosition.x,
                        y: textPosition.y,
                        text: textValue,
                        color: currentColor,
                        size: currentBrushSize,
                        textStyle: textStyle,
                    },
                ],
            }));
            // Không cần set lại textPosition vì chúng ta muốn giữ nguyên vị trí
            setTextValue('');
            setShowTextInput(false);
        }
    };

    const saveAsPNG = () => {
        if (canvasRef.current) {
            const dataURL = canvasRef.current.toDataURL();
            const link = document.createElement('a');
            link.href = dataURL;
            link.download = `drawing-page-${currentPageId}.png`;
            link.click();
        }
    };
    const saveAsPDF = () => {
        if (canvasRef.current) {
            // Create new jsPDF instance in landscape orientation if canvas is wider than tall
            const orientation = canvasRef.current.width > canvasRef.current.height ? 'l' : 'p';
            const pdf = new jsPDF(orientation, 'mm', 'a4');

            // Get canvas data URL
            const imgData = canvasRef.current.toDataURL('image/png', 1.0);

            // Calculate PDF dimensions
            const pdfWidth = orientation === 'l' ? 297 : 210;  // A4 dimensions in mm
            const pdfHeight = orientation === 'l' ? 210 : 297;

            // Calculate scaling to fit image within PDF while maintaining aspect ratio
            const imgWidth = canvasRef.current.width;
            const imgHeight = canvasRef.current.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = (pdfHeight - imgHeight * ratio) / 2;

            // Add image to PDF
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);

            // Save the PDF
            pdf.save(`drawing-page-${currentPageId}.pdf`);
        }
    };

    const importImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const img = new Image();
            img.src = URL.createObjectURL(file);
            img.onload = () => {
                setCurrentPage((prev) => ({
                    ...prev,
                    commands: [
                        ...prev.commands,
                        { type: 'image', image: img, color: '#000000', size: 1 },
                    ],
                }));
            };
        }
    };

    const handleStartSelect = (point: Point) => {
        setSelectionArea({ x: point.x, y: point.y, width: 0, height: 0 });
        setSelectedElements([]);
    };

    const handleUpdateSelection = (point: Point) => {
        if (!selectionArea) return;

        setSelectionArea({
            x: Math.min(selectionArea.x, point.x),
            y: Math.min(selectionArea.y, point.y),
            width: Math.abs(point.x - selectionArea.x),
            height: Math.abs(point.y - selectionArea.y)
        });
    };

    const handleFinishSelect = () => {
        if (!selectionArea) return;

        const selected = currentPage.commands.filter(cmd => {
            if (cmd.type === 'freehand' || cmd.type === 'erase') {
                return cmd.points?.some(point =>
                    point.x >= selectionArea.x &&
                    point.x <= selectionArea.x + selectionArea.width &&
                    point.y >= selectionArea.y &&
                    point.y <= selectionArea.y + selectionArea.height
                );
            } else if (cmd.type === 'line') {
                return (cmd.fromX! >= selectionArea.x &&
                    cmd.fromX! <= selectionArea.x + selectionArea.width &&
                    cmd.fromY! >= selectionArea.y &&
                    cmd.fromY! <= selectionArea.y + selectionArea.height) ||
                    (cmd.toX! >= selectionArea.x &&
                        cmd.toX! <= selectionArea.x + selectionArea.width &&
                        cmd.toY! >= selectionArea.y &&
                        cmd.toY! <= selectionArea.y + selectionArea.height);
            } else if (cmd.type === 'rectangle' || cmd.type === 'text' || cmd.type === 'image') {
                return cmd.x! >= selectionArea.x &&
                    cmd.x! + (cmd.width || 0) <= selectionArea.x + selectionArea.width &&
                    cmd.y! >= selectionArea.y &&
                    cmd.y! + (cmd.height || 0) <= selectionArea.y + selectionArea.height;
            } else if (cmd.type === 'circle') {
                return cmd.x! >= selectionArea.x &&
                    cmd.x! <= selectionArea.x + selectionArea.width &&
                    cmd.y! >= selectionArea.y &&
                    cmd.y! <= selectionArea.y + selectionArea.height;
            }
            return false;
        });

        setSelectedElements(selected);
        setSelectionArea(null);
    };

    const updateSelectedElements = (offsetX: number, offsetY: number) => {
        setCurrentPage(prevPage => ({
            ...prevPage,
            commands: prevPage.commands.map(cmd => {
                if (!selectedElements.includes(cmd)) return cmd;

                if (cmd.type === 'freehand' || cmd.type === 'erase') {
                    return {
                        ...cmd,
                        points: cmd.points!.map(point => ({
                            x: point.x + offsetX,
                            y: point.y + offsetY
                        }))
                    };
                } else if (cmd.type === 'line') {
                    return {
                        ...cmd,
                        fromX: cmd.fromX! + offsetX,
                        fromY: cmd.fromY! + offsetY,
                        toX: cmd.toX! + offsetX,
                        toY: cmd.toY! + offsetY
                    };
                } else if (cmd.type === 'rectangle' || cmd.type === 'text' || cmd.type === 'circle' || cmd.type === 'image') {
                    return {
                        ...cmd,
                        x: cmd.x! + offsetX,
                        y: cmd.y! + offsetY
                    };
                }
                return cmd;
            })
        }));
    };

    const copyAsImage = async () => {
        if (!canvasRef.current) return;

        try {
            // Convert canvas to blob
            const blob = await new Promise<Blob>((resolve) =>
                canvasRef.current!.toBlob((blob) => resolve(blob!))
            );

            // Create ClipboardItem and copy to clipboard
            const item = new ClipboardItem({ 'image/png': blob });
            await navigator.clipboard.write([item]);
        } catch (err) {
            console.error('Failed to copy image:', err);
        }
    };

    const addPage = () => {
        const maxId = Math.max(...pages.map(page => page.id));
        setPages([...pages, { id: maxId + 1, name: `Bảng trắng ${maxId + 1}`, commands: [] }]);
        setCurrentPageId(maxId + 1);
    };

    const deletePage = (id: number) => {
        if (currentPageId === id) {
            const nextPage = pages.find(page => page.id !== id);
            if (nextPage) {
                setPages(pages.filter(page => page.id !== id));
                setCurrentPageId(nextPage.id);
                setCurrentPage(nextPage);
            } else {
                setPages([{ id: 1, name: 'Bảng trắng 1', commands: [] }]);
                setCurrentPage({ id: 1, name: 'Bảng trắng 1', commands: [] });
                setCurrentPageId(1);
            }
            return;
        }
        setPages(pages.filter(page => page.id !== id));

    }

    const renamePage = (id: number, newName: string) => {
        setPages(pages.map(page =>
            page.id === id ? { ...page, name: newName } : page
        ));
    }


    const value = {
        currentTool,
        setCurrentTool,
        currentBrushType,
        setCurrentBrushType,
        currentColor,
        setCurrentColor,
        currentBrushSize,
        setCurrentBrushSize,
        pages,
        setPages,
        addPage,
        deletePage,
        renamePage,
        currentPageId,
        setCurrentPageId,
        currentPage,
        setCurrentPage,
        isDrawing,
        setIsDrawing,
        currentAction,
        setCurrentAction,
        undoStack,
        setUndoStack,
        showTextInput,
        setShowTextInput,
        textPosition,
        setTextPosition,
        textValue,
        setTextValue,
        textStyle,
        setTextStyle,
        zoomLevel,
        setZoomLevel,
        selectedElements,
        setSelectedElements,
        selectionArea,
        setSelectionArea,
        isDragging,
        setIsDragging,
        dragStart,
        setDragStart,
        canvasRef,
        undo,
        redo,
        clear,
        zoomIn,
        zoomOut,
        resetZoom,
        handleTextSubmit,
        saveAsPNG,
        saveAsPDF,
        importImage,
        handleStartSelect,
        handleUpdateSelection,
        handleFinishSelect,
        updateSelectedElements,
        mousePosition,
        setMousePosition,
        isClicking,
        setClicking,
        copyAsImage,
    };

    return <DrawingContext.Provider value={value}>{children}</DrawingContext.Provider>;
};

export const useDrawing = () => {
    const context = useContext(DrawingContext);
    if (context === undefined) {
        throw new Error('useDrawing must be used within a DrawingProvider');
    }
    return context;
};
