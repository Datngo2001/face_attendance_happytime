import ButtonCustom from 'components/ButtonCustom'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export type Props = {}

const ShiftAssignmentsTable: React.FC<Props> = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>ShiftAssignmentsTable</div>
            <ButtonCustom onClick={() => navigate("./create")}>Create</ButtonCustom>
        </>
    )
}

export default ShiftAssignmentsTable