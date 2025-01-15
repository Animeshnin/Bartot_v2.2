
import Select from "@/shared/ui/Select/Select.tsx";
import {Currency} from "../../types/currency";
import {classNames} from "@/shared/lib/classNames/classNames.ts";
import {memo, useCallback} from "react";

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readOnly?: boolean;
}


export const CurrencySelect = memo(({className, value, onChange, readOnly}: CurrencySelectProps) => {
    const optionsSelect = [
        {value: Currency.RUB, content: Currency.RUB},
        {value: Currency.EUR, content: Currency.EUR},
        {value: Currency.USD, content: Currency.USD},
        {value: Currency.JPY, content: Currency.JPY}
    ]


    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])
    return (
        <Select className={classNames('', {}, [className])}
                label={'Укажите валюту'}
                options={optionsSelect}
                value={value}
                onChange={onChangeHandler}
                readOnly={readOnly}
        />
    );
})

