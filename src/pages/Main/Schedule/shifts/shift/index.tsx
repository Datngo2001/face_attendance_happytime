import React, { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import "../styles.scss"
import { useAppSelector } from 'hooks/useAppSelector';
import { extraReducersGetListShiftTypes } from 'store/slices/Main/Shifts/actions/extraReducers';
import { useAppDispatch } from 'hooks/useAppDispatch';
import ShiftForm from 'forms/Main/Schedule/CreateShiftForm';

const ShiftPage: React.FC = () => {
    const { typeid, action } = useParams();

    const { listOfShiftType } = useAppSelector(state => state.shifts)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(
            extraReducersGetListShiftTypes()
        );
    }, []);

    const shiftType = useMemo(() => listOfShiftType.find(type => type._id === typeid), [listOfShiftType, typeid])

    const title = useMemo(() => {
        let actionTitle = ""
        if (action === "create") {
            actionTitle = "THÊM MỚI"
        } else if (action === "update") {
            actionTitle = "CẬP NHẬT"
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
                <ShiftForm action={action} shiftType={shiftType} />
            </div>
        </>
    )
}

export default ShiftPage