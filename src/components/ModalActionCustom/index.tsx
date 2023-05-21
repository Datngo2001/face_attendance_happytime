import ButtonCustom from 'components/ButtonCustom'
import React from 'react'
import './styles.scss'

export type Props = {
    divider?: boolean
    btnJustifyContent?: string
    titleBtnCancel?: string
    titleBtnAccept?: string
    handleClose: any
    handleOnClick: any
}

const ModalActionCustom: React.FC<Props> = ({ divider, btnJustifyContent, handleClose, titleBtnCancel, handleOnClick, titleBtnAccept }) => {
    return (
        <div
            className={`modal-custom__actions ${divider && "divider-top"
                }`}
            style={{ justifyContent: btnJustifyContent || "center" }}
        >
            <ButtonCustom
                className="btn-cancel"
                width="auto"
                onClick={handleClose}
            >
                {titleBtnCancel || "Hủy bỏ"}
            </ButtonCustom>
            <ButtonCustom
                className="btn-accept"
                width="auto"
                onClick={handleOnClick}
            >
                {titleBtnAccept || "Xác nhận"}
            </ButtonCustom>
        </div>
    )
}

export default ModalActionCustom