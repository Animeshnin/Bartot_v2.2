import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './Select.module.scss'
import {ChangeEvent, memo, useMemo} from "react";

interface SelectOptions {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    readOnly?: boolean
    onChange?: (value: string) => void;
}

export const Select = memo(({className, label, options, value, onChange, readOnly}: SelectProps) => {

    const optionsList = useMemo(() => {
        return options?.map((opt) => (
            <option
                value={opt.value}
                className={cls.option}
                key={opt.value}
            >
                {opt.content}
            </option>
        ))
    }, [options])

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div className={classNames(cls.selectWrapper, {[cls.readonly]: readOnly}, [className])}>
            {label && (
                <span className={cls.label}>{label}</span>
            )}
            <select
                value={value}
                disabled={readOnly}
                onChange={onChangeHandler}
                className={cls.select}>
                {optionsList}
            </select>
        </div>
    );
})

export default Select;