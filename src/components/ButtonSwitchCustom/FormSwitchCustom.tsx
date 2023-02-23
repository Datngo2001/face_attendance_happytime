import Switch, { SwitchProps } from '@mui/material/Switch'
import React from 'react'
import { Controller } from 'react-hook-form'

export type Props = {
    label?: string
    labelWidth?: string
    control: any
}

const FormSwitchCustom: React.FC<SwitchProps & Props> = (props) => {

    const { id, name, label, labelWidth, required, control } = props;

    return (
        <div className='button-switch-custom__wrapper'>
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
                    field: { onChange, onBlur, value, name, ref },
                }) => (
                    <Switch
                        checked={value}
                        onChange={onChange}
                        id={id ?? name}
                        className=""
                        {...props}
                    />
                )}
            />
        </div>
    )
}

export default FormSwitchCustom