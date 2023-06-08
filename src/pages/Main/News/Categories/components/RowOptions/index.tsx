import React from 'react'
import "./styles.scss"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InfoIcon from '@mui/icons-material/Info';

type Props = {
    id: string
    handleUpdate: any,
    handleDelete: any
}

const RowOptions: React.FC<Props> = ({ id, handleUpdate, handleDelete }) => {
    return (
        <>
            <div className="row-options__wrapper">
                <div className="row-options__item" onClick={() => handleUpdate(id)}>
                    <span className="icon">
                        <InfoIcon />
                    </span>
                    <p className="title">Chỉnh sửa danh mục</p>
                </div>
                <div className="row-options__item" onClick={() => handleDelete(id)}>
                    <span className="icon">
                        <ContentCopyIcon />
                    </span>
                    <p className="title">Xóa danh mục</p>
                </div>
            </div>
        </>
    )
}

export default RowOptions;