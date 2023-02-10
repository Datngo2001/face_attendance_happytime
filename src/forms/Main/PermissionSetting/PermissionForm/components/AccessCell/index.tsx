import SelectCustom from "components/SelectCustom";
import React from "react";

export type Props = {
    isOpen: boolean
    accesses: string[]
}

const AccessCell: React.FC<Props> = ({ isOpen, accesses }) => {
    return (
        <div className="feature-cell__wrapper">
            {/* <SelectCustom

            /> */}
            {isOpen && accesses.map((feature, index) => {
                if (index === 0) return null;
                return (<div key={index} className="access">{feature}</div>)
            })}
        </div>
    )
}

export default AccessCell