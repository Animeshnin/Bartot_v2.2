import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './PageError.module.scss'
import Button from "@/shared/ui/Button/Button.tsx";
interface PageErrorProps {
    className?: string;
}

export const PageError =({className}: PageErrorProps) => {

    const restart = () => {
        location.reload();
    }
    return (
        <div className={classNames(cls.PageError, {}, [className!])}>
            <h1 className={classNames(cls.error, {})}>ОШИБКА ОШИБКА ОШИБКА</h1>
            <Button onClick={restart}>Перезагрузить</Button>
        </div>
    );
}

export default PageError;