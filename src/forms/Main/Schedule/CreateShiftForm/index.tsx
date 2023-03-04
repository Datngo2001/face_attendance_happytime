import React, { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import "./styles.scss"
import ButtonCustom from 'components/ButtonCustom'
import { useNavigate } from 'react-router-dom'
import { Shift, ShiftType } from 'store/slices/Main/Shifts/shiftsSlice'
import InputCustom from 'components/InputCustom'
import { Stack } from '@mui/material'
import FormSwitchCustom from 'components/ButtonSwitchCustom/FormSwitchCustom'
import OfficeTimeInput from '../components/OfficeTimeInput'
import EarlyConfig from '../components/EarlyConfig'
import LateConfig from '../components/LateConfig'
import SingleTimeInput from '../components/SingleTimeInput'
import CheckInLimit from '../components/CheckInLimit'
import CheckOutLimit from '../components/CheckOutLimit'
import { defaultValuesOffice, defaultValuesSingle } from './defaultValues'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema } from './validator'
import { FormAction } from 'forms/formAction'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { extraReducersCreateShift } from 'store/slices/Main/Shifts/actions/extraReducers'

export type Props = {
    shift?: Shift
    shiftType: ShiftType
    action?: FormAction
}

export enum TypeName {
    OFFICE = "OFFICE",
    SINGLE = "SINGLE",
    UNKNOW = "UNKNOW"
}

const ShiftForm: React.FC<Props> = ({ shiftType, shift, action = FormAction.CREATE }) => {
    const typeName = useMemo(() => {
        if (!shiftType) return TypeName.UNKNOW
        if (shiftType.schedule_name === "Ca hành chính") {
            return TypeName.OFFICE
        }
        if (shiftType.schedule_name === "Ca đơn") {
            return TypeName.SINGLE
        }
        return TypeName.UNKNOW
    }, [shiftType])

    const defaultValue = useMemo(() => {
        if (action === FormAction.CREATE) {
            return typeName === TypeName.OFFICE ? defaultValuesOffice : defaultValuesSingle
        } else if (action === FormAction.UPDATE || action === FormAction.VIEW) {
            return shift
        }
    }, [action, shift, typeName])

    const { register, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: defaultValue,
        resolver: yupResolver(schema)
    });

    const navigate = useNavigate()

    const dispatch = useAppDispatch();

    const handleOnCancel = () => { navigate("../shifts") }
    const handleOnSubmitUpdate = (data) => {
        console.log(data)
    }
    const handleOnSubmitCreate = (data) => {
        data.shift_type.id = shiftType._id;
        data.shift_type.name = shiftType.schedule_name;
        dispatch(extraReducersCreateShift({ data, onSuccess: () => { navigate("../shifts") } }))
    }

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
                        register={register}
                        message={errors} />
                    <InputCustom
                        required
                        placeholder='Mã ca làm việc của bạn'
                        label='Mã ca làm việc'
                        name="code"
                        register={register}
                        message={errors} />
                </Stack>
                <div className='group'>
                    {typeName === TypeName.OFFICE && (<OfficeTimeInput control={control} />)}
                    {typeName === TypeName.SINGLE && (<SingleTimeInput control={control} />)}
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
                        type='number'
                        message={errors} />
                    <InputCustom
                        required
                        label='Số công ghi nhận nếu quên Check out'
                        name="partial_work_count"
                        register={register}
                        type='number'
                        message={errors} />
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
                            action === FormAction.UPDATE
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