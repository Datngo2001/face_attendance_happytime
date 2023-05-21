import React from 'react'
import "./styles.scss"
import ShiftAssignmentsSearchPannel from '../components/ShiftAssignmentsSearchPannel';
import ShiftAssignmentsTable from '../components/ShiftAssignmentsTable';

const ShiftAssignmentsList: React.FC = () => {

    return (
        <>
            <div className="shift-assignments__wrapper">
                <div className="content-title">Phân ca</div>
                <ShiftAssignmentsSearchPannel />
                <ShiftAssignmentsTable />
            </div>
        </>
    );
}

export default ShiftAssignmentsList