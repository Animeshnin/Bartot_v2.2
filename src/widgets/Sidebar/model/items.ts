import {RouterPath} from "@/shared/config/routeConfig/routeConfig.tsx";

export interface SidebarItemType {
    path: string;
    text: string;
    authOnly?: boolean;
}

export const SidebarItemsList:SidebarItemType[] = [
    {
        path: RouterPath.main,
        text: "Главная",
    },
    {
        path: RouterPath.about,
        text: "О нас",
    },
    {
        path: RouterPath.profile,
        text: "Мой профиль",
        authOnly: true,
    },
    {
        path: RouterPath.articles,
        text: "Статьи",
        authOnly: true,
    },

]