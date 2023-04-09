import React from 'react'
import { Position } from 'store/slices/Main/Departments/departmentsSlice'
import { DEFAULT_LEFT_INDENT, DEFAULT_TOP_INDENT } from '../../default'
import PersonIcon from '@mui/icons-material/Person';

export type Props = {
    position: Position
    depth: number
}

const PositionNode: React.FC<Props> = ({ depth, position }) => {
    return (
        <div className='tree-node' style={{ marginLeft: `${DEFAULT_LEFT_INDENT}px`, marginTop: `${DEFAULT_TOP_INDENT}px` }}>
            <div className='node-title'>
                <div className='node-icon'><PersonIcon fontSize='inherit' /></div>
                <div className='node-name'>{position.position_name}</div>
            </div>
        </div>
    )
}

export default PositionNode