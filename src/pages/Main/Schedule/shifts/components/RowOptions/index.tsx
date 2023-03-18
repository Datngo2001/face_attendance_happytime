import React from 'react'
import { Link } from 'react-router-dom';
import "./styles.scss"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InfoIcon from '@mui/icons-material/Info';
import { FormAction } from 'forms/formAction';

export type Props = {
    id: string
    typeId: string
}

const RowOptions: React.FC<Props> = ({ id, typeId }) => {
    return (
        <>
            <div className="row-options__wrapper">
                <Link to={`../shifts/${FormAction.VIEW.toString()}/${typeId}/${id}`} className="row-options__item">
                    <span className="icon">
                        <InfoIcon />
                    </span>
                    <p className="title">Xem ca làm việc</p>
                </Link>
                <Link to={`../shifts/${FormAction.UPDATE.toString()}/${typeId}/${id}`} className="row-options__item">
                    <span className="icon">
                        <ContentCopyIcon />
                    </span>
                    <p className="title">Sửa ca làm việc</p>
                </Link>
            </div>
        </>
    )
}

export default RowOptions;