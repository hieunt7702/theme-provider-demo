import React, { useEffect, useRef } from 'react';

interface LaserPointerProps {
    x: number;
    y: number;
    isClicking: boolean;
    isDrawing: boolean;
    tool: string;
    scale?: number;
}

export const LaserPointer: React.FC<LaserPointerProps> = ({ x, y, isClicking, isDrawing, tool, scale = 1 }) => {
    const rippleRef = useRef<HTMLDivElement>(null);

    const shouldShow = isDrawing || tool === 'pencil' || tool === 'eraser' || tool === 'line';

    useEffect(() => {
        if (rippleRef.current) {
            rippleRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
    }, [x, y]);

    return (
        <>
            {shouldShow && (
                <div                className="pointer-events-none absolute z-50 mix-blend-difference"
                    style={{
                        left: 0,
                        top: 0,
                        transform: `translate(${x}px, ${y}px)`,
                        transition: 'transform 0.1s ease-out',
                    }}
                >
                    <div
                        className={`
                            w-4 h-4 -ml-2 -mt-2 rounded-full
                            ${isClicking ? 'bg-red-500 scale-75' : 'bg-red-500 scale-50'}
                            transition-transform duration-150 ease-out shadow-[0_0_5px_2px_rgba(239,68,68,0.5)]
                        `}
                    />
                </div>
            )}

        </>
    );
};
