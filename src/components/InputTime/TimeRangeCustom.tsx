import { TimePicker } from 'antd'
import React from 'react'
import "./styles.scss"
import { Controller } from 'react-hook-form'
import dayjs from 'dayjs'
import { dataFormat, viewFormat } from './default'

export type Props = {
    from_name: string,
    to_name: string,
    control: any,
    placeholder?: string,
    width?: string,
    height?: string,
    className?: string,
    type?: string,
    label?: string,
    required?: boolean,
    labelWidth?: string,
    disabled?: boolean,
}

const TimeRangeCustom: React.FC<Props> = ({
    from_name,
    to_name,
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
        <>
            <div
                className={`TimeRangeCustom__wrapper ${className}`}
                style={{ width: width, height: height }}
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
                    className={`container`}
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
                                    value={dayjs(value, viewFormat)}
                                    onChange={date => onChange(date.format(dataFormat))}
                                    onBlur={onBlur}
                                    disabled={disabled}
                                    placeholder={placeholder}
                                    format={viewFormat}
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
                                    value={dayjs(value, viewFormat)}
                                    onChange={date => onChange(date.format(dataFormat))}
                                    onBlur={onBlur}
                                    disabled={disabled}
                                    placeholder={placeholder}
                                    format={viewFormat}
                                />
                            )}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimeRangeCustom