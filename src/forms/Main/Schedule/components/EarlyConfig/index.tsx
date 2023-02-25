import React, { useState } from 'react'
import './styles.scss'
import FormSwitchCustom from 'components/ButtonSwitchCustom/FormSwitchCustom'
import Stack from '@mui/material/Stack'
import InputCustom from 'components/InputCustom'
import { Controller, useForm } from 'react-hook-form'
import { TypeName } from '../../CreateShiftForm'
import TimePickerCustom from 'components/InputTime/TimePickerCustom'
import TimeBlockConfig from '../TimeBlockConfig'

export type Props = {
    register: any,
    typeName: TypeName
    control: any
}

const EarlyConfig: React.FC<Props> = ({ register, typeName, control }) => {

    const { register: internalRegister, getValues } = useForm({ defaultValues: { block: 10 } });

    return (
        <div className='EarlyConfig__wrapper'>
            <div className='title'>
                <p>Số phút về sớm</p>
                <FormSwitchCustom
                    size='medium'
                    control={control}
                    name='config_out_early.is_in_use' />
            </div>
            <Stack spacing={2}>
                {typeName === TypeName.SINGLE && (
                    <>
                        <TimePickerCustom
                            name="config_out_early.time"
                            label='Thời gian bắt đầu tính về sớm'
                            control={control} />
                    </>
                )}
                {typeName === TypeName.OFFICE && (
                    <>
                        <TimePickerCustom
                            name="config_out_early.early_out_morning"
                            label='Thời gian tính về sớm buổi sáng đến:'
                            control={control} />
                        <TimePickerCustom
                            name="config_out_early.early_out_afternoon"
                            label='Thời gian tính về sớm buổi chiều đến:'
                            control={control} />
                    </>
                )}
                {/* <Controller
                    control={control}
                    name="config_out_early.time"
                    render={({
                        field: { onChange, value },
                    }) => (
                        <TimeBlockConfig radioName='config_out_early.time' onChange={onChange} value={value} />
                    )} /> */}
            </Stack>
        </div>
    )
}

export default EarlyConfig