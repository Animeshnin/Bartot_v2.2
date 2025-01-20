import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './Code.module.scss'
import Button from "@/shared/ui/Button/Button.tsx";
import CopyIcon from '@/shared/assets/icon/copy-20-20.svg'
import {useCallback} from "react";


interface CodeProps {
    className?: string;
    text: string;
}

export const Code = ({className, text}: CodeProps) => {

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text])

    return (
        <pre  className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn}><CopyIcon/></Button>
            <code>
                {text}
            </code>
        </pre>

    );
}

export default Code;