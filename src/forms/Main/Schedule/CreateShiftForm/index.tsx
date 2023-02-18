import React from 'react'
import { useForm } from 'react-hook-form'
import "./styles.scss"
import ButtonCustom from 'components/ButtonCustom'
import { useNavigate } from 'react-router-dom'

export type Props = {
    typeId: string
    method?: string
}

const CreateShiftForm: React.FC<Props> = ({ typeId, method }) => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    const onSubmit = (data) => { }

    const handleOnCancel = () => { navigate("../shifts") }
    const handleOnSubmitUpdate = () => { }
    const handleOnSubmitCreate = () => { }

    return (
        <div className='createShiftForm__wrapper'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="actions divider-top">
                    <ButtonCustom
                        className="btn btn--cancel"
                        width="auto"
                        height="32px"
                        onClick={handleOnCancel}
                    >
                        Hủy bỏ
                    </ButtonCustom>
                    <ButtonCustom
                        className="btn"
                        width="auto"
                        height="32px"
                        onClick={handleSubmit(
                            method === "update"
                                ? handleOnSubmitUpdate
                                : handleOnSubmitCreate
                        )}
                    >
                        Lưu
                    </ButtonCustom>
                </div>
            </form>
        </div>
    )
}

export default CreateShiftForm