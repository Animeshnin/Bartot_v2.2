import cls from './LoginForm.module.scss'
import {useTranslation} from "react-i18next";
import {Text} from "@/shared/ui/Text/Text.tsx";
import Input from "@/shared/ui/Input/Input.tsx";
import Button, {ButtonTheme} from "@/shared/ui/Button/Button.tsx";
import {useDispatch, useSelector} from "react-redux";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState.ts";
import {useCallback} from "react";
import {loginActions} from "../../model/slice/LoginSlice.ts";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername.ts";
import {TextTheme} from "@/shared/ui/Text/TextTypes.ts";


export const LoginForm = () => {
    const {t} = useTranslation()
    const dispatch = useDispatch();
    const {username, password, error} = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value))
    }, [dispatch])
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch])

    const onLoginClick = useCallback(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        dispatch(loginByUsername({username, password}))
    }, [dispatch, username, password])

    return (
        <div className={cls.LoginForm}>
            <Text title={"Форма авторизации"}/>
            {error && <Text text={error} theme={TextTheme.ERROR}/>}
            <Input autoFocus={true} type={'text'} className={cls.input} placeholder={'Введите username'} value={username} onChange={onChangeUsername} />
            <Input autoFocus={true} type={'password'} className={cls.input} placeholder={'Введите пароль'}  value={password} onChange={onChangePassword}/>
            <Button  theme={ButtonTheme.BACKGROUND_INVERTED} onClick={onLoginClick} className={cls.loginBtn} >{t('Войти')}</Button>
        </div>
    )
}