import { useEffect, useState } from "react";

interface IProps {
    onChange: (value: number) => void;
    value?: number;
    maxValue?: number;
}

export const InputRange = ({ onChange, value: initialValue = 10, maxValue = 50 }: IProps) => {
    const [value, setValue] = useState(initialValue);

    // Keep local state synced with prop value
    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    const handleChange = (newValue: number) => {
        const clamped = Math.min(maxValue, Math.max(1, newValue));
        setValue(clamped);
        onChange(clamped);
    };

    return (
        <div className="flex items-center space-x-5">
            <div className="relative w-full flex items-center">
                <input
                    type="range"
                    min="1"
                    max={maxValue}
                    step="1"
                    value={value}
                    onChange={(e) => handleChange(Number(e.target.value))}
                    className="w-full h-6 appearance-none bg-transparent cursor-pointer select-none touch-none
                        /* Chrome & Safari */
                        [&::-webkit-slider-runnable-track]:h-2
                        [&::-webkit-slider-runnable-track]:bg-gray-200
                        [&::-webkit-slider-runnable-track]:rounded-full
                        [&::-webkit-slider-runnable-track]:border-0
                        [&::-webkit-slider-runnable-track]:shadow-inner
                        [&::-webkit-slider-thumb]:appearance-none
                        [&::-webkit-slider-thumb]:w-6
                        [&::-webkit-slider-thumb]:h-6
                        [&::-webkit-slider-thumb]:rounded-full
                        [&::-webkit-slider-thumb]:bg-blue-600
                        [&::-webkit-slider-thumb]:border-4
                        [&::-webkit-slider-thumb]:border-white
                        [&::-webkit-slider-thumb]:mt-[-8px]
                        [&::-webkit-slider-thumb]:shadow
                        [&::-webkit-slider-thumb]:cursor-grab
                        [&::-webkit-slider-thumb]:active:cursor-grabbing
                        [&::-webkit-slider-thumb]:transition-[background,border-color,box-shadow]
                        [&::-webkit-slider-thumb]:duration-150
                        [&::-webkit-slider-thumb]:ease-in-out
                        hover:[&::-webkit-slider-thumb]:bg-blue-700
                        hover:[&::-webkit-slider-thumb]:scale-110
                        active:[&::-webkit-slider-thumb]:scale-95

                        /* Firefox */
                        [&::-moz-range-track]:h-2
                        [&::-moz-range-track]:bg-gray-200
                        [&::-moz-range-track]:rounded-full
                        [&::-moz-range-thumb]:appearance-none
                        [&::-moz-range-thumb]:w-4
                        [&::-moz-range-thumb]:h-4
                        [&::-moz-range-thumb]:rounded-full
                        [&::-moz-range-thumb]:bg-blue-600
                        [&::-moz-range-thumb]:border-2
                        [&::-moz-range-thumb]:border-white
                        [&::-moz-range-thumb]:transition-all
                        [&::-moz-range-thumb]:shadow-md
                        hover:[&::-moz-range-thumb]:bg-blue-700
                        hover:[&::-moz-range-thumb]:scale-110
                        active:[&::-moz-range-thumb]:scale-95

                        /* IE */
                        [&::-ms-track]:h-2
                        [&::-ms-track]:bg-gray-200
                        [&::-ms-track]:rounded-full
                        [&::-ms-thumb]:appearance-none
                        [&::-ms-thumb]:w-4
                        [&::-ms-thumb]:h-4
                        [&::-ms-thumb]:rounded-full
                        [&::-ms-thumb]:bg-blue-600
                        [&::-ms-thumb]:border-2
                        [&::-ms-thumb]:border-white
                        [&::-ms-thumb]:mt-0
                        [&::-ms-thumb]:transition-all
                        [&::-ms-thumb]:shadow-md
                        hover:[&::-ms-thumb]:bg-blue-700
                        hover:[&::-ms-thumb]:scale-110
                        active:[&::-ms-thumb]:scale-95

                        focus:outline-none"
                />
            </div>
            <div className="flex items-center justify-center gap-2 px-2 py-1 bg-gray-100 rounded min-w-[40px]">
                <div className="text-sm text-center font-medium text-gray-700">{value}</div>
            </div>
        </div>
    );
}