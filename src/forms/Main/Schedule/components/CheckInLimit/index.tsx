import FormSwitchCustom from 'components/ButtonSwitchCustom/FormSwitchCustom'
import React from 'react'

export type Props = {
    register: any
}

const CheckInLimit: React.FC<Props> = ({ register }) => {
    return (
        <div className='CheckInLimit'>
            <div className='title'>
                <p>Giới hạn Checkin</p>
                <FormSwitchCustom
                    size='medium'
                    {...register("is_using_check_in_limit")} />
            </div>
            <p className='hint'>Hệ thống sẽ lấy giờ Checkin bằng giờ bắt đầu làm việc nếu giờ Checkin thực tế của nhân viên sớm hơn giờ bắt đầu làm việc</p>
        </div>
    )
}

export default CheckInLimit