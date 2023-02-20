import DataGridCustom from 'components/DataGridCustom';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import React, { useEffect, useRef } from 'react'
import { extraReducersGetListShiftTypes } from 'store/slices/Main/Shifts/actions/extraReducers';
import { getColumns } from './components';
import { useNavigate } from 'react-router-dom';

const ShiftTypeTable: React.FC = () => {
    const navigate = useNavigate();

    // HOOK REACT TOOLKIT
    const { listOfShiftType, loading } = useAppSelector(
        (state) => state.shifts
    );
    const dispatch = useAppDispatch();
    // ******************************

    useEffect(() => {
        dispatch(
            extraReducersGetListShiftTypes()
        );
    }, []);

    const handleAddClick = (_id: string) => {
        return () => {
            navigate(`./create/${_id}`)
        }
    }

    return (
        <div className="ListShifts__table">
            <DataGridCustom
                headerHeight={75}
                rowHeight={75}
                getRowId={row => row._id}
                rows={listOfShiftType}
                columns={getColumns(handleAddClick)}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                loading={loading}
            />
        </div >
    )
}

export default ShiftTypeTable