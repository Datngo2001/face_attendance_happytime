import { Chip, Stack } from '@mui/material'
import DatePickerCustom from 'components/InputDate/DatePickerCustom'
import RadioGroupCustom, { RadioItem } from 'components/RadioGroupCustom'
import SelectCustom, { SelectBoxOption } from 'components/SelectCustom'
import { FormAction } from 'forms/formAction'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { DateApply, Shift } from 'store/slices/Main/ShiftAssignments/shiftAssignmentsSlice'

export type Props = {
    watch: any
    setValue: any
    shiftSelectOptions: SelectBoxOption[]
    action: FormAction
}

const radioItems: RadioItem[] = [
    {
        label: "Dùng chung ca cho các ngày đã chọn",
        value: DateApply.use_same_shift
    },
    {
        label: "Cài đặt ca cho từng ngày",
        value: DateApply.use_separate_shift
    }
]

const SpecificDateConfig: React.FC<Props> = ({ watch, setValue, shiftSelectOptions, action }) => {
    var shifts = watch("day_applied.shifts");
    var day_applied = watch("day_applied");

    const { control: subFormControl, watch: subFormWatch, setValue: subFormSetValue } = useForm({
        defaultValues: {
            selectedDate: "",
            dateApply: DateApply.use_same_shift,
            selectedShifts: []
        }
    });

    var selectedDate = subFormWatch("selectedDate")
    var dateApply = subFormWatch("dateApply")
    var selectedShifts = subFormWatch("selectedShifts")

    useEffect(() => {
        if (day_applied.use_same_shift) {
            subFormSetValue("dateApply", DateApply.use_same_shift)
            subFormSetValue("selectedShifts", day_applied.shifts[0]?.shift_ids)
        } else if (day_applied.use_separate_shift) {
            subFormSetValue("dateApply", DateApply.use_separate_shift)
        }

    }, [day_applied])

    useEffect(() => {
        if (selectedDate) {
            if (!shifts.find(x => x.date === selectedDate)) {
                let newShift = {
                    day: selectedDate.toString(),
                    date: selectedDate.toString(),
                    shift_ids: []
                } as Shift;
                setValue("day_applied.shifts", [...shifts, newShift])
            }
            subFormSetValue("selectedDate", null)
        }
    }, [selectedDate])

    useEffect(() => {
        if (dateApply === DateApply.use_same_shift) {
            setValue("day_applied.use_same_shift", true)
            setValue("day_applied.use_separate_shift", false)
        } else if (dateApply === DateApply.use_separate_shift) {
            setValue("day_applied.use_same_shift", false)
            setValue("day_applied.use_separate_shift", true)
        }
    }, [dateApply])

    useEffect(() => {
        if (dateApply === DateApply.use_same_shift) {
            setValue("day_applied.shifts", shifts.map(shift => ({
                ...shift,
                shift_ids: selectedShifts
            })))
        }
    }, [selectedShifts])

    const handleShiftDelete = (date) => {
        setValue("day_applied.shifts", shifts.filter(x => x.date !== date))
    }

    return (
        <Stack spacing={5}>
            <DatePickerCustom
                name="selectedDate"
                control={subFormControl}
                disabled={action === FormAction.UPDATE} />
            <Stack direction="row" flexWrap={"wrap"} gap={2} overflow={"auto"}>
                {shifts && shifts.map((shift, index) => (
                    <Chip
                        key={shift.date}
                        label={shift.date}
                        onDelete={() => handleShiftDelete(shift.date)}
                        disabled={action === FormAction.UPDATE} />
                ))}
            </Stack>

            <RadioGroupCustom
                name="dateApply"
                control={subFormControl}
                items={radioItems}
                disabled={action === FormAction.UPDATE} />

            {dateApply === DateApply.use_same_shift && (
                <SelectCustom
                    isMultiple
                    required
                    control={subFormControl}
                    label='Chọn ca làm việc'
                    placeholder='Chọn ca làm việc'
                    name={'selectedShifts'}
                    options={shiftSelectOptions}
                    disabled={action === FormAction.UPDATE} />
            )}
        </Stack>
    )
}

export default SpecificDateConfig