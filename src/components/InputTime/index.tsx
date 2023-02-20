import { TextField } from '@mui/material'
import { TimePicker } from 'antd'
import React from 'react'
import "./styles.scss"

export type Props = {
    id?: string,
    name: string,
    placeholder?: string,
    width?: string,
    height?: string,
    register: Function,
    className?: string,
    type?: string,
    message?: string,
    label?: string,
    required?: boolean,
    labelWidth?: string,
    handleOnClick?: React.MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean,
    isTextArea?: boolean
    defaultValue?: string
}

const InputTime: React.FC<Props> = ({
    id,
    name,
    placeholder,
    width,
    height,
    register,
    className,
    type,
    message,
    label,
    required = false,
    labelWidth,
    handleOnClick,
    disabled = false,
    isTextArea = false,
    defaultValue = ""
}) => {
    return (
        <>
            <div
                className={`InputTime__wrapper ${className ? className : ""}`}
                style={{ width: width ? width : "", height: height ? height : "" }}
            >
                {label && (
                    <div
                        className={`label ${required && "required"}`}
                        style={{ width: labelWidth }}
                    >
                        <label htmlFor={id ?? name}>
                            {label}
                            <span> *</span>
                        </label>
                    </div>
                )}
                <div
                    className={`container ${message && message[id ?? name] ? "error" : ""}`}
                >
                    <TimePicker
                        size='small'
                        {...register(name)}
                        disabled={disabled}
                        id={id ?? name}
                        placeholder={placeholder}
                        onClick={handleOnClick}
                        defaultValue={defaultValue}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    {message && <p className="error-message">{message[id ?? name]?.message}</p>}
                </div>
            </div>
        </>
    )
}

export default InputTime