import { Stack } from '@mui/system'
import DateRangePickerCustom from 'components/InputDate/DateRangePickerCustom'
import React from 'react'

export type Props = {
    control: any
}

const DateRangeConfig: React.FC<Props> = ({ control }) => {
    return (
        <Stack>
            <DateRangePickerCustom
                name='day_range'
                fromName='from'
                toName='to'
                toLabel='Vô thời hạn'
                control={control}
                label='Khoảng ngày áp dụng'
                required />
        </Stack>
    )
}

export default DateRangeConfig