import React from 'react'
import DateRangePickerCustom from 'components/InputDate/DateRangePickerCustom'

type Props = {
    control: any
    setValue: any
}

const ShiftAssignmentsResultSearchPannel: React.FC<Props> = ({ control, setValue }) => {

    return (
        <div className='shift-assignments-result__control-panel'>
            <DateRangePickerCustom
                className='date_range'
                name="date_range"
                fromName={"from"}
                toName={"to"}
                width="500px"
                control={control}
                fromLabel="Chọn ngày bắt đầu"
                toLabel="Chọn ngày kết thúc"
            />
        </div>
    )
}

export default ShiftAssignmentsResultSearchPannel