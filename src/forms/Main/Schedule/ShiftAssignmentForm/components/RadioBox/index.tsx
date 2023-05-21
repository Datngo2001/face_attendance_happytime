import React from 'react'
import "./styles.scss"
import { Controller } from 'react-hook-form'

export type Props = {
    value: string
    name: string
    control: any
    setValue: any
    title: string
    description: string
}

const RadioBox: React.FC<Props> = ({ name, value, control, setValue, title, description }) => {
    const handleClick = () => {
        setValue(name, value)
    }
    return (
        <div className='radio-box__wrapper' onClick={handleClick}>
            <Controller
                control={control}
                name={name}
                render={({
                    field: { onChange, onBlur, value: formValue },
                    fieldState: { error },
                }) => (
                    <input type="radio"
                        checked={value === formValue}
                        value={value}
                        onChange={onChange}
                    />
                )} />

            <div className='title'>{title}</div>
            <div className='description'>{description}</div>
        </div>
    )
}

export default RadioBox