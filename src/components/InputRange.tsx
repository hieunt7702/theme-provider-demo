import { useEffect, useState } from "react";

interface IProps {
    onChange: (value: number) => void;
    value?: number;
}

export const InputRange = ({ onChange, value: initialValue = 10 }: IProps) => {
    const [value, setValue] = useState(initialValue);

    // Keep local state synced with prop value
    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    const handleChange = (newValue: number) => {
        const clamped = Math.min(50, Math.max(1, newValue));
        setValue(clamped);
        onChange(clamped);
    };

    return (
        <div className="flex items-center space-x-5">
            {/* Decrease Button */}
            {/* Range Input */}
            <div className="relative w-28">
                <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={value}
                    onChange={(e) => handleChange(Number(e.target.value))}
                    className="w-full h-4 appearance-none bg-transparent
            [&::-webkit-slider-runnable-track]:h-[2px]
            [&::-webkit-slider-runnable-track]:bg-gray-500
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-5
            [&::-webkit-slider-thumb]:h-5
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-blue-600
            [&::-webkit-slider-thumb]:border-2
            [&::-webkit-slider-thumb]:border-white
            [&::-webkit-slider-thumb]:mt-[-9px]
            focus:outline-none cursor-pointer"
                />
            </div>
            {/* Current Value */}
            <div className="flex items-center gap-2 px-1 py-0.5 bg-gray-200 rounded">
                <div className="w-6 text-center font-medium">{value}</div>

                <div className="flex flex-col">
                    <button
                        onClick={() => handleChange(value + 1)}
                        className="h-3 w-3 flex items-center justify-center flex-none"
                    >
                        +
                    </button>
                    <button
                        onClick={() => handleChange(value - 1)}
                        className="h-3 w-3 flex items-center justify-center flex-none"
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    );
}