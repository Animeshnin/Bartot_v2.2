import cls from './ArticleDetailsPage.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {useParams} from "react-router";
import {ArticleDetails} from "@/entities/Article";
import {Text} from "@/shared/ui/Text/Text.tsx";
import {CommentList} from "@/entities/Comment";
import {useDispatch, useSelector} from "react-redux";
import {getArticleComments} from "@/pages/ArticleDetailsPage/model/slice/articleDetailsCommentSlice.ts";
import {getArticleDetailsCommentsIsLoading} from "../../model/selectors/comments";
import {useEffect} from "react";
import {fetchCommentsByArticleId} from "@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId.ts";

interface ArticleDetailsPageProps {
    className?: string;
}

export const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
    const {id} = useParams<{id: string}>()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading)
    const dispatch = useDispatch();
    
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dispatch(fetchCommentsByArticleId(id))
    }, []);
    
    if(!id){
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                Страница не найдена
            </div>
        );
    }
    return (
        <>
            <ArticleDetails id={id}/>
            <Text title={"Комментарий"}/>
            <CommentList isLoading={commentsIsLoading} comments={comments}/>
        </>


    );
}

export default ArticleDetailsPage;