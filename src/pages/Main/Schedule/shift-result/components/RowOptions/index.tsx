import React from 'react'
import { Link } from 'react-router-dom';
import "./styles.scss"
import DeleteIcon from '@mui/icons-material/Delete';
import { FormAction } from 'forms/formAction';
import EditIcon from '@mui/icons-material/Edit';

export type Props = {
    id: string
    handleDelete: any
}

const RowOptions: React.FC<Props> = ({ id, handleDelete }) => {
    return (
        <>
            <div className="row-options__wrapper">
                <Link to={`../shift-assignments/${FormAction.UPDATE.toString()}/${id}`} className="row-options__item">
                    <span className="icon">
                        <EditIcon />
                    </span>
                    <p className="title">Chỉnh sửa phân ca</p>
                </Link>
                <div className="row-options__item" onClick={() => handleDelete(id)}>
                    <span className="icon">
                        <DeleteIcon />
                    </span>
                    <p className="title">Xóa phân ca</p>
                </div>
            </div>
        </>
    )
}

export default RowOptions;