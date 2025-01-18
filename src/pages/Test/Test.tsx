import cls from './Test.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";

interface TestProps {
    className?: string;
}

export const Test = ({className}: TestProps) => {
    return (
        <div className={classNames(cls.Test, {}, [className])}>
        </div>
    );
}

export default Test;