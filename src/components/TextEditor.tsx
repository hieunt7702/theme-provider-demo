import React, { useEffect, useRef } from 'react';
import { useDrawing } from '../contexts/DrawingContext';

interface TextEditorProps {
    position: { x: number; y: number };
}

export const TextEditor: React.FC<TextEditorProps> = ({
    position,
}) => {
    const {
        textValue,
        setTextValue,
        zoomLevel,
        textStyle,
        handleTextSubmit,
        showTextInput
    } = useDrawing();

    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    useEffect(() => {
        const focusTextarea = () => {
            if (textareaRef.current && showTextInput) {
                textareaRef.current.focus();
                adjustTextareaHeight();
            }
        };

        focusTextarea();
        const timeoutId = setTimeout(focusTextarea, 10);
        return () => clearTimeout(timeoutId);
    }, [showTextInput, position]);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            setTextValue(textValue + '\n');
            setTimeout(adjustTextareaHeight, 0);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextValue(e.target.value);
        adjustTextareaHeight();
    };

    return (
        <div className="absolute"
            style={{
                top: position.y  - 5,
                left: position.x ,
                transform: `scale(${zoomLevel / 100})`,
                transformOrigin: 'top left',
                pointerEvents: 'auto',
                width: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
            onMouseMove={(e) => e.stopPropagation()}
        >
            <textarea
                ref={textareaRef}
                value={textValue}
                onChange={handleChange}
                onBlur={handleTextSubmit}
                onKeyDown={handleKeyDown}
                className="w-auto outline-none border border-blue-200 overflow-hidden resize-none bg-transparent"
                style={{
                    fontFamily: textStyle.fontFamily,
                    fontSize: `${textStyle.fontSize}px`,
                    fontWeight: textStyle.bold ? 'bold' : 'normal',
                    fontStyle: textStyle.italic ? 'italic' : 'normal',
                    textDecoration: textStyle.underline ? 'underline' : 'none',
                    minHeight: '1em',
                }}
                // placeholder="Abc..."
                autoFocus
                onFocus={(e) => e.target.select()}
            />
        </div>
    );
};
