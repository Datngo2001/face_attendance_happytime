import React from 'react'
import './styles.scss'
import FormSwitchCustom from 'components/ButtonSwitchCustom/FormSwitchCustom'
import { Stack } from '@mui/material'
import TimePickerCustom from 'components/InputTime/TimePickerCustom'
import { ShiftTypeName } from 'store/slices/Main/Shifts/shiftsSlice'

type Props = {
    typeName: ShiftTypeName
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
                {typeName === ShiftTypeName.SINGLE && (
                    <>
                        <TimePickerCustom
                            name="config_in_late.time"
                            label='Thời gian bắt đầu tính đi muộn'
                            control={control} />
                    </>
                )}
                {typeName === ShiftTypeName.OFFICE && (
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