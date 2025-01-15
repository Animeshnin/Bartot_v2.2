import {Country} from "../../types/country";
import {useCallback} from "react";
import Select from "@/shared/ui/Select/Select.tsx";
import {classNames} from "@/shared/lib/classNames/classNames.ts";

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readOnly?: boolean;
}

export const CountrySelect = ({ className, value, onChange, readOnly} : CountrySelectProps) => {
    const optionsSelect = [
        {value: Country.RUSSIA, content: Country.RUSSIA},
        {value: Country.Armenia, content: Country.Armenia},
        {value: Country.Belarus, content: Country.Belarus},
        {value: Country.Kazakhstan, content: Country.Kazakhstan},
    ]

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])


    return (
        <Select className={classNames('', {}, [className])}
                label={'Укажите страну'}
                options={optionsSelect}
                value={value}
                onChange={onChangeHandler}
                readOnly={readOnly}
        />
    )
}