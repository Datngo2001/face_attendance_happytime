import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { FormAction } from 'forms/formAction';
import "./styles.scss";

const ShiftAssigment: React.FC = () => {
    const { action } = useParams();
    const title = action === FormAction.CREATE ? "THÊM MỚI PHÂN CA" : "CHỈNH SỬA PHÂN CA"
    return (
        <div className="shift-assignment__wrapper">
            <Link className="content-navigator" to="../shift-assignments">
                <ArrowBackRoundedIcon />
                Quay lại
            </Link>
            <div className="content-title">{title}</div>
            {/* {shiftType && <ShiftForm action={FormAction[action.toUpperCase()]} shiftType={shiftType} shift={shift} />} */}
        </div>
    )
}

export default ShiftAssigment