import InputCustom from 'components/InputCustom'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import "./styles.scss"
import { useAppSelector } from 'hooks/useAppSelector'
import { useAppDispatch } from 'hooks/useAppDispatch'
import FeatureAccessTable from './components/FeatureAccessTable'
import { Stack } from '@mui/system'
import { PermissionFormContext } from "./context"
import PermissionVisual from './components/PermissionVisual'
import InputNote from 'components/InputNote'

export type Props = {
    method: FormMethod
}

export enum FormMethod {
    CREATE = "CREATE",
    VIEW = "VIEW"
}

const PermissionForm: React.FC<Props> = ({ method }) => {

    const [tableRows, setTableRows] = useState([]);

    const {
        control
    } = useForm({
        mode: "onChange",
    });

    const { listFeatureGroup } = useAppSelector(
        (state) => state.permissions
    );
    const dispatch = useAppDispatch();

    return (
        <PermissionFormContext.Provider value={{ tableRows, setTableRows }}>
            <div className="permission-form__wrapper">
                <Stack className='inputs' spacing={3}>
                    <InputCustom
                        name="permissionName"
                        control={control}
                        label='Vai trò'
                        placeholder='Nhập tên vai trò. VD: Admin'
                    />
                    <InputNote
                        name="permissionDescription"
                        control={control}
                        label='Mô Tả'
                        placeholder='Nhập mô tả về vai trò'
                        height='' width=''
                        maxLength={500}
                    />
                    <FeatureAccessTable control={control} featureGroups={listFeatureGroup} />
                </Stack>
                <div className='visual'>
                    <div>
                        <PermissionVisual />
                    </div>
                </div>
            </div>
        </PermissionFormContext.Provider>
    )
}

export default PermissionForm