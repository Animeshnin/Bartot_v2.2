import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './Sidebar.module.scss'
import Button, {ButtonSize, ButtonTheme} from "@/shared/ui/Button/Button.tsx";
import {memo, useState} from "react";
import {LangSwitcher} from "@/widgets/LangSwitch";
import {ToggleTheme} from "@/widgets/ToggleTheme";
import {SidebarItemsList} from "../../model/items.ts";
import SidebarItem from "../../ui/SidebarItem/SidebarItem.tsx";


interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({className}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const handleToggleTheme = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <aside className={classNames(cls.Sidebar, {[cls.collapsed] : collapsed}, [className!])}>
            <Button
                className={cls.collapsBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
                onClick={handleToggleTheme}
            >
                {collapsed ? '>': '<'}
            </Button>
            <div className={cls.items}>
                {SidebarItemsList.map((item) => (
                    <SidebarItem item={item} key={item.path} />
                ))}
            </div>
            <div className={cls.switcher}>
                <ToggleTheme/>
                <LangSwitcher short={collapsed}/>
            </div>
        </aside>
    );
})

export default Sidebar;