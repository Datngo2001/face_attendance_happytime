import Switch, { SwitchProps } from '@mui/material/Switch'
import React from 'react'

export type Props = {
    label?: string
    labelWidth?: string
}

const FormSwitchCustom: React.FC<SwitchProps & Props> = (props) => {

    const { id, name, label, labelWidth, required } = props;

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
            <Switch
                id={id ?? name}
                className=""
                {...props}
            />
        </div>
    )
}

export default FormSwitchCustom