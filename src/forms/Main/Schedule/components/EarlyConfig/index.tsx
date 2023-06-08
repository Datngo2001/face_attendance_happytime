import React from 'react'
import './styles.scss'
import FormSwitchCustom from 'components/ButtonSwitchCustom/FormSwitchCustom'
import Stack from '@mui/material/Stack'
import TimePickerCustom from 'components/InputTime/TimePickerCustom'
import { ShiftTypeName } from 'store/slices/Main/Shifts/shiftsSlice'

type Props = {
    typeName: ShiftTypeName
    control: any
}

const EarlyConfig: React.FC<Props> = ({ typeName, control }) => {

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
                {typeName === ShiftTypeName.SINGLE && (
                    <>
                        <TimePickerCustom
                            name="config_out_early.time"
                            label='Thời gian bắt đầu tính về sớm'
                            control={control} />
                    </>
                )}
                {typeName === ShiftTypeName.OFFICE && (
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
            </Stack>
        </div>
    )
}

export default EarlyConfig