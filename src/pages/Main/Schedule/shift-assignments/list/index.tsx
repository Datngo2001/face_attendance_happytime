import React, { useEffect } from 'react'
import "./styles.scss"
import ShiftAssignmentsSearchPannel from '../components/ShiftAssignmentsSearchPannel';
import ShiftAssignmentsTable from '../components/ShiftAssignmentsTable';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useForm } from 'react-hook-form';
import { ShiftAssignmentSearchParam } from 'store/slices/Main/ShiftAssignments/shiftAssignmentsSlice';
import useThrottle from 'hooks/useThrottle';
import { extraReducersGetListShiftAssignments } from 'store/slices/Main/ShiftAssignments/actions/extraReducers';
import { extraReducersGetDepartments } from 'store/slices/Main/Departments/actions/extraReducers';

const defaultParams = {
    page: 0,
    size: 100,
    keyword: undefined
} as ShiftAssignmentSearchParam

const ShiftAssignmentsList: React.FC = () => {
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
            <div className="shift-assignments__wrapper">
                <div className="content-title">Phân ca</div>
                <ShiftAssignmentsSearchPannel control={control} setValue={setValue} />
                <ShiftAssignmentsTable control={control} handleSearch={handleSearch} />
            </div>
        </>
    );
}

export default ShiftAssignmentsList