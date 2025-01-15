import {memo} from "react";
import cls from './LoginModal.module.scss'
import {Modal} from "@/shared/ui/Modal/Modal.tsx";
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {LoginForm} from "@/features/AuthByUsername";

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = memo(({className, isOpen, onClose}: LoginModalProps) => {
    return(
        <Modal isOpen={isOpen} onClose={onClose} className={(classNames(cls.LoginModal, {}, [className!]))}>
            <LoginForm/>
        </Modal>
    )
})