import { Stack } from '@mui/material'
import ModalActionCustom from 'components/ModalActionCustom'
import React, { useEffect } from 'react'
import RadioBox from './RadioBox'
import { TimeApply } from 'store/slices/Main/ShiftAssignments/shiftAssignmentsSlice'
import DateRangeConfig from './DateRangeConfigs'
import SpecificDateConfig from './SpecificDateConfigs'
import { SelectBoxOption } from 'components/SelectCustom'

export type Props = {
    nextStep: any
    handleSubmit: any
    control: any
    setValue: any
    watch: any
    shiftSelectOptions: SelectBoxOption[]
}

const Step2: React.FC<Props> = ({ nextStep, handleSubmit, control, setValue, watch, shiftSelectOptions }) => {
    const timeApply = watch("timeApply")

    useEffect(() => {
        if (timeApply === TimeApply.use_day_range) {
            setValue("use_day_range", true)
            setValue("use_specific_day", false)
        } else if (timeApply === TimeApply.use_specific_day) {
            setValue("use_day_range", false)
            setValue("use_specific_day", true)
        }
    }, [timeApply])

    return (
        <div>
            <Stack spacing={2}>
                <div className="time-apply-group">
                    <RadioBox
                        value={TimeApply.use_day_range}
                        name='timeApply'
                        control={control}
                        setValue={setValue}
                        title="Khoảng ngày áp dụng"
                        description={`
                        Chọn một khoảng thời gian từ ngày bắt đầu đến ngày kết thúc, hoặc không có thời hạn kết thúc.
                    `} />

                    <RadioBox
                        value={TimeApply.use_specific_day}
                        name='timeApply'
                        control={control}
                        setValue={setValue}
                        title="Chọn ngày áp dụng"
                        description={`
                        Chọn ngày áp dụng
                    `} />
                </div>

                {timeApply === TimeApply.use_day_range && (
                    <DateRangeConfig control={control} />
                )}

                {timeApply === TimeApply.use_specific_day && (
                    <SpecificDateConfig watch={watch} setValue={setValue} shiftSelectOptions={shiftSelectOptions} />
                )}

                <ModalActionCustom
                    btnJustifyContent='right'
                    titleBtnAccept='Hoàn tất'
                    handleClose={() => { }}
                    handleOnClick={handleSubmit} />

            </Stack>
        </div>
    )
}

export default Step2