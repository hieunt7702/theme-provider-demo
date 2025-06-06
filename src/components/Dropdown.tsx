import React, { useState, useRef, useEffect } from 'react';

interface DropdownProps {
    children: (props: { isOpen: boolean }) => React.ReactNode;
    dropdown: React.ReactNode; // dropdown content
    placement?: 'top' | 'bottom' | 'left' | 'right';
    isChild?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ children, dropdown, placement = 'bottom', isChild }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

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

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        if (open) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    return (<div className="w-full relative" ref={dropdownRef}>
        <div className='w-full' onClick={() => setOpen(!open)}>
            {children({ isOpen: open })}
        </div>
        <div className={`absolute z-50 rounded shadow-custom-11 bg-white shadow transition-all duration-200 ease-in-out transform
    ${open ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible pointer-events-none'}
    ${getPlacementClasses(placement)}`}
        >
            <div className="w-max min-w-[150px] max-w-[400px] h-full">
                {dropdown}
            </div>
        </div>
    </div>
    );
};

export default Dropdown;
