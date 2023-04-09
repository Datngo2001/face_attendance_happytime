import React from 'react'
import "./styles.scss";
import { Department } from 'store/slices/Main/Departments/departmentsSlice';
import { DEFAULT_LEFT_INDENT, DEFAULT_TOP_INDENT } from '../../default';
import PositionNode from '../PositionNode/Index';
import StarIcon from '@mui/icons-material/Star';
import ButtonCustom from 'components/ButtonCustom';

export type Props = {
    department: Department
    depth: number
}

const DepartmentNode: React.FC<Props> = ({ department, depth }) => {
    return (
        <div className='tree-node' style={{ marginLeft: `${DEFAULT_LEFT_INDENT}px`, marginTop: `${DEFAULT_TOP_INDENT}px` }}>
            <div className='node-line'></div>
            <div className='node-branch' style={{ left: `-${DEFAULT_LEFT_INDENT}px` }}>
                <ButtonCustom className='node-branch-button' type={2}><span>+</span></ButtonCustom>
                <div className='node-branch-line'></div>
            </div>
            <div className='node-title'>
                <div className='node-icon'><StarIcon fontSize='inherit' /></div>
                <div className='node-name'>{department.department_name}</div>
            </div>
            {department.children_position.map(child => (
                <PositionNode key={child.id} depth={depth + 1} position={child} />
            ))}
            {department.children_department.map(child => (
                <DepartmentNode key={child.id} depth={depth + 1} department={child} />
            ))}
        </div>
    )
}

export default DepartmentNode