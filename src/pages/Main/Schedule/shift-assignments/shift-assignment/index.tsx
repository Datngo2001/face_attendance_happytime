import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { FormAction } from 'forms/formAction';
import "./styles.scss";
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { extraReducersGetShiftAssignmentById } from 'store/slices/Main/ShiftAssignments/actions/extraReducers';
import ShiftAssignmentForm from 'forms/Main/Schedule/ShiftAssignmentForm';
import useConfirmMoldal from 'hooks/useConfirmMoldal';

const ShiftAssigment: React.FC = () => {
    const { action, id } = useParams();
    const title = action === FormAction.CREATE ? "THÊM MỚI PHÂN CA" : "CHỈNH SỬA PHÂN CA"

    const { shiftAssignment } = useAppSelector(state => state.shiftAssignments)
    const dispatch = useAppDispatch()
    const { openConfirmModal } = useConfirmMoldal();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            dispatch(
                extraReducersGetShiftAssignmentById({ id: id })
            );
        }
    }, []);

    const handleCancel = () => {
        openConfirmModal(
            "Xác nhận",
            "Bạn có muốn hủy thao tác",
            () => navigate("../shift-assignments")
        )
    }

    return (
        <div className="shift-assignment__wrapper">
            <div className="content-navigator" onClick={handleCancel} style={{ cursor: "pointer" }}>
                <ArrowBackRoundedIcon />
                Quay lại
            </div>
            <div className="content-title">{title}</div>
            <ShiftAssignmentForm action={FormAction[action.toUpperCase()]} shiftAssignment={shiftAssignment} />
        </div>
    )
}

export default ShiftAssigment