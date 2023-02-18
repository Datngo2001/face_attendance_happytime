import React from 'react'
import "./styles.scss"
import { Stack } from '@mui/material'

export type Props = {
    id?: string
    name: string
    register: any
    items: RadioItem[]
    spacing?: number
}

export type RadioItem = {
    label: string
    value: string
}

const RadioGroupCustom: React.FC<Props> = ({ id, name, register, items, spacing = 2 }) => {
    return (
        <div className='radioGroup__wrapper'>
            <Stack spacing={spacing}>
                {items.map((item, index) => (
                    <div className="control">
                        <input
                            id={`${id ?? name}_${index}`}
                            {...register(name)}
                            type="radio"
                            value={item.value}
                        />
                        <label htmlFor={`${id ?? name}_${index}`}>
                            {item.label}
                        </label>
                    </div>
                ))}
            </Stack>
        </div>
    )
}

export default RadioGroupCustom