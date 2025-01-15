import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './ProfilePageHeader.module.scss'
import {Text} from "@/shared/ui/Text/Text.tsx";
import Button, {ButtonTheme} from "@/shared/ui/Button/Button.tsx";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getProfileReadonly, profileActions, updateProfileData} from "@/entities/Profile";
import {useCallback} from "react";
interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader =({className}: ProfilePageHeaderProps) => {
    const {t} = useTranslation();
    const readonly = useSelector(getProfileReadonly)
    const dispatch = useDispatch();
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveEdit = useCallback(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <header className={classNames(cls.ProfilePageHeader, {}, [cls[className!]])}>
            <Text title={'Профиль пользователя'}/>
            {readonly
                ?(
                    <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onEdit}>
                        {t('Редактировать')}
                    </Button>)
                : (
                    <>
                        <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE_RED} onClick={onCancelEdit}>
                            {t('Отменить')}
                        </Button>
                        <Button className={cls.saveBtn} theme={ButtonTheme.OUTLINE} onClick={onSaveEdit}>
                            {t('Сохранить')}
                        </Button>
                    </>


                )
            }
        </header>
    );
}

export default ProfilePageHeader;