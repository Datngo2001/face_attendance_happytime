import React, { useMemo } from 'react'
import { AccessEnum, FeatureGroup } from 'store/slices/Main/Permission/permissionSlice'
import { columns } from "./components"
import DataGridCustom from 'components/DataGridCustom'

export type Props = {
    featureGroups: FeatureGroup[]
}

type TableRow = {
    no: number;
    _ids: string[]
    features: string[];
    accesses: AccessEnum[];
}

const FeatureAccessTable: React.FC<Props> = ({ featureGroups }) => {

    const tableRows = useMemo(() => toTableRows(featureGroups), [featureGroups])

    return (
        <>
            <label>Cấp quyền truy cập</label>
            <DataGridCustom
                columns={columns}
                rows={tableRows}
                getRowId={(row) => row.no}
            />
        </>
    )
}

function toTableRows(featureGroups: FeatureGroup[]): TableRow[] {
    let result: TableRow[] = [];

    featureGroups.forEach((featureGroup, index) => {
        result.push({ no: index + 1, _ids: [], features: [], accesses: [] })
        featureGroup.featureAccess.forEach(featureAccess => {
            result[index]._ids.push(featureAccess._id)
            result[index].features.push(featureAccess.feature)
            result[index].accesses.push(featureAccess.access)
        })
    })

    return result;
}

// function toFeatureGroup(tableRows) {

// }

export default React.memo(FeatureAccessTable)