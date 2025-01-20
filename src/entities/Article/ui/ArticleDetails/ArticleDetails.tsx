import cls from './ArticleDetails.module.scss'
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {fetchArticleById} from "@/entities/Article/model/services/fetchArticleById/fetchArticleById.ts";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetailsSelector.ts";
import EyeIcon from '@/shared/assets/icon/eye-20-20.svg'
import CalendarIcon from '@/shared/assets/icon/calendar-20-20.svg'

import {Text} from "@/shared/ui/Text/Text.tsx";
import Skeleton from "@/shared/ui/Skeleton/Skeleton.tsx";
import Avatar from "@/shared/ui/Avatar/Avatar.tsx";
import {TextAlign, TextSize, TextTheme} from "@/shared/ui/Text/TextTypes.ts";
import Icon from "@/shared/ui/Icon/Icon.tsx";
import {ArticleBlock, ArticleTypeBlock} from "@/entities/Article/model/type/type.ts";
import ArticleBlockCodeComponent from "@/entities/Article/ui/ArticleBlockCodeComponent/ArticleBlockCodeComponent.tsx";
import ArticleBlockTextComponent from "@/entities/Article/ui/ArticleBlockTextComponent/ArticleBlockTextComponent.tsx";
import ArticleBlockImageComponent
    from "@/entities/Article/ui/ArticleBlockImageComponent/ArticleBlockImageComponent.tsx";

interface ArticleDetailsProps {
    className?: string;
    id: string,
}

export const ArticleDetails = ({className, id}: ArticleDetailsProps) => {
    const dispatch = useDispatch<any>();
    const isLoading = useSelector(getArticleDetailsIsLoading)

    const data = useSelector(getArticleDetailsData)
    const error = useSelector(getArticleDetailsError)

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type){
            case ArticleTypeBlock.CODE:
                return <ArticleBlockCodeComponent key={block.id} blockCode={block} className={cls.block}/>
            case ArticleTypeBlock.TEXT:
                return <ArticleBlockTextComponent key={block.id} blockText={block} className={cls.block}/>
            case ArticleTypeBlock.IMG:
                return <ArticleBlockImageComponent key={block.id} blockImage={block} className={cls.block}/>
            default:
                return null
        }
    },[])


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
            <div className={cls.articleWrapper}>
                <Avatar src={data?.img} size={200} className={cls.avatar} alt={data?.img}/>
            </div>
            <Text size={TextSize.L} title={data?.title} theme={TextTheme.PRIMARY} text={data?.subtitle}/>
            <div className={cls.articleInfo}>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/*@ts-expect-error*/}
                <Icon Svg={EyeIcon} className={cls.icon}/>
                <Text text={String(data?.views)}/>
            </div>
            <div className={cls.articleInfo}>
                
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/*@ts-expect-error*/}
                <Icon Svg={CalendarIcon} className={cls.icon}/>
                <Text text={data?.createdAt}/>
            </div>
            {data?.blocks.map(renderBlock)}
        </div>
    );
}

export default ArticleDetails;