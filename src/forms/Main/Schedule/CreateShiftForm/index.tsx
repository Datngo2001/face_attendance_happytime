import React, { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import "./styles.scss"
import ButtonCustom from 'components/ButtonCustom'
import { useNavigate } from 'react-router-dom'
import { ShiftType } from 'store/slices/Main/Shifts/shiftsSlice'
import InputCustom from 'components/InputCustom'
import { Stack } from '@mui/material'
import FormSwitchCustom from 'components/ButtonSwitchCustom/FormSwitchCustom'
import TimeRangeInput from 'components/TimeRangeInput'
import OfficeTimeInput from '../components/OfficeTimeInput'

export type Props = {
    shiftType: ShiftType
    action?: string
}

enum TypeName {
    OFFICE = "OFFICE",
    SINGLE = "SINGLE",
    UNKNOW = "UNKNOW"
}

const ShiftForm: React.FC<Props> = ({ shiftType, action = "create" }) => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    const typeName = useMemo(() => {
        if (!shiftType) return ""
        if (shiftType.schedule_name === "Ca hành chính") {
            return TypeName.OFFICE
        }
        if (shiftType.schedule_name === "Ca đơn") {
            return TypeName.SINGLE
        }
        return TypeName.UNKNOW
    }, [shiftType?.schedule_name])

    const onSubmit = (data) => { }

    const handleOnCancel = () => { navigate("../shifts") }
    const handleOnSubmitUpdate = () => { }
    const handleOnSubmitCreate = () => { }

    return (
        <div className='shiftForm__wrapper'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack className='group' spacing={2}>
                    <FormSwitchCustom
                        size='medium'
                        label='Trạng thái hoạt động'
                        {...register("is_enabled")} />
                    <InputCustom
                        required
                        label='Tên ca làm việc'
                        name="name"
                        register={register} />
                    <InputCustom
                        required
                        label='Mã ca làm việc'
                        name="code"
                        register={register} />
                </Stack>
                <div className='group'>
                    {typeName === TypeName.OFFICE && (<OfficeTimeInput register={register} />)}
                    {typeName === TypeName.SINGLE && (<OfficeTimeInput register={register} />)}
                </div>
                <Stack className='group divider-top group-number' spacing={2}>
                    <InputCustom
                        required
                        label='Số công ghi nhận'
                        name="work_count"
                        register={register}
                        defaultValue='1'
                        type='number' />
                    <InputCustom
                        required
                        label='Số công ghi nhận nếu quên Check out'
                        name="partial_work_count"
                        register={register}
                        defaultValue='0.5'
                        type='number' />
                </Stack>
                <div className="actions divider-top">
                    <ButtonCustom
                        className="btn btn--cancel"
                        width="auto"
                        height="32px"
                        onClick={handleOnCancel}
                    >
                        Hủy bỏ
                    </ButtonCustom>
                    <ButtonCustom
                        className="btn"
                        width="auto"
                        height="32px"
                        onClick={handleSubmit(
                            action === "update"
                                ? handleOnSubmitUpdate
                                : handleOnSubmitCreate
                        )}
                    >
                        Lưu
                    </ButtonCustom>
                </div>
            </form>
        </div>
    )
}

export default ShiftForm