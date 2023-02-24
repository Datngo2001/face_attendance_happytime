import { TextField } from '@mui/material'
import { TimePicker } from 'antd'
import React from 'react'
import "./styles.scss"
import { Controller } from 'react-hook-form'
import dayjs from 'dayjs'
import { format } from './default'

export type Props = {
    id?: string,
    name: string,
    placeholder?: string,
    width?: string,
    height?: string,
    control: any,
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

const TimePickerCustom: React.FC<Props> = ({
    id,
    name,
    placeholder,
    width,
    height,
    control,
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
                className={`TimePickerCustom__wrapper ${className ? className : ""}`}
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
                <Controller
                    control={control}
                    name={name}
                    render={({
                        field: { onChange, onBlur, value, name },
                        fieldState: { error }
                    }) => (
                        <div className={`container ${error ? "error" : ""}`}>
                            <TimePicker
                                name={name}
                                value={dayjs(value, format)}
                                onChange={date => onChange(date.format(format))}
                                onBlur={onBlur}
                                disabled={disabled}
                                placeholder={placeholder}
                                format={format}
                            />
                            {error && <p className="error-message">{error.message}</p>}
                        </div>
                    )}
                />
            </div>
        </>
    )
}

export default TimePickerCustom