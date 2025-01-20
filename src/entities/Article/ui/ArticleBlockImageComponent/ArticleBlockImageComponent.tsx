import cls from './ArticleBlockImageComponent.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {memo} from "react";
import {ArticleBlockImage} from "@/entities/Article/model/type/type.ts";
import {Text} from "@/shared/ui/Text/Text.tsx";
import {TextAlign} from "@/shared/ui/Text/TextTypes.ts";

interface ArticleBlockImageComponentProps {
    className?: string;
    blockImage: ArticleBlockImage;
}

export const ArticleBlockImageComponent = memo(({className, blockImage}: ArticleBlockImageComponentProps) => {
    return (
            <div className={classNames(cls.ArticleBlockImageComponent, {}, [className])}>
                <img src={blockImage.src} className={cls.blockImage} alt={''}/>
                {blockImage.title && (
                    <Text text={blockImage.title} align={TextAlign.CENTER} />
                )}
            </div>
    );
})

export default ArticleBlockImageComponent;