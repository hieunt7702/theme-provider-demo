import React, { memo, ReactNode } from "react";

interface TooltipProps {
    label?: string | ReactNode;
    children: ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    type?: "dark" | "light";
}

export const Tooltip: React.FC<TooltipProps> = memo(({
    label,
    children,
    position = "top",
    type = "dark",
}) => {
    const getPositionClass = () => {
        switch (position) {
            case "bottom":
                return "top-full mt-2 left-1/2 -translate-x-1/2";
            case "left":
                return "right-full mr-2 top-1/2 -translate-y-1/2";
            case "right":
                return "left-full ml-2 top-1/2 -translate-y-1/2";
            case "top":
            default:
                return "bottom-full mb-2 left-1/2 -translate-x-1/2";
        }
    };

    const typeStyles = {
        dark: {
            bg: "bg-gray-900",
            text: "text-white font-medium",
            arrow: "border-t-gray-900",
        },
        light: {
            bg: "bg-white",
            text: "text-gray-700 font-medium",
            arrow: "border-t-white",
        },
    };

    const getArrowPositionClass = () => {
        switch (position) {
            case "top":
                return `absolute left-1/2 -translate-x-1/2 w-0 h-0 border-4 border-transparent ${arrow} top-full`;
            case "bottom":
                return `absolute top-[-4px] left-1/2 -translate-x-1/2 border-b-${type === "dark" ? "gray-900" : "white"} right-full`;
            case "left":
                return `absolute right-[-4px] top-1/2 -translate-y-1/2 border-l-${type === "dark" ? "gray-900" : "white"}`;
            case "right":
                return `absolute left-[-4px] top-1/2 -translate-y-1/2 border-r-${type === "dark" ? "gray-900" : "white"}`;
            default:
                return `absolute left-1/2 -translate-x-1/2 w-0 h-0 border-4 border-transparent ${arrow} top-full`;
        }
    };

    const { bg, text, arrow } = typeStyles[type];

    return (
        <div className="relative group inline-block">
            {children}
            {label && <div
                style={{ zIndex: "1000 !important" }}
                className={`
          absolute rounded-sm px-3 py-1.5 text-xs shadow
          pointer-events-none scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100
          transition-all duration-300 ease-out whitespace-pre
          ${getPositionClass()} ${bg} ${text}
        `}
            >
                {label}
                {/* Arrow */}
                <div
                    className={`${getArrowPositionClass()}`}
                />
            </div>}
        </div >
    );
});
