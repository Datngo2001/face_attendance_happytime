import { Stack } from '@mui/material'
import InputCustom from 'components/InputCustom'
import ModalActionCustom from 'components/ModalActionCustom'
import SelectCustom, { SelectBoxOption } from 'components/SelectCustom'
import React from 'react'
import { ApplyFor } from 'store/slices/Main/ShiftAssignments/shiftAssignmentsSlice'

export type Props = {
    nextStep: any
    control: any
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

const Step1: React.FC<Props> = ({ nextStep, control }) => {
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
                    control={control}
                    required
                    label='Áp dụng'
                    name='apply_for'
                    placeholder='Chọn đối tượng áp dụng'
                    options={selectApplyOptions} />

                <ModalActionCustom
                    btnJustifyContent='right'
                    titleBtnAccept='Tiếp tục'
                    handleClose={() => { }}
                    handleOnClick={() => nextStep()} />
            </Stack>
        </div >
    )
}

export default Step1