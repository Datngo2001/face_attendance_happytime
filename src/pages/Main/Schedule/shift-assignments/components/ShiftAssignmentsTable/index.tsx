import ButtonCustom from 'components/ButtonCustom'
import DataGridCustom from 'components/DataGridCustom'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import useConfirmMoldal from 'hooks/useConfirmMoldal'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { extraReducersDeleteShiftAssignment } from 'store/slices/Main/ShiftAssignments/actions/extraReducers'
import { getColumns } from './component'
import { LabelResult, getEmployeeNames } from 'utils/getLabelUtil'
import { extraReducersGetDepartmentAndPositionList } from 'store/slices/Main/Departments/actions/extraReducers'
import { FormPaginationCustom } from 'components/PaginationCustom/FormPaginationCustom'

export type Props = {
    control: any
    handleSearch: any
}

const ShiftAssignmentsTable: React.FC<Props> = ({ control, handleSearch }) => {
    const navigate = useNavigate();
    const { openConfirmModal } = useConfirmMoldal();
    const [employeeLabels, setEmployeeLabels] = useState<LabelResult[]>([])

    const { listOfShiftAssignment, totalPages, totalShifts, loading, lastDeleteSuccess } = useAppSelector(
        (state) => state.shiftAssignments
    );
    const { departments, positions } = useAppSelector(state => state.departments)
    const dispatch = useAppDispatch();

    useEffect(() => {
        handleSearch()
    }, [lastDeleteSuccess])

    useEffect(() => {
        dispatch(extraReducersGetDepartmentAndPositionList());
        getEmployeeNames(listOfShiftAssignment.map(shiftAssignment => shiftAssignment.agents).flat())
            .then(res => setEmployeeLabels(res))
            .catch(err => console.log(err))
    }, [listOfShiftAssignment])

    const deleteClick = (id) => {
        openConfirmModal("Xác nhận", "Bạn có muốn xóa phân ca này không ?", () => {
            dispatch(
                extraReducersDeleteShiftAssignment({ id })
            );
        })
    }

    return (
        <div className='shift-assignments__table'>
            <div className='table-header'>
                <span>Có {totalShifts} Phân ca làm việc trong danh sách</span>
                <div>
                    <ButtonCustom onClick={() => navigate("./create")}>Tạo mới</ButtonCustom>
                </div>
            </div>
            <DataGridCustom
                headerHeight={60}
                rowHeight={60}
                rows={listOfShiftAssignment}
                columns={getColumns(deleteClick, employeeLabels, departments, positions)}
                getRowId={(row) => row._id}
                rowsPerPageOptions={[5]}
                loading={loading}
            />
            {listOfShiftAssignment.length > 0 && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "right",
                        padding: "16px 24px",
                        backgroundColor: "#ffffff",
                        borderTop: "1px solid #eeeeee",
                    }}
                >
                    <FormPaginationCustom control={control} totalPages={totalPages} name={'page'} />
                </div>
            )}
        </div>
    )
}

export default ShiftAssignmentsTable