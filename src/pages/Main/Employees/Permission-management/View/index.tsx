import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import PermissionForm, { FormMethod } from 'forms/Main/PermissionSetting/PermissionForm';

const ViewPermission: React.FC = () => {
    return (
        <>
            <div className="view-permission__wrapper">
                <Link className="content-navigator" to="../permission-setting/list">
                    <ArrowBackRoundedIcon />
                    Quay lại
                </Link>
                <div className="content-title">CHI TIẾT QUYỀN TRUY CẬP</div>
                <PermissionForm method={FormMethod.VIEW} />
            </div>
        </>
    )
}

export default ViewPermission