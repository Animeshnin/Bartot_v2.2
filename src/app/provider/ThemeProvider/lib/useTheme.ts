import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext.ts";
import {useContext} from "react";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        if (setTheme){
            console.log(theme);
            let newTheme: Theme
            switch (theme) {
                case Theme.LIGHT:
                    newTheme = Theme.DARK;
                    break
                case Theme.DARK:
                    newTheme = Theme.GREEN;
                    break
                case Theme.GREEN:
                    newTheme = Theme.LIGHT;
                    break
                default: newTheme = Theme.DARK;

            }
            setTheme(newTheme);
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        }
    }

    return <UseThemeResult>{theme, toggleTheme}
}