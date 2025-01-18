import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {getArticleDetailsIsLoading} from "@/entities/Article/model/selectors/articleDetailsSelector.ts";

export function MainPage() {
    const {t} = useTranslation();
    const isLoading = useSelector(getArticleDetailsIsLoading)

    console.log(isLoading)
    return (
        <>
            {t('Основная страница')}
        </>
    )
}