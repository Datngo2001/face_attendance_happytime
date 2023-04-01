import { TimePicker } from 'antd'
import React from 'react'
import "./styles.scss"
import { Controller } from 'react-hook-form'
import dayjs from 'dayjs'
import { DataFormat, ViewFormat } from './default'

export type Props = {
    name: string,
    placeholder?: string,
    width?: string,
    height?: string,
    control: any,
    className?: string,
    label?: string,
    required?: boolean,
    labelWidth?: string,
    disabled?: boolean,
}

const TimePickerCustom: React.FC<Props> = ({
    name,
    placeholder,
    width = "",
    height = "",
    control,
    className = "",
    label,
    required = false,
    labelWidth,
    disabled = false,
}) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { onChange, onBlur, value, name },
                fieldState: { error }
            }) => (
                <div
                    className={`TimePickerCustom__wrapper ${className}`}
                    style={{ width: width, height: height }}
                >
                    {label && (
                        <div
                            className={`label ${required && "required"}`}
                            style={{ width: labelWidth }}
                        >
                            <label htmlFor={name}>
                                {label}
                                <span> *</span>
                            </label>
                        </div>
                    )}
                    <div className={`container ${error ? "error" : ""}`}>
                        <TimePicker
                            id={name}
                            name={name}
                            value={value ? dayjs(value, ViewFormat) : null}
                            onChange={date => onChange(date.format(DataFormat))}
                            onBlur={onBlur}
                            disabled={disabled}
                            placeholder={placeholder}
                            format={ViewFormat}
                        />
                        {error && <p className="error-message">{error.message}</p>}
                    </div>
                </div>
            )}
        />
    )
}

export default TimePickerCustom