import React from 'react'
import './styles.scss'
import InputCustom from 'components/InputCustom'
import FormSwitchCustom from 'components/ButtonSwitchCustom/FormSwitchCustom'
import { Stack } from '@mui/material'
import InputTime from 'components/InputTime'
import { useForm } from 'react-hook-form'
import { TypeName } from '../../CreateShiftForm'

export type Props = {
    register: any
    typeName: TypeName
}

const LateConfig: React.FC<Props> = ({ register, typeName }) => {

    const { register: internalRegister, getValues } = useForm({ defaultValues: { block: 10 } });

    return (
        <div className='LateConfig__wrapper'>
            <div className='title'>
                <p>Số phút đi muộn</p>
                <FormSwitchCustom
                    size='medium'
                    {...register("config_in_late.is_in_use")} />
            </div>
            <Stack spacing={2}>
                {typeName === TypeName.SINGLE && (
                    <>
                        <InputTime
                            name="config_in_late"
                            label='Thời gian bắt đầu tính đi muộn'
                            register={register} />
                    </>
                )}
                {typeName === TypeName.OFFICE && (
                    <>
                        <InputTime
                            name="config_in_late.late_in_morning"
                            label='Thời gian tính đi muộn buổi sáng từ:'
                            register={register} />
                        <InputTime
                            name="config_in_late.late_in_afternoon"
                            label='Thời gian tính đi muộn buổi chiều từ:'
                            register={register} />
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