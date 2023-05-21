import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { FormAction } from 'forms/formAction';
import "./styles.scss";
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { extraReducersGetShiftAssignmentById } from 'store/slices/Main/ShiftAssignments/actions/extraReducers';
import ShiftAssignmentForm from 'forms/Main/Schedule/ShiftAssignmentForm';

const ShiftAssigment: React.FC = () => {
    const { action, id } = useParams();
    const title = action === FormAction.CREATE ? "THÊM MỚI PHÂN CA" : "CHỈNH SỬA PHÂN CA"

    const { shiftAssignment } = useAppSelector(state => state.shiftAssignments)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (id) {
            dispatch(
                extraReducersGetShiftAssignmentById({ id: id })
            );
        }
    }, []);

    return (
        <div className="shift-assignment__wrapper">
            <Link className="content-navigator" to="../shift-assignments">
                <ArrowBackRoundedIcon />
                Quay lại
            </Link>
            <div className="content-title">{title}</div>
            <ShiftAssignmentForm action={FormAction[action.toUpperCase()]} shiftAssignment={shiftAssignment} />
        </div>
    )
}

export default ShiftAssigment