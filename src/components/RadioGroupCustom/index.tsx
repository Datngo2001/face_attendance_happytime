import React from 'react'
import "./styles.scss"
import { Stack } from '@mui/material'
import { Controller } from 'react-hook-form'

export type Props = {
    name: string
    control: any
    items: RadioItem[]
    spacing?: number
}

export type RadioItem = {
    label: string
    value: string
}

const RadioGroupCustom: React.FC<Props> = ({ name, control, items, spacing = 2 }) => {
    return (
        <div className='radioGroup__wrapper'>
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
                                        value={item.value}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        ref={ref}
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