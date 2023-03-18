import React, { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import "../styles.scss"
import { useAppSelector } from 'hooks/useAppSelector';
import { extraReducersGetListShiftTypes, extraReducersGetShiftById } from 'store/slices/Main/Shifts/actions/extraReducers';
import { useAppDispatch } from 'hooks/useAppDispatch';
import ShiftForm from 'forms/Main/Schedule/ShiftForm';
import { FormAction } from 'forms/formAction';

const ShiftPage: React.FC = () => {
    const { id, typeid, action } = useParams();

    const { listOfShiftType, shift } = useAppSelector(state => state.shifts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(
            extraReducersGetListShiftTypes()
        );

        if (id) {
            dispatch(
                extraReducersGetShiftById({ id: id })
            );
        }
    }, []);

    const shiftType = useMemo(() => listOfShiftType.find(type => type._id === typeid), [listOfShiftType, typeid])

    const title = useMemo(() => {
        let actionTitle = ""
        if (action === FormAction.CREATE) {
            actionTitle = "THÊM MỚI"
        } else if (action === FormAction.UPDATE) {
            actionTitle = "CẬP NHẬT"
        } else {
            return ""
        }

        return `${actionTitle} ${shiftType?.schedule_name.toUpperCase()}`
    }, [action, shiftType])

    return (
        <>
            <div className="createShift__wrapper">
                <Link className="content-navigator" to="../shifts">
                    <ArrowBackRoundedIcon />
                    Quay lại
                </Link>
                <div className="content-title">{title}</div>
                {shiftType && <ShiftForm action={FormAction[action.toUpperCase()]} shiftType={shiftType} shift={shift} />}
            </div>
        </>
    )
}

export default ShiftPage