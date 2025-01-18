import cls from './ArticleBlockTextComponent.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";

interface ArticleBlockTextComponentProps {
    className?: string;
}

export const ArticleBlockTextComponent = ({className}: ArticleBlockTextComponentProps) => {
    return (
        <div className={classNames(cls.ArticleBlockTextComponent, {}, [className])}>
        </div>
    );
}

export default ArticleBlockTextComponent;