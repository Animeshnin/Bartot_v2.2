import cls from './Skeleton.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {CSSProperties, memo} from 'react'

interface SkeletonProps {
    className?: string;
    height?: string | number
    width?: string | number
    border?: string
}


export const Skeleton = memo(({className, height, width, border}: SkeletonProps) => {
    const styles:CSSProperties = {
        width,
        height,
        borderRadius: border
    }
    return (
        <div className={classNames(cls.Skeleton, {}, [className])} style={styles} >
        </div>
    );
})

export default Skeleton;