import { Stack } from '@mui/system'
import DateRangePickerCustom from 'components/InputDate/DateRangePickerCustom'
import { FormAction } from 'forms/formAction'
import React from 'react'

export type Props = {
    control: any
    action: FormAction
}

const DateRangeConfig: React.FC<Props> = ({ control, action }) => {
    return (
        <Stack>
            <DateRangePickerCustom
                name='day_range'
                fromName='from'
                toName='to'
                toLabel='Vô thời hạn'
                control={control}
                label='Khoảng ngày áp dụng'
                required
                disabled={action === FormAction.UPDATE} />
        </Stack>
    )
}

export default DateRangeConfig