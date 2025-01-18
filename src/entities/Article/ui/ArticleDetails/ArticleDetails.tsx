import cls from './ArticleDetails.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchArticleById} from "@/entities/Article/model/services/fetchArticleById/fetchArticleById.ts";
import {
    getArticleDetailsData,
    getArticleDetailsError,
} from "@/entities/Article/model/selectors/articleDetailsSelector.ts";
import {Text, TextAlign, TextTheme} from "@/shared/ui/Text/Text.tsx";
import Skeleton from "@/shared/ui/Skeleton/Skeleton.tsx";

interface ArticleDetailsProps {
    className?: string;
    id: string,
}

export const ArticleDetails = ({className, id}: ArticleDetailsProps) => {
    const dispatch = useDispatch<any>();
    // const isLoading = useSelector(getArticleDetailsIsLoading)
    const isLoading = true

    const data = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleDetailsError)


    console.log(isLoading)




    useEffect(() => {
        dispatch(fetchArticleById(id))
    }, [dispatch, id]);

    if(isLoading){
        return (
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                <Skeleton className={cls.avatar} width={200} height={200} border={'50%'} />
                <Skeleton className={cls.title} width={300} height={32}  />
                <Skeleton className={cls.skeleton} width={600} height={24}  />
                <Skeleton className={cls.skeleton} width={"100%"} height={200}/>
            </div>
        )
    }

    if(error){
        return (
            <div className={classNames(cls.ArticleDetails, {}, [className])}>
                <Text text={error} theme={TextTheme.ERROR} align={TextAlign.CENTER}/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
            {data?.title}
            a
        </div>
    );
}

export default ArticleDetails;