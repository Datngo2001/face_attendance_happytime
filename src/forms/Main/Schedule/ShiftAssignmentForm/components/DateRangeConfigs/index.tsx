import { Stack } from '@mui/system'
import DateRangePickerCustom from 'components/InputDate/DateRangePickerCustom'
import { FormAction } from 'forms/formAction'
import React, { useEffect } from 'react'
import "./styles.scss"
import CheckboxCustom from 'components/CheckboxCustom/CheckboxCustom'
import SelectCustom, { SelectBoxOption } from 'components/SelectCustom'
import useThrottle from 'hooks/useThrottle'
import { validateShift_ids } from 'utils/shiftScheduleUtil'

export type Props = {
    control: any
    action: FormAction
    watch: any
    setValue: any
    shiftSelectOptions: SelectBoxOption[]
    setError: any
    clearErrors: any
}

const DateRangeConfig: React.FC<Props> = ({ control, action, watch, setError, clearErrors, setValue, shiftSelectOptions }) => {
    const days = watch("day_range.days");

    const handleDaysChange = (day) => {
        if (days.includes(day)) {
            let newDays = days.filter(x => x !== day)
            setValue("day_range.days", newDays)
        } else {
            let newDays = [...days, day]
            newDays.sort();
            setValue("day_range.days", newDays)
        }
    }

    return (
        <Stack spacing={2} className={"daterange-config__wrapper"}>
            <DateRangePickerCustom
                name='day_range'
                fromName='from'
                toName='to'
                toLabel='Vô thời hạn'
                control={control}
                label='Khoảng ngày áp dụng'
                required
                disabled={action === FormAction.UPDATE} />

            <div className='repeat-config'>
                <p className='label'>Cài đặt chế độ lặp <span>*</span></p>
                <Stack className='config' spacing={2}>
                    <div>
                        <p className='label'>Chọn ngày áp dụng <span>*</span></p>
                        <div className='days'>
                            <CheckboxCustom label='Thứ 2' checked={days.includes(2)} onChange={() => handleDaysChange(2)} disabled={action === FormAction.UPDATE} />
                            <CheckboxCustom label='Thứ 3' checked={days.includes(3)} onChange={() => handleDaysChange(3)} disabled={action === FormAction.UPDATE} />
                            <CheckboxCustom label='Thứ 4' checked={days.includes(4)} onChange={() => handleDaysChange(4)} disabled={action === FormAction.UPDATE} />
                            <CheckboxCustom label='Thứ 5' checked={days.includes(5)} onChange={() => handleDaysChange(5)} disabled={action === FormAction.UPDATE} />
                            <CheckboxCustom label='Thứ 6' checked={days.includes(6)} onChange={() => handleDaysChange(6)} disabled={action === FormAction.UPDATE} />
                            <CheckboxCustom label='Thứ 7' checked={days.includes(7)} onChange={() => handleDaysChange(7)} disabled={action === FormAction.UPDATE} />
                            <CheckboxCustom label='Chủ Nhật' checked={days.includes(8)} onChange={() => handleDaysChange(8)} disabled={action === FormAction.UPDATE} />
                        </div>
                    </div>
                </Stack>
            </div>

            <SelectCustom
                isMultiple
                required
                useCheckBox
                control={control}
                label='Chọn ca làm việc'
                placeholder='Chọn ca làm việc'
                name={'day_range.shift_ids'}
                options={shiftSelectOptions}
                disabled={action === FormAction.UPDATE} />
        </Stack>
    )
}

export default DateRangeConfig