import React from 'react'
import { Link } from 'react-router-dom';
import "./styles.scss"
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import InfoIcon from '@mui/icons-material/Info';

const RowOptions: React.FC = () => {
    return (
        <>
            <div className="row-options__wrapper">
                <Link to="../list/view" className="row-options__item">
                    <span className="icon">
                        <InfoIcon />
                    </span>
                    <p className="title">Xem chi tiết</p>
                </Link>
                <Link to="../list/update" className="row-options__item">
                    <span className="icon">
                        <ContentCopyIcon />
                    </span>
                    <p className="title">Tạo bản sao</p>
                </Link>
            </div>
        </>
    )
}

export default RowOptions;