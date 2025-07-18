import React, { useState, useRef, useEffect } from 'react';

interface DropdownProps {
    children: (props: { isOpen: boolean }) => React.ReactNode;
    dropdown: ((props: { onClose: () => void }) => React.ReactNode) | React.ReactNode; // dropdown content
    placement?: 'top' | 'bottom' | 'left' | 'right';
    isChild?: boolean;
    classNames?: string;
    handleOpenChange?: (isOpen: boolean) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ children, dropdown, placement = 'bottom', isChild, classNames, handleOpenChange }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Add effect to handle parent click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
                handleOpenChange && handleOpenChange(false);
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);

    const getPlacementClasses = (placement: string): string => {
        switch (placement) {
            case 'top':
                return `bottom-full left-0 ${isChild ? 'mb-4' : 'mb-2'}`;
            case 'bottom':
                return `top-full left-0 ${isChild ? 'mt-4' : 'mt-2'}`;
            case 'left':
                return `right-full top-0 ${isChild ? 'mr-4' : 'mr-2'}`;
            case 'right':
                return `left-full top-0 ${isChild ? 'ml-4' : 'ml-2'}`;
            default:
                return 'top-full left-0 mt-2';
        }
    };

    return (
        <>            {/* Only add overlay when it's not a child dropdown */}
            {!isChild && open && (
                <div
                    className="fixed inset-0 z-40 bg-transparent"
                    onClick={() => setOpen(false)}
                />
            )}
            <div className="relative" ref={dropdownRef}>
                {/* For child dropdowns, stop event propagation to prevent parent from closing */}
                <div onClick={(e) => {
                    if (isChild) {
                        e.stopPropagation();
                    }
                    setOpen(!open);
                }}>
                    {children({ isOpen: open })}
                </div>
                <div
                    className={`absolute z-50 rounded shadow-custom-11 bg-white transition-all duration-200 ease-in-out transform
                        ${open ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}
                        ${getPlacementClasses(placement)}`}
                >
                    <div className={`w-max min-w-[150px] h-full ${classNames}`}>
                        {typeof dropdown === 'function' ? dropdown({ onClose: () => setOpen(false) }) : dropdown}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dropdown;
