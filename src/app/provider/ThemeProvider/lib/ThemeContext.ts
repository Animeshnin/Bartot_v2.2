import {createContext} from "react";

export const enum Theme{
    LIGHT = 'light',
    DARK = 'dark',
    GREEN = 'green',
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void;
}

export const LOCAL_STORAGE_THEME_KEY = 'theme'

export const ThemeContext = createContext<ThemeContextProps>({})
