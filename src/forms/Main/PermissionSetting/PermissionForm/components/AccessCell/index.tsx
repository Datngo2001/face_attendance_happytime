import SelectCustom, { SelectBoxOption } from "components/SelectCustom";
import React, { useMemo } from "react";
import { AccessEnum } from "store/slices/Main/Permission/permissionSlice";

export type Props = {
    isOpen: boolean
    accesses: string[]
    onFeatureAccessSelect: any
    onGroupAccessSelect: any
    _ids: string
    allowAccessTypes: AccessEnum[]
}

const AccessCell: React.FC<Props> = ({ _ids, isOpen, accesses, onFeatureAccessSelect, onGroupAccessSelect, allowAccessTypes }) => {

    const options = useMemo(() => {
        let result: SelectBoxOption[] = []
        for (let access in AccessEnum) {
            if (allowAccessTypes.includes(access as AccessEnum)) {
                result.push({ id: access, name: access })
            }
        }
        return result
    }, [allowAccessTypes])

    return (
        <div className="access-cell__wrapper">
            <div className="group-access">
                <SelectCustom
                    id={_ids[0]}
                    onChange={(e) => { onGroupAccessSelect(_ids[0], e.target.value) }}
                    value={accesses[0]}
                    options={options}
                    placeholder="Lựa chọn"
                />
            </div>
            {isOpen && accesses.map((access, index) => {
                if (index === 0) return null;
                return (
                    <div key={_ids[index]} className="access">
                        <SelectCustom
                            id={_ids[index]}
                            value={access}
                            options={options}
                            placeholder="Lựa chọn"
                            onChange={(e) => { onFeatureAccessSelect(_ids[0], _ids[index], e.target.value) }}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default AccessCell