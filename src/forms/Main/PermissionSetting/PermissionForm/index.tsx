import InputCustom from 'components/InputCustom'
import React from 'react'
import { useForm } from 'react-hook-form'
import "./styles.scss"
import { useAppSelector } from 'hooks/useAppSelector'
import { useAppDispatch } from 'hooks/useAppDispatch'
import FeatureAccessTable from './components/FeatureAccessTable'
import { Stack } from '@mui/system'

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

    const { listFeatureGroup } = useAppSelector(
        (state) => state.permissions
    );
    const dispatch = useAppDispatch();

    return (
        <>
            <div className="permission-form__wrapper">
                <Stack className='inputs' spacing={3}>
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
                        height='128px'
                        isTextArea
                    />
                    <FeatureAccessTable featureGroups={listFeatureGroup} />
                </Stack>
                <div className='visual'>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default PermissionForm