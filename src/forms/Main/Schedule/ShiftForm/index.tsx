import React, { useEffect, useMemo } from 'react'
import "./styles.scss"
import ButtonCustom from 'components/ButtonCustom'
import { useNavigate } from 'react-router-dom'
import { Shift, ShiftType, ShiftTypeName } from 'store/slices/Main/Shifts/shiftsSlice'
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
import { schema } from './validator'
import { FormAction } from 'forms/formAction'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { extraReducersCreateShift, extraReducersUpdateShift } from 'store/slices/Main/Shifts/actions/extraReducers'
import InputNumber from 'components/InputNumber'
import useCRUDForm from 'hooks/useCRUDForm'

export type Props = {
    shift?: Shift
    shiftType: ShiftType
    action?: FormAction
}

const ShiftForm: React.FC<Props> = ({ shiftType, shift, action = FormAction.CREATE }) => {
    const typeName = useMemo(() => {
        if (!shiftType) return ShiftTypeName.UNKNOW
        if (shiftType.schedule_name === ShiftTypeName.OFFICE.toString()) {
            return ShiftTypeName.OFFICE
        }
        if (shiftType.schedule_name === ShiftTypeName.SINGLE.toString()) {
            return ShiftTypeName.SINGLE
        }
        return ShiftTypeName.UNKNOW
    }, [shiftType])

    const defaultValue = useMemo(() => {
        if (action === FormAction.CREATE) {
            return typeName === ShiftTypeName.OFFICE ? defaultValuesOffice : defaultValuesSingle
        } else if (action === FormAction.UPDATE || action === FormAction.VIEW) {
            return shift
        }
    }, [action, shift, typeName])

    const { control, handleSubmit } = useCRUDForm({
        defaultValues: defaultValue,
        validationSchema: schema
    });

    const navigate = useNavigate()

    const dispatch = useAppDispatch();

    const handleOnCancel = () => { navigate("../shifts") }
    const handleOnSubmitUpdate = (data) => {
        data.shift_type.id = shiftType._id;
        data.shift_type.name = shiftType.schedule_name;
        dispatch(extraReducersUpdateShift({ data, onSuccess: () => { navigate("../shifts") } }))
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
                        control={control} />
                    <InputCustom
                        required
                        placeholder='Mã ca làm việc của bạn'
                        label='Mã ca làm việc'
                        name="code"
                        control={control} />
                </Stack>
                <div className='group'>
                    {typeName === ShiftTypeName.OFFICE && (<OfficeTimeInput control={control} />)}
                    {typeName === ShiftTypeName.SINGLE && (<SingleTimeInput control={control} />)}
                </div>
                {typeName === ShiftTypeName.SINGLE && (
                    <div className='group group-limit divider-top`'>
                        <CheckInLimit control={control} />
                        <CheckOutLimit control={control} />
                    </div>
                )}
                <div className='group group-late-early'>
                    <LateConfig control={control} typeName={typeName} />
                    <EarlyConfig control={control} typeName={typeName} />
                </div>
                <Stack className='group divider-top group-number' spacing={2}>
                    <InputNumber
                        required
                        label='Số công ghi nhận'
                        name="work_count"
                        control={control}
                        max={9999}
                        min={0} />
                    <InputNumber
                        required
                        label='Số công ghi nhận nếu quên Check out'
                        name="partial_work_count"
                        control={control}
                        max={9999}
                        min={0} />
                </Stack>
                {action === FormAction.VIEW ? null : (
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

                )}
            </form>
        </div>
    )
}

export default ShiftForm