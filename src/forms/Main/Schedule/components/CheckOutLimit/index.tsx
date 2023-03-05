import FormSwitchCustom from 'components/ButtonSwitchCustom/FormSwitchCustom'
import React from 'react'

export type Props = {
    control: any
}

const CheckOutLimit: React.FC<Props> = ({ control }) => {
    return (
        <div className='CheckOutLimit'>
            <div className='title'>
                <p>Giới hạn Checkout</p>
                <FormSwitchCustom
                    size='medium'
                    control={control}
                    name='is_using_check_out_limit'
                />
            </div>
            <p className='hint'>Hệ thống sẽ lấy giờ Checkout bằng giờ kết thúc làm việc nếu giờ Checkout thực tế của nhân viên muộn hơn giờ kết thúc làm việc</p>
        </div>
    )
}

export default CheckOutLimit