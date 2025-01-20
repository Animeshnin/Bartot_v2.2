import cls from './ArticleBlockTextComponent.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {memo} from "react";
import {ArticleBlockText} from "@/entities/Article/model/type/type.ts";
import {Text} from "@/shared/ui/Text/Text.tsx";

interface ArticleBlockTextComponentProps {
    className?: string;
    blockText?: ArticleBlockText;
}

export const ArticleBlockTextComponent = memo(({className, blockText}: ArticleBlockTextComponentProps) => {
    return (
        <div className={classNames(cls.ArticleBlockTextComponent, {}, [className])}>
            {blockText?.title && (
                <Text title={blockText.title} className={cls.title}/>
            )}
            {blockText?.paragraphs && (
                blockText.paragraphs.map((paragraph) => (
                    <Text text={paragraph} key={paragraph}/>
                ))
            )}
        </div>
    );
})

export default ArticleBlockTextComponent;