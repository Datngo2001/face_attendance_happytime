import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import CreateShiftForm from 'forms/Main/Schedule/CreateShiftForm';
import "../styles.scss"

const CreateShift: React.FC = () => {
    const { typeid } = useParams();

    return (
        <>
            <div className="createShift__wrapper">
                <Link className="content-navigator" to="../shifts">
                    <ArrowBackRoundedIcon />
                    Quay lại
                </Link>
                <div className="content-title">THÊM MỚI CA LÀM VIỆC HÀNH CHÍNH</div>
                <CreateShiftForm typeId={typeid} />
            </div>
        </>
    )
}

export default CreateShift