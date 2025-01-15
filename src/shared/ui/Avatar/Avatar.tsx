import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './Avatar.module.scss'
import {CSSProperties, useMemo} from "react";
interface AvatarProps {
    className?: string;
    src: string;
    size?: number;
    alt?: string;
}

export const Avatar =({className, src, size, alt}: AvatarProps) => {

    const style = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size])

    return (
        <img
            className={classNames(cls.Avatar, {}, [className!])} style={style} src={src} alt={alt}>

        </img>
    );
}

export default Avatar;