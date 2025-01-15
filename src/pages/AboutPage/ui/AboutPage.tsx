import {useTranslation} from "react-i18next";

function AboutPage() {
    const {t} = useTranslation();

    return (
        <>{t('О сайте')}</>
    )
}

export default AboutPage;