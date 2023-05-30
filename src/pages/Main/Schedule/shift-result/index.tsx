import React, { useEffect } from 'react'
import "./styles.scss"
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useForm } from 'react-hook-form';
import useThrottle from 'hooks/useThrottle';
import ShiftAssignmentsResultTable from './components/ShiftAssignmentsResultTable';
import ShiftAssignmentsResultSearchPannel from './components/ShiftAssignmentsResultSearchPannel';
import { extraReducersGetListShiftAssignmentsResult } from 'store/slices/Main/ShiftAssignmentsResult/actions/extraReducers';
import { ShiftAssignmentResultSearchParam } from 'store/slices/Main/ShiftAssignmentsResult/shiftAssignmentsResultSlice';
import dayjs from 'dayjs';

const defaultParams = {
    page: 0,
    size: parseInt(process.env.REACT_APP_PAGE_SIZE),
    date_range: {
        from: dayjs().set("day", 1).toDate().getTime(),
        to: dayjs().set("day", 7).toDate().getTime(),
    }
} as ShiftAssignmentResultSearchParam

const ShiftResult: React.FC = () => {
    const { control, getValues, watch, setValue } = useForm({
        defaultValues: defaultParams
    });

    const dispatch = useAppDispatch();
    const searchParams = watch();

    const handleSearch = useThrottle(() => {
        dispatch(extraReducersGetListShiftAssignmentsResult(getValues()))
    }, 500)

    useEffect(() => {
        handleSearch();
    }, [searchParams])

    return (
        <>
            <div className="shift-assignments-result__wrapper">
                <div className="content-title">Kết quả phân ca</div>
                <ShiftAssignmentsResultSearchPannel control={control} setValue={setValue} />
                <ShiftAssignmentsResultTable control={control} handleSearch={handleSearch} />
            </div>
        </>
    )
}

export default ShiftResult