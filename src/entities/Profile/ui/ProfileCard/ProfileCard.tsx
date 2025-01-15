import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './ProfileCard.module.scss'
import {useTranslation} from "react-i18next";

import {Text, TextTheme} from "@/shared/ui/Text/Text.tsx";
import Input from "@/shared/ui/Input/Input.tsx";
import {Profile} from "../../model/types/profile";
import {PageLoader} from "@/widgets/PageLoader";
import {Currency, CurrencySelect} from "@/entities/Currency";
import {Country, CountrySelect} from "@/entities/Country";






interface ProfileCardProps {
    className?: string;
    data?: Profile,
    error?: string,
    isLoading?: boolean,
    readonly?: boolean;
    onChangeFirstName?: (value: string) => void;
    onChangeLastName?: (value: string) => void;
    onChangeCity: (value: string) => void;
    onChangeAge: (value: number) => void;
    onChangeUsername: (value: string) => void;
    onChangeAvatar: (value: string) => void;
    onChangeCountry: (country: Country) => void;
    onChangeCurrency: (currency: Currency) => void;
}

export const ProfileCard =({
                           className,
                           data,
                           isLoading,
                           error,
                           readonly,
                           onChangeLastName,
                           onChangeFirstName,
                           onChangeAge,
                           onChangeCity,
                           onChangeAvatar,
                           onChangeUsername,
                           onChangeCountry,
                           onChangeCurrency}: ProfileCardProps) => {
    const {t} = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
                <PageLoader/>
            </div>
        )
    }

    if(error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text theme={TextTheme.ERROR} title={t('Произошла ошибка при загрузке профиля')} text={'Попробуйте обновить страницу'}/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.ProfileCard, {}, [className])}>
            <div className={cls.data}>
                {data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <img src={data?.avatar} alt={'avatar'}/>
                    </div>) }
                <Input onChange={onChangeFirstName} value={data?.first} placeholder={'Ваше имя'} readonly={readonly}/>
                <Input onChange={onChangeLastName} value={data?.lastname} placeholder={'Ваша фамилия'} readonly={readonly}/>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/*// @ts-expect-error*/}
                <Input onChange={onChangeAge} value={data?.age} placeholder={'Ваш возраст'} readonly={readonly}/>
                <Input onChange={onChangeCity} value={data?.city} placeholder={'Ваш город'} readonly={readonly}/>
                <Input onChange={onChangeUsername} value={data?.username} placeholder={'Имя пользователя'} readonly={readonly}/>
                <Input onChange={onChangeAvatar} value={data?.avatar} placeholder={'Ссылка на аватарку'} readonly={readonly}/>
                <CurrencySelect value={data?.currency} onChange={onChangeCurrency} readOnly={readonly}/>
                <CountrySelect value={data?.country} onChange={onChangeCountry} readOnly={readonly}/>


            </div>

        </div>
    );
}

export default ProfileCard;