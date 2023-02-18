import InputCustom from 'components/InputCustom';
import SelectCustom, { SelectBoxOption } from 'components/SelectCustom';
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import React from 'react'
import { useForm } from 'react-hook-form';
import { ShiftStatus } from 'store/slices/Main/Shifts/shiftsSlice';
import ButtonCustom from 'components/ButtonCustom';
import AddIcon from '@mui/icons-material/Add';

const shiftStatusOptions: SelectBoxOption[] = [
    {
        id: "ALL",
        name: "Tất cả"
    },
    {
        id: ShiftStatus.ON.toString(),
        name: "Đang hoạt động"
    },
    {
        id: ShiftStatus.OFF.toString(),
        name: "Không hoạt động"
    }
]

const shiftTypeOptions: SelectBoxOption[] = [
    {
        id: "1",
        name: "Ca đơn"
    },
    {
        id: "2",
        name: "Ca hành chính"
    },
    {
        id: "3",
        name: "Ca nâng cao"
    }
]


const ShiftSearchPannel: React.FC = () => {
    const { register } = useForm();
    return (
        <>
            <div className="ListShifts__control-panel">
                <form>
                    <SelectCustom
                        id="shiftStatus"
                        className="input-item"
                        register={register}
                        defaultValue={"ALL"}
                        placeholder="Trạng thái hoạt động"
                        options={shiftStatusOptions}
                    />
                    <SelectCustom
                        id="shiftType"
                        className="input-item"
                        register={register}
                        placeholder="Loại ca làm việc"
                        options={shiftTypeOptions}
                    />
                    <InputCustom
                        id="searchData"
                        iconRight={<SearchRoundedIcon />}
                        className="input-item flex-basic-25"
                        placeholder="Nhập tên ca làm việc, mã ca"
                        register={register}
                    />
                    <ButtonCustom icon={<AddIcon />}>Thêm mới</ButtonCustom>
                </form>
            </div>
        </>
    )
}

export default ShiftSearchPannel;