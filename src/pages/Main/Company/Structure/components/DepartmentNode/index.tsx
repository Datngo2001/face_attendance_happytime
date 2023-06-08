import React, { useState } from 'react'
import { Department } from 'store/slices/Main/Departments/departmentsSlice';
import { DEFAULT_LEFT_INDENT, DEFAULT_TOP_INDENT } from '../../default';
import PositionNode from '../PositionNode/Index';
import StarIcon from '@mui/icons-material/Star';
import ButtonCustom from 'components/ButtonCustom';
import ConstructionIcon from '@mui/icons-material/Construction';
import DeleteIcon from '@mui/icons-material/Delete';
import useConfirmMoldal from 'hooks/useConfirmMoldal';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { extraReducersDeleteDepartments } from 'store/slices/Main/Departments/actions/extraReducers';

type Props = {
    department: Department
    depth: number
    handleUpdate: any
}

const DepartmentNode: React.FC<Props> = ({ department, depth, handleUpdate }) => {
    const [open, setOpen] = useState(true);
    const { openConfirmModal } = useConfirmMoldal();
    const dispatch = useAppDispatch();

    const handleDeleteClick = (id: string) => {
        openConfirmModal("Xác nhận", "Bạn có muốn xóa phòng ban này không", () => {
            dispatch(extraReducersDeleteDepartments(id))
        })
    }

    return (
        <div className='tree-node' style={{ marginLeft: `${DEFAULT_LEFT_INDENT}px`, marginTop: `${DEFAULT_TOP_INDENT}px` }}>
            <div className='node-line'></div>
            <div className='node-branch-button' style={{ left: `-${DEFAULT_LEFT_INDENT}px` }}>
                <ButtonCustom type={2} onClick={() => setOpen(val => !val)}>{
                    open ? <span>-</span> : <span>+</span>
                }</ButtonCustom>
            </div>
            <div className='node-title'>
                <div className='node-branch-line' style={{ width: `${DEFAULT_LEFT_INDENT}px`, left: `-${DEFAULT_LEFT_INDENT}px` }}></div>
                <div className='node-icon'><StarIcon fontSize='inherit' /></div>
                <div className='node-name'>{department.department_name}</div>
                <div className='node-actions'>
                    <ButtonCustom type={2} onClick={() => handleUpdate(department)} icon={<ConstructionIcon />}></ButtonCustom>
                    {department.children_department.length === 0 ? (<ButtonCustom type={2} onClick={() => handleDeleteClick(department.id)} icon={<DeleteIcon />}></ButtonCustom>) : null}
                </div>
            </div>
            <div hidden={!open}>
                {department.children_position.map(child => (
                    <PositionNode key={child.id} depth={depth + 1} position={child} />
                ))}
                {department.children_department.map(child => (
                    <DepartmentNode handleUpdate={handleUpdate} key={child.id} depth={depth + 1} department={child} />
                ))}
            </div>
        </div>
    )
}

export default DepartmentNode