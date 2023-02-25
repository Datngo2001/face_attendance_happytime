import React, { useEffect, useRef } from 'react'
import './styles.scss'
import InputCustom from 'components/InputCustom'
import FormSwitchCustom from 'components/ButtonSwitchCustom/FormSwitchCustom'
import { Stack } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import { TypeName } from '../../CreateShiftForm'
import TimePickerCustom from 'components/InputTime/TimePickerCustom'
import TimeBlockConfig from '../TimeBlockConfig'

export type Props = {
    register: any
    typeName: TypeName
    control: any
}

const LateConfig: React.FC<Props> = ({ register, typeName, control }) => {
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
                            name="config_in_late.time"
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
                {/* <Controller
                    control={control}
                    name="config_in_late.time"
                    render={({
                        field: { onChange, value },
                    }) => (
                        <TimeBlockConfig radioName="config_in_late.time" onChange={onChange} value={value} />
                    )} /> */}
            </Stack>
        </div>
    )
}

export default LateConfig