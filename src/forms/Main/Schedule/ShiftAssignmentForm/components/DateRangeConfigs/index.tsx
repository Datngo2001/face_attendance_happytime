import { Stack } from '@mui/system'
import DateRangePickerCustom from 'components/InputDate/DateRangePickerCustom'
import { FormAction } from 'forms/formAction'
import React, { useEffect } from 'react'
import "./styles.scss"
import CheckboxCustom from 'components/CheckboxCustom/CheckboxCustom'
import { useForm } from 'react-hook-form'
import { DateApply, Shift } from 'store/slices/Main/ShiftAssignments/shiftAssignmentsSlice'
import SelectCustom, { SelectBoxOption } from 'components/SelectCustom'

export type Props = {
    control: any
    action: FormAction
    watch: any
    setValue: any
    shiftSelectOptions: SelectBoxOption[]
}

const DateRangeConfig: React.FC<Props> = ({ control, action, watch, setValue, shiftSelectOptions }) => {
    const days = watch("day_range.days");
    var day_range = watch("day_range");
    var shifts = watch("day_range.shifts");

    const { control: subFormControl, watch: subFormWatch, setValue: subFormSetValue } = useForm({
        defaultValues: {
            dateApply: DateApply.use_same_shift,
            selectedShifts: []
        }
    });

    var dateApply = subFormWatch("dateApply")
    var selectedShifts = subFormWatch("selectedShifts")

    useEffect(() => {
        if (day_range.use_same_shift) {
            subFormSetValue("dateApply", DateApply.use_same_shift)
            subFormSetValue("selectedShifts", day_range.shifts[0]?.shift_ids)
        } else if (day_range.use_separate_shift) {
            subFormSetValue("dateApply", DateApply.use_separate_shift)
        }
    }, [day_range])

    useEffect(() => {
        if (dateApply === DateApply.use_same_shift) {
            setValue("day_range.shifts", shifts.map(shift => ({
                ...shift,
                shift_ids: selectedShifts
            })))
        }
    }, [selectedShifts])

    const handleDaysChange = (day) => {
        if (days.includes(day)) {
            let newDays = days.filter(x => x !== day)
            setValue("day_range.days", newDays)
            setValue("day_range.shifts", shifts.filter(x => x.date !== day))
        } else {
            let newDays = [...days, day]
            newDays.sort();
            setValue("day_range.days", newDays)

            let newShift = {
                date: day,
                shift_ids: []
            } as Shift;
            setValue("day_range.shifts", [...shifts, newShift])
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
                control={subFormControl}
                label='Chọn ca làm việc'
                placeholder='Chọn ca làm việc'
                name={'selectedShifts'}
                options={shiftSelectOptions}
                disabled={action === FormAction.UPDATE} />
        </Stack>
    )
}

export default DateRangeConfig