import { default as React } from 'react';

interface DropdownProps {
    children: (props: {
        isOpen: boolean;
    }) => React.ReactNode;
    dropdown: ((props: {
        onClose: () => void;
    }) => React.ReactNode) | React.ReactNode;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    isChild?: boolean;
    classNames?: string;
}
declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
