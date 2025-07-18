import React, { useState } from 'react';
import { useDrawing } from "../contexts/DrawingContext";
import { useTheme } from "../contexts/theme-context";
import ButtonIcon from "./ButtonIcon";
import Dropdown from "./Dropdown";
import { InputRange } from "./InputRange";

interface MenuDropdownButtonProps {
    onSaveImage?: () => void;
    onSavePDF?: () => void;
    onSaveCloud?: () => void;
}

export const MenuDropdownButton = (props: MenuDropdownButtonProps) => {
    const { iconSet, config } = useTheme();
    const {
        MenuIcon,
        CopyImageIcon,
        SaveCloudIcon,
        ExportIcon,
        PDFIcon,
        ImageIcon,
        ArrowRightIcon,
    } = iconSet;
    const { copyAsImage, saveAsPDF, saveAsPNG } = useDrawing();
    const childMenuItemClass = `h-8 flex-none px-2 py-1 rounded cursor-pointer flex items-center gap-3 ${config?.components?.buttonIcon}`;
    const handleSavePDF = () => {
        saveAsPDF();
        if (props.onSavePDF) {
            props.onSavePDF();
        }
    }

    const handleSavePNG = () => {
        saveAsPNG();
        if (props.onSaveImage) {
            props.onSaveImage();
        }
    }

    const handleSaveCloud = () => {
        if (props.onSaveCloud) {
            props.onSaveCloud();
        }
    }

    const exportOptions = [
        { label: "PDF (.pdf)", icon: PDFIcon, action: handleSavePDF },
        { label: "Ảnh PNG (.png)", icon: ImageIcon, action: handleSavePNG },
    ];

    return (
        <Dropdown
            placement="bottom"
            dropdown={({ onClose: parentClose }) => (
                <ul className="p-2 space-y-2">
                    <li
                        onClick={() => {
                            copyAsImage();
                            parentClose();
                        }}
                        className={`h-8 flex-none ${config?.components?.buttonIcon} px-3 py-1 rounded cursor-pointer flex items-center gap-3`}>
                        <CopyImageIcon className="w-5 h-5 flex-none" strokeWidth={1.6}/>
                        <span className="flex-none">Sao chép dưới dạng ảnh</span>
                    </li>
                    <li 
                        onClick={handleSaveCloud}
                        className={`h-8 flex-none ${config?.components?.buttonIcon} px-3 py-1 rounded cursor-pointer flex items-center gap-3`}>
                        <SaveCloudIcon className="w-5 h-5 flex-none" strokeWidth={1.6}/>
                        <span className="flex-none">Lưu về Cloud class</span>
                    </li>
                    <div className="w-full">
                        <Dropdown
                            placement="right"
                            isChild
                            dropdown={({ onClose: childClose }) => (
                                <div className="w-full flex flex-col gap-2 p-2">
                                    {exportOptions.map(({ label, icon: Icon, action }) => (
                                        <div
                                            key={label}
                                            onClick={() => {
                                                action();
                                                childClose();
                                            }}
                                            className={childMenuItemClass}
                                        >
                                            <Icon className="w-5 h-5 flex-none" strokeWidth={1.6}/>
                                            <span className="flex-none">{label}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        >{({ isOpen }) => (
                            <li className={`w-full h-8 flex-none ${config?.components?.buttonIcon} ${isOpen ? config?.components?.buttonSelected : ""} px-3 py-1 rounded cursor-pointer flex items-center justify-between gap-3`}>
                                <div className="flex items-center gap-3">
                                    <ExportIcon className="w-5 h-5 flex-none" />
                                    <span className="flex-none">Xuất</span>
                                </div>
                                <ArrowRightIcon className={`w-5 h-5 flex-none`} />
                            </li>)}
                        </Dropdown>
                    </div>
                </ul>
            )}
        >
            {({ isOpen }) => (<ButtonIcon Icon={MenuIcon} isActive={isOpen} title='Menu'/>)}
        </Dropdown>
    )
}