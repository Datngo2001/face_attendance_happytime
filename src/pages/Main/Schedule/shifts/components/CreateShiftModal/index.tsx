import ModalCustom from 'components/ModalCustom'
import RadioGroupCustom from 'components/RadioGroupCustom'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { useAppSelector } from 'hooks/useAppSelector'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export type Props = {
    state: boolean,
    setState: any,
}

const CreateShiftModal: React.FC<Props> = ({ state, setState }) => {
    const { register, getValues } = useForm()
    const navigate = useNavigate()

    // HOOK REACT TOOLKIT
    const { listOfShiftType } = useAppSelector(
        (state) => state.shifts
    );
    const dispatch = useAppDispatch();
    // ******************************

    const handleSubmit = () => {
        let { shiftType } = getValues()
        navigate(`./create/${shiftType}`)
    }

    return (
        <ModalCustom
            divider
            width={400}
            callback={handleSubmit}
            state={state}
            setState={setState}
            titleHeader='Thêm ca làm việc'
            titleBtnAccept='Thêm mới'
            titleBtnCancel='Hủy bỏ'>
            <div >
                <p style={{ textAlign: "left", marginBottom: "20px" }}>Chọn loại ca làm việc</p>
                <RadioGroupCustom
                    name='shiftType'
                    register={register}
                    defaultValue={listOfShiftType[0]?._id}
                    items={listOfShiftType.map(type => ({ value: type._id, label: type.schedule_name }))} />
            </div>
        </ModalCustom>
    )
}

export default CreateShiftModal