import React, { useEffect } from 'react'
import "./styles.scss"
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useForm } from 'react-hook-form';
import { ShiftAssignmentSearchParam } from 'store/slices/Main/ShiftAssignments/shiftAssignmentsSlice';
import useThrottle from 'hooks/useThrottle';
import { extraReducersGetListShiftAssignments } from 'store/slices/Main/ShiftAssignments/actions/extraReducers';
import { extraReducersGetDepartments } from 'store/slices/Main/Departments/actions/extraReducers';
import ShiftAssignmentsResultTable from './components/ShiftAssignmentsResultTable';
import ShiftAssignmentsResultSearchPannel from './components/ShiftAssignmentsResultSearchPannel';

const defaultParams = {
    page: 0,
    size: parseInt(process.env.REACT_APP_PAGE_SIZE),
} as ShiftAssignmentSearchParam

const ShiftResult: React.FC = () => {
    const { control, getValues, watch, setValue } = useForm({
        defaultValues: defaultParams
    });

    const dispatch = useAppDispatch();
    const searchParams = watch();

    const handleSearch = useThrottle(() => {
        dispatch(extraReducersGetListShiftAssignments(getValues()))
    }, 500)

    useEffect(() => {
        handleSearch();
    }, [searchParams])

    useEffect(() => {
        dispatch(extraReducersGetDepartments())
    }, [])

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