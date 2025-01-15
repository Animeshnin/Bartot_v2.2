import Button, {ButtonTheme} from "@/shared/ui/Button/Button.tsx";
import ToggleThemePNG from '@/shared/assets/icon/toggleTheme.png'
import {useTheme} from "@/app/provider/ThemeProvider";
import {memo} from "react";


 const ToggleTheme = memo(() => {
    const {toggleTheme} = useTheme()
    return (
        <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
            <img src={ToggleThemePNG} alt={''}/>
        </Button>
    );
})

export default ToggleTheme;