import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './Icon.module.scss'
import {FC, SVGProps, useContext} from "react";
import {ThemeContext} from "@/app/provider/ThemeProvider/lib/ThemeContext.ts";


interface IconProps {
    className?: string;
    Svg: FC<SVGProps<SVGProps<string>>>
}

export const Icon = ({className, Svg}: IconProps) => {
    const {theme} = useContext(ThemeContext);


    return (
        <Svg className={classNames(cls.Icon, {}, [className, cls[theme!]])}/>
    );
}

export default Icon;