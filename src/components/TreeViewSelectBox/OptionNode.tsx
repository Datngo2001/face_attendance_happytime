import React, { useState } from 'react'
import { SelectBoxNode } from '.'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export type Props = {
    node: SelectBoxNode
    depth: number
    leftIndent: number;
    topIndent: number;
    handleSelect: any
}

const OptionNode: React.FC<Props> = ({ node, depth, leftIndent, topIndent, handleSelect }) => {
    const [open, setOpen] = useState(true);

    const handleArrowClick = (e) => {
        e.stopPropagation()
        setOpen(val => !val)
    }

    return (
        <div className="select-box-node" key={node.id} style={{ marginLeft: `${leftIndent}px`, marginTop: `${topIndent}px` }}>
            <div className='option'>
                <div className='icon'
                    style={{ visibility: node.children.length ? "initial" : "hidden" }}
                    onClick={handleArrowClick}>
                    {open ? (<ArrowDropDownIcon />) : (<ArrowRightIcon />)}
                </div>
                <div className='title' onClick={() => handleSelect(node.id)}>
                    <span>{node.name}</span>
                </div>
            </div>
            <div>
                {open && node.children.map(child => (
                    <div key={child.id}>
                        <OptionNode handleSelect={handleSelect} node={child} depth={depth + 1} leftIndent={leftIndent} topIndent={topIndent} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OptionNode