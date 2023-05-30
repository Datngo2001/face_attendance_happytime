import ButtonCustom from 'components/ButtonCustom'
import DataGridCustom from 'components/DataGridCustom'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import useConfirmMoldal from 'hooks/useConfirmMoldal'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { extraReducersDeleteShiftAssignment } from 'store/slices/Main/ShiftAssignments/actions/extraReducers'
import { getColumns } from './component'
import { LabelResult, getEmployeeNames } from 'utils/getLabelUtil'
import { extraReducersGetDepartmentAndPositionList } from 'store/slices/Main/Departments/actions/extraReducers'
import { FormPaginationCustom } from 'components/PaginationCustom/FormPaginationCustom'
import ReplayIcon from '@mui/icons-material/Replay';

export type Props = {
    control: any
    handleSearch: any
    watch: any
}

const ShiftAssignmentsResultTable: React.FC<Props> = ({ control, handleSearch, watch }) => {
    const tempId = useRef(0)
    const navigate = useNavigate();

    const { listOfShiftAssignmentResult, totalPages, loading } = useAppSelector(
        (state) => state.shiftAssignmentsResult
    );

    const date_range = watch("date_range")

    const columns = useMemo(() => getColumns(date_range.from, date_range.to), [date_range.from, date_range.to])

    return (
        <div className='shift-assignments-result__table'>
            <div className='table-header'>
                <span></span>
                <div className='action'>
                    <ButtonCustom type={2} onClick={() => handleSearch()} icon={<ReplayIcon />}>Cập nhật kết quả</ButtonCustom>
                    <ButtonCustom onClick={() => navigate("../shift-assignments/create")}>Phân ca</ButtonCustom>
                </div>
            </div>
            <DataGridCustom
                headerHeight={60}
                rowHeight={60}
                rows={[]}
                columns={columns}
                getRowId={(row) => tempId.current += 1}
                rowsPerPageOptions={[5]}
                loading={loading}
            />
            <FormPaginationCustom control={control} totalPages={totalPages} name={'page'} />
        </div>
    )
}

export default ShiftAssignmentsResultTable