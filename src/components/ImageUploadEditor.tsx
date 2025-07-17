import React, { useRef, useState, useEffect } from "react";
import { FileInputIcon, RotateCw, RotateCcw, CornerUpLeft, CornerUpRight, CornerDownLeft, CornerDownRight, RefreshCw, Rotate3d } from "lucide-react";
import { ToolType } from "../types/drawing";

import { DrawingCommand } from "../types/drawing";

interface ImageUploadEditorProps {
    onApply: (command: DrawingCommand) => void;
}

const HANDLE_SIZE = 12;
const ICON_SIZE = 20;

const ImageUploadEditor: React.FC<ImageUploadEditorProps> = ({ onApply }) => {
    const [previewImage, setPreviewImage] = useState<HTMLImageElement | null>(null);
    const [editWidth, setEditWidth] = useState<number>(0);
    const [editHeight, setEditHeight] = useState<number>(0);
    const [rotation, setRotation] = useState<number>(0);
    const [flipX, setFlipX] = useState<boolean>(false);
    const [flipY, setFlipY] = useState<boolean>(false);
    const [resizing, setResizing] = useState<string | null>(null);
    const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const openFileDialog = () => fileInputRef.current?.click();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const img = new Image();
        img.onload = () => {
            setPreviewImage(img);
            setEditWidth(img.width);
            setEditHeight(img.height);
        };
        img.src = URL.createObjectURL(file);
    };

    const drawPreviewImage = () => {
        if (!canvasRef.current || !previewImage) return;
        const ctx = canvasRef.current.getContext("2d");
        const w = editWidth;
        const h = editHeight;
        canvasRef.current.width = w;
        canvasRef.current.height = h;
        if (!ctx) return;
        ctx.clearRect(0, 0, w, h);
        ctx.save();
        ctx.translate(w / 2, h / 2);
        ctx.rotate((rotation * Math.PI) / 180);
        ctx.scale(flipX ? -1 : 1, flipY ? -1 : 1);
        ctx.drawImage(previewImage, -w / 2, -h / 2, w, h);
        ctx.restore();
    };

    useEffect(() => {
        drawPreviewImage();
    }, [previewImage, editWidth, editHeight, rotation, flipX, flipY]);

    const handleMouseDownHandle = (key: string) => (e: React.MouseEvent) => {
        e.stopPropagation();
        setResizing(key);
        setStartPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!resizing || !startPos) return;
        const dx = e.clientX - startPos.x;
        const dy = e.clientY - startPos.y;
        setStartPos({ x: e.clientX, y: e.clientY });
        switch (resizing) {
            case 'right': setEditWidth(w => Math.max(1, w + dx)); break;
            case 'left': setEditWidth(w => Math.max(1, w - dx)); break;
            case 'bottom': setEditHeight(h => Math.max(1, h + dy)); break;
            case 'top': setEditHeight(h => Math.max(1, h - dy)); break;
            case 'top-left': setEditWidth(w => Math.max(1, w - dx)); setEditHeight(h => Math.max(1, h - dy)); break;
            case 'top-right': setEditWidth(w => Math.max(1, w + dx)); setEditHeight(h => Math.max(1, h - dy)); break;
            case 'bottom-left': setEditWidth(w => Math.max(1, w - dx)); setEditHeight(h => Math.max(1, h + dy)); break;
            case 'bottom-right': setEditWidth(w => Math.max(1, w + dx)); setEditHeight(h => Math.max(1, h + dy)); break;
        }
    };

    const handleMouseUp = () => {
        setResizing(null);
        setStartPos(null);
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [resizing, startPos]);

    const handleApply = () => {
        if (!canvasRef.current) return;
        const dataUrl = canvasRef.current.toDataURL();
        const img = new Image();
        img.onload = () => {
            onApply({ type: ToolType.IMAGE, image: img, width: img.width, height: img.height, x: 0, y: 0, color: "#000", size: 1, opacity: 1, radius: 0, text: "" });
            setPreviewImage(null);
        };
        img.src = dataUrl;
    };

    return (
        <div className="space-y-4">
            {!previewImage ? (
                <button onClick={openFileDialog} className="flex items-center gap-2 px-3 py-2 bg-gray-200 rounded">
                    <FileInputIcon size={ICON_SIZE} />
                    Upload Image
                    <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                </button>
            ) : (
                <>
                    <div ref={containerRef} className="relative border" style={{ width: editWidth, height: editHeight }}>
                        <canvas ref={canvasRef} />
                        {['top-left', 'top-right', 'bottom-left', 'bottom-right', 'left', 'right', 'top', 'bottom'].map(key => {
                            const style: React.CSSProperties = { width: HANDLE_SIZE, height: HANDLE_SIZE, position: 'absolute', background: '#fff', border: '1px solid #333' };
                            if (key.includes('left')) style.left = 0;
                            if (key.includes('right')) style.right = 0;
                            if (key.includes('top')) style.top = 0;
                            if (key.includes('bottom')) style.bottom = 0;
                            if (key === 'left' || key === 'right') style.top = '50%', style.transform = 'translateY(-50%)';
                            if (key === 'top' || key === 'bottom') style.left = '50%', style.transform = 'translateX(-50%)';
                            style.cursor = key.includes('left') && key.includes('top') || key.includes('right') && key.includes('bottom') ? 'nwse-resize' :
                                key.includes('right') && key.includes('top') || key.includes('left') && key.includes('bottom') ? 'nesw-resize' :
                                    key.includes('left') || key.includes('right') ? 'ew-resize' : 'ns-resize';
                            return <div key={key} style={style} onMouseDown={handleMouseDownHandle(key)} />;
                        })}
                    </div>

                    {/* Toolbar */}
                    <div className="flex items-center gap-4">
                        <button onClick={() => setRotation(r => (r + 90) % 360)} title="Rotate CW">
                            <RotateCw size={ICON_SIZE} />
                        </button>
                        <button onClick={() => setRotation(r => (r - 90 + 360) % 360)} title="Rotate CCW">
                            <RotateCcw size={ICON_SIZE} />
                        </button>
                        <button onClick={() => setFlipX(f => !f)} title="Flip Horizontal">
                            <RefreshCw size={ICON_SIZE} style={{ transform: flipX ? 'scaleX(-1)' : undefined }} />
                        </button>
                        <button onClick={() => setFlipY(f => !f)} title="Flip Vertical">
                            <RefreshCw size={ICON_SIZE} style={{ transform: flipY ? 'scaleY(-1)' : 'rotate(90deg)' }} />
                        </button>
                        <button onClick={handleApply} className="ml-auto px-4 py-2 bg-blue-600 text-white rounded">
                            Apply
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ImageUploadEditor;
