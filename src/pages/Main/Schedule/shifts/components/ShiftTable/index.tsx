import DataGridCustom from 'components/DataGridCustom'
import PaginationCustom from 'components/PaginationCustom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import React, { useEffect } from 'react'
import { columns } from './components';
import { extraReducersGetListShifts } from 'store/slices/Main/Shifts/actions/extraReducers';

export type Props = {
    page: number
    setPage: any
}

const ShiftTable: React.FC<Props> = ({ page, setPage }) => {

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

    return (
        <div className="ListShifts__table">
            <DataGridCustom
                headerHeight={60}
                rowHeight={60}
                rows={listOfShift}
                columns={columns}
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