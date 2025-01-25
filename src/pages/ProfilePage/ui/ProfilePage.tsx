import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard, ValidateProfileError
} from "@/entities/Profile";
import {ProfilePageHeader} from "./ProflePageHeader/ProfilePageHeader";
import {Currency} from "@/entities/Currency";

import {Country} from "@/entities/Country/types/country.ts";
import {Text} from "@/shared/ui/Text/Text.tsx";
import {TextTheme} from "@/shared/ui/Text/TextTypes.ts";
import {useParams} from "react-router";

interface ProfilePageProps {
    className?: string;
}

const  ProfilePage =({className}: ProfilePageProps) => {
    const dispatch = useDispatch();
    const formData = useSelector(getProfileForm)
    const isLoading = useSelector(getProfileIsLoading)
    const error = useSelector(getProfileError)
    const readonly = useSelector(getProfileReadonly)
    const {id} = useParams<{id: string}>()
    const validateErrors = useSelector(getProfileValidateErrors)




    const validateErrorTranslate = {
        [ValidateProfileError.SERVER_ERROR]: "Ошибка сервера",
        [ValidateProfileError.INCORRECT_COUNTY]: "Некорректная страна",
        [ValidateProfileError.NO_DATA]: "Ошибка сервера",
        [ValidateProfileError.INCORRECT_USER_DATA]: "Имя и фамилия обязательные",
        [ValidateProfileError.INCORRECT_AGE]: "Некорректный возраст",

    }

    useEffect(() => {
        

        if (id) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            dispatch(fetchProfileData(id))
        }
    }, [dispatch]);

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));

    }, [dispatch]);

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({lastname: value || ''}))
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({city: value || ''}))
    }, [dispatch]);

    const onChangeAge = useCallback((value?: number) => {
        dispatch(profileActions.updateProfile({age: Number(value || 0)}))
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({username: value || ''}))
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({avatar: value || ''}))
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({currency: currency}))
    }, [dispatch]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({country: country}))
    }, [dispatch]);

    return (
        <div className={classNames("", {}, [className!])}>
            <ProfilePageHeader/>
            {validateErrors?.length && validateErrors.map(err => (
                <Text text={validateErrorTranslate[err]} theme={TextTheme.ERROR} key={err}/>
            ))}
            <ProfileCard
                readonly={readonly}
                data={formData}
                isLoading={isLoading}
                error={error}
                onChangeFirstName={onChangeFirstName}
                onChangeLastName={onChangeLastName}
                onChangeCity={onChangeCity}
                onChangeAge={onChangeAge}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}

            />
        </div>
    );
}

export default ProfilePage;