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
import EarlyConfig from '../components/EarlyConfig'
import LateConfig from '../components/LateConfig'
import SingleTimeInput from '../components/SingleTimeInput'
import CheckInLimit from '../components/CheckInLimit'
import CheckOutLimit from '../components/CheckOutLimit'
import { defaultValues } from './defaultValues'

export type Props = {
    shiftType: ShiftType
    action?: string
}

export enum TypeName {
    OFFICE = "OFFICE",
    SINGLE = "SINGLE",
    UNKNOW = "UNKNOW"
}

const ShiftForm: React.FC<Props> = ({ shiftType, action = "create" }) => {
    const { register, control, handleSubmit } = useForm({ defaultValues: defaultValues });
    const navigate = useNavigate()

    const typeName = useMemo(() => {
        if (!shiftType) return TypeName.UNKNOW
        if (shiftType.schedule_name === "Ca hành chính") {
            return TypeName.OFFICE
        }
        if (shiftType.schedule_name === "Ca đơn") {
            return TypeName.SINGLE
        }
        return TypeName.UNKNOW
    }, [shiftType?.schedule_name])

    const onSubmit = (data) => {
        console.log(data)
    }

    const handleOnCancel = () => { navigate("../shifts") }
    const handleOnSubmitUpdate = (data) => { console.log(data) }
    const handleOnSubmitCreate = (data) => { console.log(data) }

    return (
        <div className='shiftForm__wrapper'>
            <form>
                <Stack className='group' spacing={2}>
                    <FormSwitchCustom
                        size='medium'
                        label='Trạng thái hoạt động'
                        control={control}
                        name='is_enabled'
                    />
                    <InputCustom
                        required
                        placeholder='Tên ca làm việc của bạn'
                        label='Tên ca làm việc'
                        name="name"
                        register={register} />
                    <InputCustom
                        required
                        placeholder='Mã ca làm việc của bạn'
                        label='Mã ca làm việc'
                        name="code"
                        register={register} />
                </Stack>
                <div className='group'>
                    {typeName === TypeName.OFFICE && (<OfficeTimeInput register={register} />)}
                    {typeName === TypeName.SINGLE && (<SingleTimeInput register={register} />)}
                </div>
                {typeName === TypeName.SINGLE && (
                    <div className='group group-limit divider-top`'>
                        <CheckInLimit register={register} control={control} />
                        <CheckOutLimit register={register} control={control} />
                    </div>
                )}
                <div className='group group-late-early'>
                    <LateConfig register={register} control={control} typeName={typeName} />
                    <EarlyConfig register={register} control={control} typeName={typeName} />
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
                        isSubmit
                    >
                        Lưu
                    </ButtonCustom>
                </div>
            </form>
        </div>
    )
}

export default ShiftForm