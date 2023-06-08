import React from 'react'
import './styles.scss'
import TimeRangeCustom from 'components/InputTime/TimeRangeCustom'

type Props = {
    control: any
}

const SingleTimeInput: React.FC<Props> = ({ control }) => {
    return (
        <div className='SingleTimeInput__wrapper divider-top'>
            <TimeRangeCustom
                required
                label='Giờ làm việc'
                from_name="working_time.from"
                to_name='working_time.to'
                control={control} />
            <TimeRangeCustom
                required
                label='Giờ Checkin hợp lệ'
                from_name="allow_in_time.from"
                to_name="allow_in_time.to"
                control={control} />
            <TimeRangeCustom
                required
                label='Giờ Checkout hợp lệ'
                from_name="allow_out_time.from"
                to_name="allow_out_time.to"
                control={control} />
        </div>
    )
}

export default SingleTimeInput