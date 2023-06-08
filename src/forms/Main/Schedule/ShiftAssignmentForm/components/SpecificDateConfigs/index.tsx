import { Chip, Stack } from '@mui/material'
import ChipCustom from 'components/ChipCustom'
import DatePickerCustom from 'components/InputDate/DatePickerCustom'
import RadioGroupCustom, { RadioItem } from 'components/RadioGroupCustom'
import SelectCustom, { SelectBoxOption } from 'components/SelectCustom'
import { FormAction } from 'forms/formAction'
import useThrottle from 'hooks/useThrottle'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { DateApply, Shift } from 'store/slices/Main/ShiftAssignments/shiftAssignmentsSlice'
import { validateShift_ids } from 'utils/shiftScheduleUtil'

type Props = {
    watch: any
    setValue: any
    shiftSelectOptions: SelectBoxOption[]
    action: FormAction
    setError: any
    clearErrors: any
    control: any
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

const SpecificDateConfig: React.FC<Props> = ({ watch, setValue, shiftSelectOptions, setError, clearErrors, action, control }) => {
    var day_applied = watch("day_applied");

    const { control: subFormControl, watch: subFormWatch, setValue: subFormSetValue } = useForm({
        defaultValues: {
            selectedDate: "",
        }
    });

    var selectedDate = subFormWatch("selectedDate")

    useEffect(() => {
        if (selectedDate) {
            if (!day_applied.dates.find(x => x.date === selectedDate)) {
                setValue("day_applied.dates", [...day_applied.dates, selectedDate])
            }
            subFormSetValue("selectedDate", null)
        }
    }, [selectedDate])

    const handleDateDelete = (date) => {
        setValue("day_applied.dates", day_applied.dates.filter(x => x !== date))
    }

    return (
        <Stack spacing={5}>
            <DatePickerCustom
                name="selectedDate"
                control={subFormControl}
                disabled={action === FormAction.UPDATE} />
            <Stack direction="row" flexWrap={"wrap"} gap={2} overflow={"auto"}>
                {day_applied.dates.map((date, index) => (
                    <ChipCustom
                        key={date}
                        label={date}
                        onDelete={() => handleDateDelete(date)}
                        disabled={action === FormAction.UPDATE} />
                ))}
            </Stack>

            {/* <RadioGroupCustom
                name="dateApply"
                control={subFormControl}
                items={radioItems}
                disabled={action === FormAction.UPDATE} /> */}

            <SelectCustom
                isMultiple
                required
                useCheckBox
                control={control}
                label='Chọn ca làm việc'
                placeholder='Chọn ca làm việc'
                name='day_applied.shift_ids'
                options={shiftSelectOptions}
                disabled={action === FormAction.UPDATE} />
        </Stack>
    )
}

export default SpecificDateConfig