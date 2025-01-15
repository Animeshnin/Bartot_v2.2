import {useTheme} from "@/app/provider/ThemeProvider";
import AppRouter from "@/app/provider/router";
import {Sidebar} from "@/widgets/Sidebar";
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {Suspense, useEffect} from "react";
import Navbar from "@/widgets/Navbar/ui/Navbar.tsx";
import {userActions} from "@/entities/User/model/slice/userSlice.ts";
import {useDispatch} from "react-redux";


function App(){
    const {theme} = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch]);
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={''}>
                <Navbar/>
                <div className={'content-path'}>
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </Suspense>
        </div>
    )

}

export default App
