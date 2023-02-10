import React from 'react'
import { Link } from 'react-router-dom'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import PermissionForm, { FormMethod } from 'forms/Main/PermissionSetting/PermissionForm';
import "./styles.scss"

const CreatePermission: React.FC = () => {
    return (
        <>
            <div className="create-permission__wrapper">
                <Link className="content-navigator" to="../permission-setting/list">
                    <ArrowBackRoundedIcon />
                    Quay lại
                </Link>
                <div className="content-title">TẠO MỚI QUYỀN TRUY CẬP</div>
                <PermissionForm method={FormMethod.CREATE} />
            </div>
        </>
    )
}

export default CreatePermission