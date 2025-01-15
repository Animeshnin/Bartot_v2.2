import React, {ButtonHTMLAttributes, FC} from "react";
import cls from './Button.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";


export enum ButtonTheme {
    CLEAR = 'clear',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = "backgroundInverted",
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed'
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    children?: React.ReactNode;
    theme?: ButtonTheme;
    square?: boolean;
    disabled?: boolean;
    size?: ButtonSize;
}

const Button: FC<ButtonProps> = ({className, children, disabled, theme = ButtonTheme.CLEAR, size = ButtonSize.M, square, ...otherProps}) => {
    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square || false,
        [cls[size]]: true,
        [cls.disabled]: disabled || false
    }
    return (
        <button className={classNames(cls.Button, mods, [className!])} {...otherProps} disabled={disabled} >
            {children}
        </button>
    )
}

export default Button