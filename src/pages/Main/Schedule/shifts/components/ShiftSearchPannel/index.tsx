import InputCustom from 'components/InputCustom';
import SelectCustom, { SelectBoxOption } from 'components/SelectCustom';
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import React, { useEffect, useMemo, useState } from 'react'
import ButtonCustom from 'components/ButtonCustom';
import AddIcon from '@mui/icons-material/Add';
import CreateShiftModal from '../CreateShiftModal';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { extraReducersGetListShiftTypes } from 'store/slices/Main/Shifts/actions/extraReducers';
import { statusActiveOptions } from 'utils/selectBoxOptions';

type Props = {
    control: any
}

const ShiftSearchPannel: React.FC<Props> = ({ control }) => {
    const [modal, setModal] = useState(false);

    const { listOfShiftType } = useAppSelector(state => state.shifts);
    const dispatch = useAppDispatch();

    const shiftTypeOptions = useMemo(
        () => listOfShiftType.map<SelectBoxOption>(type => ({
            id: type.schedule_name, name: type.schedule_name
        })),
        [listOfShiftType])

    useEffect(() => {
        dispatch(
            extraReducersGetListShiftTypes()
        );
    }, []);

    const handleCreateClick = () => setModal(() => true)

    return (
        <div className="ListShifts__control-panel">
            <SelectCustom
                name="is_enabled"
                className="input-item"
                control={control}
                placeholder="Trạng thái hoạt động"
                options={statusActiveOptions}
            />
            <SelectCustom
                name="shift_type_name"
                className="input-item"
                control={control}
                placeholder="Loại ca làm việc"
                options={shiftTypeOptions}
            />
            <InputCustom
                name='keyword'
                iconRight={<SearchRoundedIcon />}
                className="input-item"
                placeholder="Nhập tên ca làm việc, mã ca"
                control={control}
            />
            <ButtonCustom icon={<AddIcon />} onClick={handleCreateClick} type={2}>Thêm mới</ButtonCustom>

            <CreateShiftModal state={modal} setState={setModal} />
        </div>
    )
}

export default ShiftSearchPannel;