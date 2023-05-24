import { Stack } from '@mui/material'
import InputCustom from 'components/InputCustom'
import ModalActionCustom from 'components/ModalActionCustom'
import SelectCustom, { SelectBoxOption } from 'components/SelectCustom'
import { FormAction } from 'forms/formAction'
import React from 'react'
import { ApplyFor } from 'store/slices/Main/ShiftAssignments/shiftAssignmentsSlice'

export type Props = {
    nextStep: any
    control: any
    watch: any
    departmentOptions: SelectBoxOption[]
    positionOptions: SelectBoxOption[]
    employeeOptions: SelectBoxOption[]
    onCancel: any
    action: FormAction
}

const selectApplyOptions: SelectBoxOption[] = [
    {
        id: ApplyFor.company,
        name: 'Toàn công ty'
    },
    {
        id: ApplyFor.department,
        name: 'Phòng ban'
    },
    {
        id: ApplyFor.position,
        name: 'Vị trí công việc'
    },
    {
        id: ApplyFor.agent,
        name: 'Nhân viên'
    },
]

const Step1: React.FC<Props> = ({ nextStep, control, watch, departmentOptions, positionOptions, employeeOptions, onCancel, action }) => {
    const applyFor = watch("apply_for");

    return (
        <div>
            <Stack spacing={2}>
                <InputCustom
                    required
                    placeholder='Tiêu đề'
                    label='Tiêu đề'
                    name="name"
                    control={control} />

                <SelectCustom
                    disabled={action === FormAction.UPDATE}
                    control={control}
                    required
                    label='Áp dụng'
                    name='apply_for'
                    placeholder='Chọn đối tượng áp dụng'
                    options={selectApplyOptions} />

                {applyFor === ApplyFor.department && (
                    <SelectCustom
                        disabled={action === FormAction.UPDATE}
                        isMultiple
                        useCheckBox
                        control={control}
                        required
                        label='Phòng ban'
                        name='departments'
                        placeholder='Chọn phòng ban áp dụng'
                        options={departmentOptions} />
                )}

                {applyFor === ApplyFor.position && (
                    <SelectCustom
                        disabled={action === FormAction.UPDATE}
                        isMultiple
                        useCheckBox
                        control={control}
                        required
                        label='Vị trí'
                        name='positions'
                        placeholder='Chọn vị trí áp dụng'
                        options={positionOptions} />
                )}

                {applyFor === ApplyFor.agent && (
                    <SelectCustom
                        isMultiple
                        useCheckBox
                        disabled={action === FormAction.UPDATE}
                        control={control}
                        required
                        label='Nhân viên'
                        name='agents'
                        placeholder='Chọn nhân viên áp dụng'
                        options={employeeOptions} />
                )}

                <ModalActionCustom
                    btnJustifyContent='right'
                    titleBtnAccept='Tiếp tục'
                    handleClose={() => onCancel()}
                    handleOnClick={() => nextStep()} />
            </Stack>
        </div >
    )
}

export default Step1