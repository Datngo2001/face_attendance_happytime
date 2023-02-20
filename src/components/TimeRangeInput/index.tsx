import { TextField } from '@mui/material'
import { TimePicker } from 'antd'
import React from 'react'
import "./styles.scss"

export type Props = {
    id?: string,
    from_name: string,
    to_name: string,
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

const TimeRangeInput: React.FC<Props> = ({
    id,
    from_name,
    to_name,
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
                className={`TimeRangeInput__wrapper ${className ? className : ""}`}
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
                        <TimePicker
                            {...register(from_name)}
                            views={['hours', 'minutes']}
                            inputFormat="HH:mm"
                            mask="__:__:00"
                            disabled={disabled}
                            placeholder={placeholder}
                            onClick={handleOnClick}
                            defaultValue={defaultValue}
                            renderInput={(params) => <TextField {...params} />}
                        />
                        <div className='toLabel'>Đến</div>
                        <TimePicker
                            {...register(to_name)}
                            openTo="hours"
                            views={['hours', 'minutes']}
                            inputFormat="HH:mm"
                            mask="__:__:00"
                            disabled={disabled}
                            placeholder={placeholder}
                            onClick={handleOnClick}
                            defaultValue={defaultValue}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </div>
                    {message && <p className="error-message">{message[from_name]?.message ?? message[to_name]?.message}</p>}
                </div>
            </div>
        </>
    )
}

export default TimeRangeInput