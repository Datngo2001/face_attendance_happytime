import React from 'react'
import "./styles.scss"
import ShiftAssignmentsTable from '../components/ShiftAssignmentsTable';
import ShiftAssignmentsSearchPannel from '../components/ShiftAssignmentsSearchPannel';

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