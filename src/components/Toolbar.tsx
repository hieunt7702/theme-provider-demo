import React from 'react';
import { BRUSH_TYPE, useDrawing } from '../contexts/DrawingContext';

const Toolbar = () => {
    const {
        setCurrentTool,
        setCurrentBrushType,
        setCurrentColor,
        setCurrentBrushSize,
        undo,
        redo,
        clear,
        saveAsPNG,
        saveAsPDF,
        importImage,
        pages,
        setPages,
        currentPageId,
        setCurrentPageId,
        zoomLevel,
        zoomIn,
        zoomOut,
        resetZoom,
        addPage
    } = useDrawing();


    return (
        <div className="flex flex-wrap gap-2 p-4 bg-gray-100">
            <select
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onChange={(e) => setCurrentBrushType(e.target.value as BRUSH_TYPE)}
            >
                <option value="pencil">Bút chì</option>
                <option value="pen">Bút mực</option>
                <option value="marker">Bút màu</option>
                <option value="paint">Sơn</option>
            </select>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setCurrentTool('select')}
            >
                Chọn
            </button>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setCurrentTool('pencil')}
            >
                Vẽ
            </button>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setCurrentTool('eraser')}
            >
                Tẩy
            </button>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setCurrentTool('line')}
            >
                Đường thẳng
            </button>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setCurrentTool('rectangle')}
            >
                Hình chữ nhật
            </button>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setCurrentTool('circle')}
            >
                Hình tròn
            </button>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setCurrentTool('text')}
            >
                Chữ
            </button>
            <input
                type="color"
                className="w-12 h-12"
                onChange={(e) => setCurrentColor(e.target.value)}
            />
            <input
                type="range"
                min="1"
                max="20"
                onChange={(e) => setCurrentBrushSize(parseInt(e.target.value))}
            />
            <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={undo}
            >
                Hoàn tác
            </button>
            <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={redo}
            >
                Làm lại
            </button>
            <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={clear}
            >
                Xóa bảng
            </button>
            <button
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                onClick={saveAsPNG}
            >
                Lưu PNG
            </button>
            <button
                className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                onClick={saveAsPDF}
            >
                Lưu PDF
            </button>
            <label className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 cursor-pointer">
                Import ảnh
                <input type="file" accept="image/*" onChange={importImage} className="hidden" />
            </label>
            <button
                className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                onClick={addPage}
            >
                Thêm trang
            </button>
            <select
                className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
                value={currentPageId}
                onChange={(e) => setCurrentPageId(Number(e.target.value))}
            >
                {pages.map((page) => (
                    <option key={page.id} value={page.id}>
                        {page.name}
                    </option>
                ))}
            </select>
            <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={zoomIn}
            >
                Zoom In
            </button>
            <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={zoomOut}
            >
                Zoom Out
            </button>
            <button
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                onClick={resetZoom}
            >
                Reset Zoom
            </button>
            <span className="px-4 py-2 bg-gray-200 rounded">{zoomLevel}%</span>
        </div>
    );
};

export default Toolbar;