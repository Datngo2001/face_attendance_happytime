import { Chip } from '@mui/material'
import React from 'react'
import "./styles.scss"

export type Props = {
    key?: any
    label?: string
    onDelete?: any
    disabled?: boolean
    className?: string
    deleteIcon?: any
    clickable?: boolean
}

const ChipCustom: React.FC<Props> = ({ key, label, onDelete = () => { }, disabled = false, className, deleteIcon, clickable = false }) => {
    return (
        <div className='ChipCustom__wrapper'>
            <Chip
                clickable={clickable}
                className={className}
                key={key}
                label={label}
                onDelete={onDelete}
                deleteIcon={deleteIcon}
                disabled={disabled} />
        </div>
    )
}

export default ChipCustom