import React from 'react'
import "./styles.scss"
import { Stack } from '@mui/material'
import { Controller } from 'react-hook-form'

type Props = {
    name: string
    control: any
    items: RadioItem[]
    spacing?: number
    label?: string
    disabled?: boolean
}

export type RadioItem = {
    label: string
    value: string
}

const RadioGroupCustom: React.FC<Props> = ({ name, label, control, items, spacing = 2, disabled = false }) => {
    return (
        <div className='radioGroup__wrapper'>
            {label && (
                <div
                    className={`label`}
                >
                    <label htmlFor={name}>
                        {label}
                    </label>
                </div>
            )}
            <Stack spacing={spacing}>
                {items.map((item, index) => (
                    <div className="control" key={index}>
                        <Controller
                            control={control}
                            name={name}
                            render={({
                                field: { onChange, onBlur, value, name, ref },
                            }) => (
                                <>
                                    <input
                                        defaultChecked={item.value === value}
                                        id={`${name}_${index}`}
                                        type="radio"
                                        name={name}
                                        value={item.value.toString()}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        ref={ref}
                                        disabled={disabled}
                                    />
                                    <label htmlFor={`${name}_${index}`}>
                                        {item.label}
                                    </label>
                                </>
                            )}
                        />
                    </div>
                ))}
            </Stack>
        </div>
    )
}

export default RadioGroupCustom