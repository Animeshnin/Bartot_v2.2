import {MainPage} from "@/pages/MainPage";
import {AboutPage} from "@/pages/AboutPage";
import {NotFoundPage} from "@/pages/NotFoundPage";
import {ProfilePage} from "@/pages/ProfilePage";
import {RouteProps} from "react-router";




export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOTFOUNDPAGE = 'notFound',
    PROFILE = 'profile',

}




export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}


export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOTFOUNDPAGE]: '*',
    [AppRoutes.PROFILE]: '/profile',
}

export const routerConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage/>
    },
    [AppRoutes.NOTFOUNDPAGE] : {
        path: RouterPath.notFound,
        element: <NotFoundPage/>
    },
    [AppRoutes.PROFILE] : {
        path: RouterPath.profile,
        element: <ProfilePage/>,
        authOnly: true
    }
}