import React, { useState } from 'react'
import './styles.scss'
import FormSwitchCustom from 'components/ButtonSwitchCustom/FormSwitchCustom'
import Stack from '@mui/material/Stack'
import InputTime from "components/InputTime"
import InputCustom from 'components/InputCustom'
import { useForm } from 'react-hook-form'
import { TypeName } from '../../CreateShiftForm'

export type Props = {
    register: any,
    typeName: TypeName
}

const EarlyConfig: React.FC<Props> = ({ register, typeName }) => {

    const { register: internalRegister, getValues } = useForm({ defaultValues: { block: 10 } });

    return (
        <div className='EarlyConfig__wrapper'>
            <div className='title'>
                <p>Số phút về sớm</p>
                <FormSwitchCustom
                    size='medium'
                    {...register("config_out_early.is_in_use")} />
            </div>
            <Stack spacing={2}>
                {typeName === TypeName.SINGLE && (
                    <>
                        <InputTime
                            name="config_out_early"
                            label='Thời gian bắt đầu tính về sớm'
                            register={register} />
                    </>
                )}
                {typeName === TypeName.OFFICE && (
                    <>
                        <InputTime
                            name="config_out_early.early_out_morning"
                            label='Thời gian tính về sớm buổi sáng đến:'
                            register={register} />
                        <InputTime
                            name="config_out_early.early_out_afternoon"
                            label='Thời gian tính về sớm buổi chiều đến:'
                            register={register} />
                    </>
                )}
                <div className="radio">
                    <input
                        {...register("config_out_early.time")}
                        type="radio"
                        value=""
                        checked
                    />
                    <label htmlFor="config_out_early.time">
                        Tính theo số phút
                    </label>
                </div>
                <div className="radio">
                    <input
                        {...register("config_out_early.time")}
                        type="radio"
                        value={getValues("block")}
                    />
                    <label htmlFor="config_out_early.time">
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

export default EarlyConfig