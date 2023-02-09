import InputCustom from 'components/InputCustom'
import React from 'react'
import { useForm } from 'react-hook-form'
import "./styles.scss"

export type Props = {
    method: FormMethod
}

export enum FormMethod {
    CREATE = "CREATE",
    VIEW = "VIEW"
}

const PermissionForm: React.FC<Props> = ({ method }) => {
    const {
        register,
        handleSubmit,
        setValue,
        setError,
        trigger,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    return (
        <>
            <div className="permission-form__wrapper">
                <div className='permission-form__inputs'>
                    <InputCustom
                        id='permissionName'
                        register={register}
                        label='Vai trò'
                        placeholder='Nhập tên vai trò. VD: Admin'
                    />
                    <InputCustom
                        id='permissionDescription'
                        register={register}
                        label='Mô Tả'
                        placeholder='Nhập mô tả về vai trò'
                        isTextArea
                    />
                </div>
                <div className='permission-form__visual'>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default PermissionForm