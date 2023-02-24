import React from 'react'
import './styles.scss'
import InputCustom from 'components/InputCustom'
import FormSwitchCustom from 'components/ButtonSwitchCustom/FormSwitchCustom'
import { Stack } from '@mui/material'
import { useForm } from 'react-hook-form'
import { TypeName } from '../../CreateShiftForm'
import TimePickerCustom from 'components/InputTime/TimePickerCustom'

export type Props = {
    register: any
    typeName: TypeName
    control: any
}

const LateConfig: React.FC<Props> = ({ register, typeName, control }) => {

    const { register: internalRegister, getValues } = useForm({ defaultValues: { block: 10 } });

    return (
        <div className='LateConfig__wrapper'>
            <div className='title'>
                <p>Số phút đi muộn</p>
                <FormSwitchCustom
                    size='medium'
                    control={control}
                    name="config_in_late.is_in_use"
                />
            </div>
            <Stack spacing={2}>
                {typeName === TypeName.SINGLE && (
                    <>
                        <TimePickerCustom
                            name="config_in_late"
                            label='Thời gian bắt đầu tính đi muộn'
                            control={control} />
                    </>
                )}
                {typeName === TypeName.OFFICE && (
                    <>
                        <TimePickerCustom
                            name="config_in_late.late_in_morning"
                            label='Thời gian tính đi muộn buổi sáng từ:'
                            control={control} />
                        <TimePickerCustom
                            name="config_in_late.late_in_afternoon"
                            label='Thời gian tính đi muộn buổi chiều từ:'
                            control={control} />
                    </>
                )}
                <div className="radio">
                    <input
                        {...register("config_in_late.time")}
                        type="radio"
                        value=""
                        checked
                    />
                    <label htmlFor="config_in_late.time">
                        Tính theo số phút
                    </label>
                </div>
                <div className="radio">
                    <input
                        {...register("config_in_late.time")}
                        type="radio"
                        value={getValues("block")}
                    />
                    <label htmlFor="config_in_late.time">
                        Tính theo block
                    </label>
                    <InputCustom
                        width='50px'
                        name="block"
                        type='number'
                        min="1"
                        max="60"
                        register={internalRegister} />
                    <label htmlFor="block">
                        phút
                    </label>
                </div>
                <p>Số phút bạn nhập sẽ được tính là 1 Block.</p>
                <p>VD: 10 phút = 1 Block</p>
            </Stack>
        </div>
    )
}

export default LateConfig