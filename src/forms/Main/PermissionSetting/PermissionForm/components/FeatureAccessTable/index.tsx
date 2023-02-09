import React, { useMemo } from 'react'
import { AccessEnum, FeatureGroup } from 'store/slices/Main/Permission/permissionSlice'
import { columns } from "./components"
import DataGridCustom from 'components/DataGridCustom'

export type Props = {
    featureGroups: FeatureGroup[]
}

type TableRow = {
    no: number;
    features: string[];
    accesses: AccessEnum[];
}

const FeatureAccessTable: React.FC<Props> = ({ featureGroups }) => {

    const tableRows = useMemo(() => toTableRows(featureGroups), [featureGroups])

    return (
        <>
            <label>Cấp quyền truy cập</label>
            <DataGridCustom columns={columns} rows={[]} />
        </>
    )
}

function toTableRows(featureGroups): TableRow[] {
    let result: TableRow[] = [];



    return result;
}

function toFeatureGroup(tableRows) {

}

export default React.memo(FeatureAccessTable)