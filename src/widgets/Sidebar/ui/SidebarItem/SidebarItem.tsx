import {classNames} from "@/shared/lib/classNames/classNames.ts";
import AppLink, {AppLinkTheme} from "@/shared/ui/AppLink/AppLink.tsx";
import cls from "@/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss";
import {SidebarItemType} from "@/widgets/Sidebar/model/items.ts";
import {memo} from "react";
import {useSelector} from "react-redux";
import {getUserAuthData} from "@/entities/User/selectors/getUserAuthData/getUserAuthData.ts";
interface SidebarItemProps {
    item: SidebarItemType
}



export const SidebarItem = memo(({item}: SidebarItemProps) => {
    const isAuth = useSelector(getUserAuthData)

    if(item.authOnly && !isAuth){
        return null
    }
    return (
        <div className={classNames("", {}, [])}>
            <AppLink theme={AppLinkTheme.PRIMARY} to={item.path} className={cls.mainLink}>{item.text}</AppLink>
        </div>
    );
})

export default SidebarItem;