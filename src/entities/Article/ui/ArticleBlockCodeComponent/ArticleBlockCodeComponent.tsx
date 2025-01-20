import cls from './ArticleBlockCodeComponent.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {memo} from "react";
import {ArticleBlockCode} from "@/entities/Article/model/type/type.ts";
import Code from "@/shared/ui/Code/Code.tsx";

interface ArticleBlockCodeComponentProps {
    className?: string;
    blockCode: ArticleBlockCode
}

export const ArticleBlockCodeComponent = memo(({className, blockCode}: ArticleBlockCodeComponentProps) => {
    return (
        <div className={classNames(cls.ArticleBlockCodeComponent, {}, [className])}>
            <Code text={blockCode.code} />

        </div>
    );
})

export default ArticleBlockCodeComponent;