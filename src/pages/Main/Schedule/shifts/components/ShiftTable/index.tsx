import DataGridCustom from 'components/DataGridCustom'
import PaginationCustom from 'components/PaginationCustom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import React, { useEffect } from 'react'
import { extraReducersGetListShifts, extraReducersUpdateShiftStatus } from 'store/slices/Main/Shifts/actions/extraReducers';
import { getColumns } from './components';
import useConfirmMoldal from 'hooks/useConfirmMoldal';

export type Props = {
    page: number
    setPage: any
}

const ShiftTable: React.FC<Props> = ({ page, setPage }) => {
    const { openConfirmModal } = useConfirmMoldal();

    // HOOK REACT TOOLKIT
    const { listOfShift, totalPages, loading } = useAppSelector(
        (state) => state.shifts
    );
    const dispatch = useAppDispatch();
    // ******************************

    useEffect(() => {
        dispatch(
            extraReducersGetListShifts({
                page: page,
                size: process.env.REACT_APP_PAGE_SIZE,
            })
        );
    }, []);

    const updateStatus = (id, value) => {
        openConfirmModal("Xác nhận", "Bạn có muốn cập nhật trạng thái cho ca làm việc này không ?", () => {
            dispatch(
                extraReducersUpdateShiftStatus({
                    id: id,
                    isEnabled: value
                })
            );
        })
    }

    return (
        <div className="ListShifts__table">
            <DataGridCustom
                headerHeight={60}
                rowHeight={60}
                rows={listOfShift}
                columns={getColumns(updateStatus)}
                getRowId={(row) => row._id}
                rowsPerPageOptions={[5]}
                loading={loading}
            />
            {listOfShift.length > 0 && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "right",
                        padding: "16px 24px",
                        backgroundColor: "#ffffff",
                        borderTop: "1px solid #eeeeee",
                    }}
                >
                    <PaginationCustom
                        page={page}
                        setPage={setPage}
                        totalPages={totalPages}
                    />
                </div>
            )}
        </div >
    )
}

export default ShiftTable