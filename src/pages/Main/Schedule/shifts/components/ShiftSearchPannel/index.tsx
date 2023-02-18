import InputCustom from 'components/InputCustom';
import SelectCustom, { SelectBoxOption } from 'components/SelectCustom';
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { ShiftStatus } from 'store/slices/Main/Shifts/shiftsSlice';
import ButtonCustom from 'components/ButtonCustom';
import AddIcon from '@mui/icons-material/Add';
import ModalCustom from "components/ModalCustom";

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
    const [modal, setModal] = useState(false);

    const handleCreateClick = () => setModal(() => true)

    return (
        <>
            <div className="ListShifts__control-panel">
                <SelectCustom
                    name="shiftStatus"
                    className="input-item"
                    register={register}
                    defaultValue={"ALL"}
                    placeholder="Trạng thái hoạt động"
                    options={shiftStatusOptions}
                />
                <SelectCustom
                    name="shiftType"
                    className="input-item"
                    register={register}
                    placeholder="Loại ca làm việc"
                    options={shiftTypeOptions}
                />
                <InputCustom
                    id="txt_code_name"
                    name='codeOrName'
                    iconRight={<SearchRoundedIcon />}
                    className="input-item flex-basic-25"
                    placeholder="Nhập tên ca làm việc, mã ca"
                    register={register}
                />
                <ButtonCustom icon={<AddIcon />} onClick={handleCreateClick} type={2}>Thêm mới</ButtonCustom>
            </div>
            <ModalCustom
                callback={() => { }}
                state={modal}
                setState={setModal}
                titleHeader='Thêm ca làm việc'
                titleBtnAccept='Thêm mới'
                titleBtnCancel='Hủy bỏ'>
                <div>
                    <h1>Modal</h1>
                </div>
            </ModalCustom>
        </>
    )
}

export default ShiftSearchPannel;