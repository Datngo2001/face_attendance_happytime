import InputCustom from 'components/InputCustom'
import TreeViewSelectBox from 'components/TreeViewSelectBox'
import { useAppSelector } from 'hooks/useAppSelector'
import React from 'react'
import { createPositionSelectOptions } from 'utils/departmentUtil'

export type Props = {
    control: any
    setValue: any
}

const ShiftAssignmentsSearchPannel: React.FC<Props> = ({ control, setValue }) => {

    const { departmentTrees } = useAppSelector((state) => state.departments);

    return (
        <div className='shift-assignments__control-panel'>
            <InputCustom
                className="keyword_input"
                name={'keyword'}
                placeholder='Tên mã nhân viên'
                control={control} />
            <TreeViewSelectBox
                className="position_input"
                required={true}
                placeholder="Phòng ban vị trí công việc"
                setValue={setValue}
                name="agent_position"
                control={control}
                options={departmentTrees ? createPositionSelectOptions(departmentTrees) : []} />
        </div>
    )
}

export default ShiftAssignmentsSearchPannel