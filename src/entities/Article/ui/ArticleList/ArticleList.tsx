import cls from './ArticleList.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {memo} from 'react'
import {Article, ArticleView} from "../../model/type/type.ts";
import ArticleListItem from "../ArticleListItem/ArticleListItem.tsx";

interface ArticleListProps {
    article: Article[]
    className?: string;
    isLoading?: boolean;
    view?: ArticleView
}

export const ArticleList = memo(({className, article, view = ArticleView.SMALL, isLoading}: ArticleListProps) => {

    const renderArticle = (article: Article)  => {
        return <ArticleListItem view={view} article={article}/>
    }
    return (
        <div className={classNames(cls.ArticleList, {}, [className])}>
            {article.length > 0
            ? article.map((article) => (
                renderArticle(article)
                ))
            : null}
        </div>
    );
})

export default ArticleList;