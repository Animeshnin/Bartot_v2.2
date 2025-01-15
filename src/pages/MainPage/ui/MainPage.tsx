import {useTranslation} from "react-i18next";

export function MainPage() {
    const {t} = useTranslation();
    return (
        <>
            {t('Основная страница')}
        </>
    )
}