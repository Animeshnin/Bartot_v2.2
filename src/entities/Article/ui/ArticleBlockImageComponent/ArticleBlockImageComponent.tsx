import cls from './ArticleBlockImageComponent.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";

interface ArticleBlockImageComponentProps {
    className?: string;
}

export const ArticleBlockImageComponent = ({className}: ArticleBlockImageComponentProps) => {
    return (
            <div className={classNames(cls.ArticleBlockImageComponent, {}, [className])}>
                ArticleBlockImageComponent
            </div>
    );
}

export default ArticleBlockImageComponent;