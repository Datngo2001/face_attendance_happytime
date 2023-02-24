import { TextField } from '@mui/material'
import { TimePicker } from 'antd'
import React from 'react'
import "./styles.scss"
import { Controller } from 'react-hook-form'
import dayjs from 'dayjs'
import { format } from './default'

export type Props = {
    id?: string,
    from_name: string,
    to_name: string,
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
}

const TimeRangeCustom: React.FC<Props> = ({
    id,
    from_name,
    to_name,
    placeholder,
    width,
    height,
    control,
    className,
    message,
    label,
    required = false,
    labelWidth,
    disabled = false,
}) => {
    return (
        <>
            <div
                className={`TimeRangeCustom__wrapper ${className ? className : ""}`}
                style={{ width: width ? width : "", height: height ? height : "" }}
            >
                {label && (
                    <div
                        className={`label ${required && "required"}`}
                        style={{ width: labelWidth }}
                    >
                        <label>
                            {label}
                            <span> *</span>
                        </label>
                    </div>
                )}
                <div
                    className={`container ${message && (message[from_name] || message[to_name]) ? "error" : ""}`}
                >
                    <div className='inputGroup'>
                        <div className='fromLabel'>Từ</div>
                        <Controller
                            control={control}
                            name={from_name}
                            render={({
                                field: { onChange, onBlur, value, name },
                            }) => (
                                <TimePicker
                                    name={name}
                                    value={dayjs(value, format)}
                                    onChange={date => onChange(date.format(format))}
                                    onBlur={onBlur}
                                    disabled={disabled}
                                    placeholder={placeholder}
                                    format={format}
                                />
                            )}
                        />
                        <div className='toLabel'>Đến</div>
                        <Controller
                            control={control}
                            name={to_name}
                            render={({
                                field: { onChange, onBlur, value, name },
                            }) => (
                                <TimePicker
                                    name={name}
                                    value={dayjs(value, format)}
                                    onChange={date => onChange(date.format(format))}
                                    onBlur={onBlur}
                                    disabled={disabled}
                                    placeholder={placeholder}
                                    format={format}
                                />
                            )}
                        />
                    </div>
                    {message && <p className="error-message">{message[from_name]?.message ?? message[to_name]?.message}</p>}
                </div>
            </div>
        </>
    )
}

export default TimeRangeCustom