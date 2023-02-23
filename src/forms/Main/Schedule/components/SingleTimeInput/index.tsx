import TimeRangeInput from 'components/TimeRangeInput'
import React from 'react'
import './styles.scss'

export type Props = {
    register: any
}

const SingleTimeInput: React.FC<Props> = ({ register }) => {
    return (
        <div className='SingleTimeInput__wrapper divider-top'>
            <TimeRangeInput
                required
                label='Giờ làm việc'
                from_name="working_time.from"
                to_name='working_time.to'
                register={register} />
            <TimeRangeInput
                required
                label='Giờ Checkin hợp lệ'
                from_name="allow_in_time.from"
                to_name="allow_in_time.to"
                register={register} />
            <TimeRangeInput
                required
                label='Giờ Checkout hợp lệ'
                from_name="allow_out_time.from"
                to_name="allow_out_time.to"
                register={register} />
        </div>
    )
}

export default SingleTimeInput