import React from 'react';
import { useTheme } from '../theme-context';

interface Props {
    children: React.ReactNode;
}

const Button = ({ children }: Props) => {
    const { config } = useTheme();
    const buttonStyle = config.components.button;

    return (
        <button
            className={`${buttonStyle} px-4 py-2 rounded`}
        >
            {children}
        </button>
    );
};

export default Button;
