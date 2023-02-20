import React from 'react'
import "./styles.scss"
import TimeRangeInput from 'components/TimeRangeInput'

export type Props = {
    register: any
}

const OfficeTimeInput: React.FC<Props> = ({ register }) => {
    return (
        <div className='OfficeTimeInput__wrapper'>
            <div className='group divider-top'>
                <TimeRangeInput
                    required
                    label='Giờ làm việc buổi sáng'
                    from_name="morning_working_time.from"
                    to_name='morning_working_time.to'
                    register={register} />
                <TimeRangeInput
                    required
                    label='Giờ Check in buổi sáng hợp lệ'
                    from_name="morning_allow_in_time.from"
                    to_name="morning_allow_in_time.to"
                    register={register} />
                <TimeRangeInput
                    required
                    label='Giờ Check out buổi sáng hợp lệ'
                    from_name="morning_allow_out_time.from"
                    to_name="morning_allow_out_time.to"
                    register={register} />
            </div>
            <div className='group divider-top'>
                <TimeRangeInput
                    required
                    label='Giờ làm việc buổi chiều'
                    from_name="afternoon_working_time.from"
                    to_name='afternoon_working_time.to'
                    register={register} />
                <TimeRangeInput
                    required
                    label='Giờ Check in buổi chiều hợp lệ'
                    from_name="afternoon_allow_in_time.from"
                    to_name='afternoon_allow_in_time.to'
                    register={register} />
                <TimeRangeInput
                    required
                    label='Giờ Check out buổi chiều hợp lệ'
                    from_name="afternoon_allow_out_time.from"
                    to_name='afternoon_allow_out_time.to'
                    register={register} />
            </div>
        </div>
    )
}

export default OfficeTimeInput