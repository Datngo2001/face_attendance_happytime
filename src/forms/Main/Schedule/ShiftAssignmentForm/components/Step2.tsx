import ModalActionCustom from 'components/ModalActionCustom'
import React from 'react'

export type Props = {
    nextStep: any
}

const Step2: React.FC<Props> = ({ nextStep }) => {
    return (
        <div>Step2
            <ModalActionCustom
                btnJustifyContent='right'
                titleBtnAccept='Hoàn tất'
                handleClose={() => { }}
                handleOnClick={() => { }} />
        </div>
    )
}

export default Step2