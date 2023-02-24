import React from 'react'
import "./styles.scss"
import TimeRangeCustom from 'components/InputTime/TimeRangeCustom'

export type Props = {
    control: any
}

const OfficeTimeInput: React.FC<Props> = ({ control }) => {
    return (
        <div className='OfficeTimeInput__wrapper'>
            <div className='group divider-top'>
                <TimeRangeCustom
                    required
                    label='Giờ làm việc buổi sáng'
                    from_name="morning_working_time.from"
                    to_name='morning_working_time.to'
                    control={control} />
                <TimeRangeCustom
                    required
                    label='Giờ Check in buổi sáng hợp lệ'
                    from_name="morning_allow_in_time.from"
                    to_name="morning_allow_in_time.to"
                    control={control} />
                <TimeRangeCustom
                    required
                    label='Giờ Check out buổi sáng hợp lệ'
                    from_name="morning_allow_out_time.from"
                    to_name="morning_allow_out_time.to"
                    control={control} />
            </div>
            <div className='group divider-top'>
                <TimeRangeCustom
                    required
                    label='Giờ làm việc buổi chiều'
                    from_name="afternoon_working_time.from"
                    to_name='afternoon_working_time.to'
                    control={control} />
                <TimeRangeCustom
                    required
                    label='Giờ Check in buổi chiều hợp lệ'
                    from_name="afternoon_allow_in_time.from"
                    to_name='afternoon_allow_in_time.to'
                    control={control} />
                <TimeRangeCustom
                    required
                    label='Giờ Check out buổi chiều hợp lệ'
                    from_name="afternoon_allow_out_time.from"
                    to_name='afternoon_allow_out_time.to'
                    control={control} />
            </div>
        </div>
    )
}

export default OfficeTimeInput