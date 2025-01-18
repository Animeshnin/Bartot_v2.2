import {MainPage} from "@/pages/MainPage";
import {AboutPage} from "@/pages/AboutPage";
import {NotFoundPage} from "@/pages/NotFoundPage";
import {ProfilePage} from "@/pages/ProfilePage";
import {RouteProps} from "react-router";
import {ArticlesPage} from "@/pages/ArticlesPage";
import {ArticleDetailsPage} from "@/pages/ArticleDetailsPage";




export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',

    NOTFOUNDPAGE = 'notFound',


}




export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}


export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
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
    [AppRoutes.ARTICLES] : {
        path: RouterPath.articles,
        element: <ArticlesPage/>,
        authOnly: true
    },
    [AppRoutes.ARTICLE_DETAILS] : {
        path: `${RouterPath.article_details}:id`,
        element: <ArticleDetailsPage/>,
        authOnly: true
    },
    [AppRoutes.PROFILE] : {
        path: RouterPath.profile,
        element: <ProfilePage/>,
        authOnly: true
    }
}