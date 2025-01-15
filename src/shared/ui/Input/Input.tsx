import {classNames} from "@/shared/lib/classNames/classNames.ts";
import cls from './Input.module.scss'
import React, {InputHTMLAttributes, memo, useEffect, useRef, useState} from "react";

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;


interface InputProps extends HtmlInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string ) => void;
    autoFocus?: boolean;
    readonly?: boolean;
}

export const Input = memo(({className, value, onChange, type, placeholder, autoFocus, readonly,...otherProps}: InputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const ref = useRef<HTMLInputElement>(null);

    const onChangeHandler= (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
        setCaretPosition(e.currentTarget.value.length)
    }

    useEffect(() => {
        if(autoFocus){
            setIsFocused(true);
            ref.current?.focus()
        }
    }, [autoFocus]);

    const onBlur = () => {
        setIsFocused(false);
    }

    const onFocus = () => {
        setIsFocused(true);
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const onSelect = (e) => {
        setCaretPosition(e.currentTarget.value.length)
    }

    const isCaretVisible = isFocused && !readonly;



    return (
        <div className={classNames(cls.InputWrapper, {[cls.readonly]: readonly}, [className!])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                ref={ref}
                type={type}
                value={value}
                className={classNames(cls.input, {}, [className!])}
                onChange={onChangeHandler}
                onBlur={onBlur}
                onFocus={onFocus}
                onSelect={onSelect}
                readOnly={readonly}
                {...otherProps}
                />

                {isCaretVisible
                ? (
                    isFocused && (
                        <span style={{left: `${caretPosition * 7.4}px`}} className={cls.caret}></span>
                    )
                ) : null}

            </div>
        </div>
    );
})

export default Input;