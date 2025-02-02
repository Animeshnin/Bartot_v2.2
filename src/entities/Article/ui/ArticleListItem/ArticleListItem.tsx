import cls from './ArticleListItem.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {memo} from 'react'
import {Article, ArticleView} from "../../model/type/type";
import {Text} from "@/shared/ui/Text/Text.tsx";
import Icon from "@/shared/ui/Icon/Icon.tsx";
import EyeIcon from "@/shared/assets/icon/eye-20-20.svg"

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view?: ArticleView
}

export const ArticleListItem = memo(({className, view = ArticleView.BIG, article}: ArticleListItemProps) => {

    if(view === ArticleView.BIG){
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                {article.title}
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <div className={cls.articleItem}>
                <div className={cls.articleItemPage}>
                    <img src={article.img} className={cls.img}/>
                    <Text text={article.createdAt} className={cls.articleItemDate}/>
                </div>
                <div className={cls.articleItemTypeViews}>
                    <Text text={article.type.join(", ")} className={cls.types}/>
                    <Text text={String(article.views)} className={cls.views}/>
                    <Icon Svg={EyeIcon}/>
                </div>
                <div className={cls.articleItemTitle}>
                    JavaScriptNews
                </div>
            </div>
        </div>
    );
})

export default ArticleListItem;