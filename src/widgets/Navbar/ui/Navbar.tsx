import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './Navbar.module.scss'
import Button, {ButtonTheme} from "@/shared/ui/Button/Button.tsx";
import { useCallback, useState} from "react";
import {LoginModal} from "@/features/AuthByUsername";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData} from "@/entities/User/selectors/getUserAuthData/getUserAuthData.ts";
import {userActions} from "@/entities/User/model/slice/userSlice.ts";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    const [openSignUpModal, setOpenSignUpModal] = useState(false);
    const authData = useSelector(getUserAuthData)
    const dispatch = useDispatch();


    const onCloseModal = useCallback(() => {
        setOpenSignUpModal(false);
    }, [])

    const onShowModal = useCallback(() => {
        setOpenSignUpModal(true);

    }, [])

    const onLogout = () => {
        setOpenSignUpModal(false );
        dispatch(userActions.logout())
    }

    if(authData) {
        return (
            <nav className={classNames(cls.Navbar, {}, [className!])}>
                <div className={cls.links}>
                    <Button theme={ButtonTheme.CLEAR} onClick={onLogout}>Выйти</Button>
                </div>
            </nav>
        )

    }
    return (
        <header className={classNames(cls.Navbar, {}, [className!])}>
            <div className={cls.links}>
                <Button theme={ButtonTheme.CLEAR} onClick={onShowModal}>Войти</Button>
                <LoginModal  isOpen={openSignUpModal} onClose={onCloseModal}/>


            </div>
        </header>
    );
}

export default Navbar;