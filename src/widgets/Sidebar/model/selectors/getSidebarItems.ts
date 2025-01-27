import {SidebarItemType} from "../types/sidebar.ts";
import {RouterPath} from "@/shared/config/routeConfig/routeConfig.tsx";
import {createSelector} from "@reduxjs/toolkit";
import {getUserAuthData} from "@/entities/User";

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList:SidebarItemType[] = [
            {
                path: RouterPath.main,
                text: "Главная",
            },
            {
                path: RouterPath.about,
                text: "О нас",
            }
            ]
            if (userData) {
                sidebarItemsList.push(
                    {
                        path: RouterPath.profile + userData.id ,
                        text: "Мой профиль",
                        authOnly: true,
                    },
                    {
                        path: RouterPath.articles,
                        text: "Статьи",
                        authOnly: true,
                    },
                )
            }
        return sidebarItemsList

    }
)

