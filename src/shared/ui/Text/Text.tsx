import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './Text.module.scss'
import {memo} from "react";
import {TextAlign, TextSize, TextTheme} from "./TextTypes.ts";

interface TextProps{
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo(({className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT, size = TextSize.M}: TextProps) => {
    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[size]])}>
            {title && (<h2 className={cls.title}>{title}</h2>)}
            {text && <p className={classNames(cls.text, {}, [cls[align]])}>{text}</p>}
        </div>
    )
})