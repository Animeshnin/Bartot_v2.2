import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './Text.module.scss'
import {memo} from "react";

export enum TextAlign{
    CENTER = 'align-center',
    LEFT = 'align-left',
    RIGHT = 'align-right',
}

export enum TextTheme{
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps{
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
}

export const Text = memo(({className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT}: TextProps) => {
    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
            {title && (<h2 className={cls.title}>{title}</h2>)}
            {text && <p className={classNames(cls.text, {}, [cls[align]])}>{text}</p>}
        </div>
    )
})