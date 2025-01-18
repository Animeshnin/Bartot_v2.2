import cls from './ArticleBlockCodeComponent.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";

interface ArticleBlockCodeComponentProps {
    className?: string;
}

export const ArticleBlockCodeComponent = ({className}: ArticleBlockCodeComponentProps) => {
    return (
        <div className={classNames(cls.ArticleBlockCodeComponent, {}, [className])}>
            ArticleBlockCodeComponent
        </div>
    );
}

export default ArticleBlockCodeComponent;