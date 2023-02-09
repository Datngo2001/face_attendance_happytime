import React from 'react'

export type Props = {
    method: FormMethod
}

export enum FormMethod {
    CREATE = "CREATE",
    VIEW = "VIEW"
}

const PermissionForm: React.FC<Props> = ({ method }) => {
    return (
        <>
            <div className="permission-form__wrapper">PermissionForm</div>
        </>
    )
}

export default PermissionForm