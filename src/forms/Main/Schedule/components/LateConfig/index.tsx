import React from 'react'
import './styles.scss'
import FormSwitchCustom from 'components/ButtonSwitchCustom/FormSwitchCustom'
import { Stack } from '@mui/material'
import { TypeName } from '../../ShiftForm'
import TimePickerCustom from 'components/InputTime/TimePickerCustom'

export type Props = {
    typeName: TypeName
    control: any
}

const LateConfig: React.FC<Props> = ({ typeName, control }) => {
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
            </Stack>
        </div>
    )
}

export default LateConfig