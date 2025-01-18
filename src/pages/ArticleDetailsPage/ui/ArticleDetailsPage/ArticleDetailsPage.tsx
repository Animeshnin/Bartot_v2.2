import cls from './ArticleDetailsPage.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {useParams} from "react-router";
import {ArticleDetails} from "@/entities/Article";

interface ArticleDetailsPageProps {
    className?: string;
}

export const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
    const {id} = useParams<{id: string}>()


    if(!id){
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                Страница не найдена
            </div>
        );
    }
    return (
        <ArticleDetails id={id}/>
    );
}

export default ArticleDetailsPage;