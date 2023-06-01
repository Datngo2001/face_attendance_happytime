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
    type?: 1 | 2 | 3
}

const ChipCustom: React.FC<Props> = ({ key, label, onDelete, disabled = false, className, deleteIcon, clickable = false, type = 1 }) => {
    return (
        <div className={`ChipCustom__wrapper ${className} type-${type}`}>
            <Chip
                clickable={clickable}
                key={key}
                label={label}
                onDelete={onDelete}
                deleteIcon={onDelete ? deleteIcon : null}
                disabled={disabled} />
        </div>
    )
}

export default ChipCustom