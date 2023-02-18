import DataGridCustom from 'components/DataGridCustom'
import PaginationCustom from 'components/PaginationCustom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import React, { useEffect, useState } from 'react'
import { columns } from './components';
import { extraReducersGetListShifts } from 'store/slices/Main/Shifts/actions/extraReducers';

const ShiftTable: React.FC = () => {

    // STATE
    const [page, setPage] = useState(1);
    // ****************************************************

    // HOOK REACT TOOLKIT
    const { listOfShift, totalPages, loading } = useAppSelector(
        (state) => state.shifts
    );
    const dispatch = useAppDispatch();
    // ******************************

    useEffect(() => {
        dispatch(
            extraReducersGetListShifts({
                page: page - 1,
                size: process.env.REACT_APP_PAGE_SIZE,
            })
        );
    }, [page]);

    const hanldeOnRowClick = () => { }
    const handleOnSelectionModelChange = () => { }

    return (
        <div className="ListShifts__table">
            <DataGridCustom
                onRowClick={hanldeOnRowClick}
                headerHeight={100}
                rowHeight={100}
                rows={listOfShift}
                columns={columns}
                getRowId={(row) => row._id}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                loading={loading}
                onSelectionModelChange={handleOnSelectionModelChange}
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