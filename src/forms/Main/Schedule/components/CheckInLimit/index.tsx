import FormSwitchCustom from 'components/ButtonSwitchCustom/FormSwitchCustom'
import React from 'react'

type Props = {
    control: any
}

const CheckInLimit: React.FC<Props> = ({ control }) => {
    return (
        <div className='CheckInLimit'>
            <div className='title'>
                <p>Giới hạn Checkin</p>
                <FormSwitchCustom
                    size='medium'
                    control={control}
                    name='is_using_check_in_limit'
                />
            </div>
            <p className='hint'>Hệ thống sẽ lấy giờ Checkin bằng giờ bắt đầu làm việc nếu giờ Checkin thực tế của nhân viên sớm hơn giờ bắt đầu làm việc</p>
        </div>
    )
}

export default CheckInLimit