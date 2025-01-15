import React, {ReactNode, useEffect} from "react";
import cls from './Modal.module.scss'
import {useTheme} from "@/app/provider/ThemeProvider";
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {Portal} from "@/shared/ui/Portal/Portal.tsx";

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}

export const Modal = ({className, children, isOpen, onClose}: ModalProps) => {
    const {theme} = useTheme()

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: !isOpen,
    }

    const onContentClick = (e: React.MouseEvent) =>{
        e.stopPropagation()
    }

    const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose()
        }
    }

    useEffect(() => {
        if(isOpen){
            window.addEventListener('keydown', (e) => onKeyDown(e))
        }

        return () => {
            window.removeEventListener('keydown', (e) => onKeyDown(e))
        }
    }, [isOpen])

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className!, cls[theme]])}>
                <div onClick={onClose} className={cls.overlay}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    )


}