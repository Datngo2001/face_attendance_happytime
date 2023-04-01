import Switch, { SwitchProps } from '@mui/material/Switch'
import React from 'react'
import { Controller } from 'react-hook-form'

export type Props = {
    size: "small" | "medium"
    name: string
    label?: string
    labelWidth?: string
    control: any
    required?: boolean
}

const FormSwitchCustom: React.FC<Props> = ({ name, label, labelWidth, required = false, control, size }) => {

    return (
        <div className='button-switch-custom__wrapper'>
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
            <Controller
                control={control}
                name={name}
                render={({
                    field: { onChange, value, name },
                }) => (
                    <Switch
                        size={size}
                        checked={value ?? false}
                        onChange={onChange}
                        id={name}
                        className=""
                    />
                )}
            />
        </div>
    )
}

export default FormSwitchCustom