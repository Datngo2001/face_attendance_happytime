import React from 'react'
import "./styles.scss"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export type Props = {
    id: string
    handleUpdateClick: Function
}

const RowOptions: React.FC<Props> = ({ id, handleUpdateClick }) => {

    return (
        <>
            <div className="row-options__wrapper">
                <div className="row-options__item" onClick={handleUpdateClick(id)} >
                    <span className="icon">
                        <EditIcon />
                    </span>
                    <p className="title">Chỉnh sửa BSSID</p>
                </div>
                <div className="row-options__item">
                    <span className="icon">
                        <DeleteIcon />
                    </span>
                    <p className="title">Xóa BSSID</p>
                </div>
            </div>
        </>
    )
}

export default RowOptions;