import cls from './ArticlesPage.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";

interface ArticlesPageProps {
    className?: string;
}

export const ArticlesPage = ({className}: ArticlesPageProps) => {
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            Articles Page
        </div>
    );
}

export default ArticlesPage;