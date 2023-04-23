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

const shiftStatusOptions: SelectBoxOption[] = [
    {
        id: "ALL",
        name: "Tất cả"
    },
    {
        id: "true",
        name: "Đang hoạt động"
    },
    {
        id: "false",
        name: "Không hoạt động"
    }
]

export type Props = {
    control: any
}

const ShiftSearchPannel: React.FC<Props> = ({ control }) => {
    const [modal, setModal] = useState(false);

    const { listOfShiftType } = useAppSelector(state => state.shifts);
    const dispatch = useAppDispatch();

    const shiftTypeOptions = useMemo(
        () => listOfShiftType.map<SelectBoxOption>(type => ({
            id: type._id, name: type.schedule_name
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
                name="shiftStatus"
                className="input-item"
                control={control}
                placeholder="Trạng thái hoạt động"
                options={shiftStatusOptions}
            />
            <SelectCustom
                name="shiftType"
                className="input-item"
                control={control}
                placeholder="Loại ca làm việc"
                options={shiftTypeOptions}
            />
            <InputCustom
                name='codeOrName'
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