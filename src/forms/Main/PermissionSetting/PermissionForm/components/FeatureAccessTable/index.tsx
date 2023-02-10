import React, { useState } from 'react'
import { AccessEnum, FeatureGroup } from 'store/slices/Main/Permission/permissionSlice'
import { getColumns } from "./components"
import DataGridCustom from 'components/DataGridCustom'
import { GridRowHeightParams } from '@mui/x-data-grid'

export type Props = {
    featureGroups: FeatureGroup[]
}

type TableRow = {
    isOpen: boolean;
    no: number;
    _ids: string[]
    features: string[];
    accesses: AccessEnum[];
}

const FeatureAccessTable: React.FC<Props> = ({ featureGroups }) => {

    const [tableRows, setTableRows] = useState(() => toTableRows(featureGroups))

    const handleOpenCloseFeature = (no) => {
        return () => {
            let row = tableRows.find(row => row.no === no)
            row.isOpen = !row.isOpen
            setTableRows([...tableRows])
        }
    }

    return (
        <>
            <label>Cấp quyền truy cập</label>
            <DataGridCustom
                columns={getColumns(handleOpenCloseFeature)}
                rows={tableRows}
                isRowSelectable={() => false}
                getRowId={(row) => row.no}
                getRowHeight={({ id }: GridRowHeightParams) => {
                    const rowHeight = 50;
                    let row = tableRows.find(row => row.no === id)
                    if (row.isOpen) {
                        return rowHeight * row.features.length
                    }
                    return rowHeight;
                }}
            />
        </>
    )
}

function toTableRows(featureGroups: FeatureGroup[]): TableRow[] {
    let result: TableRow[] = [];

    featureGroups.forEach((featureGroup, index) => {
        result.push({ no: index + 1, _ids: [featureGroup._id], features: [featureGroup.name], accesses: [AccessEnum.UNSET], isOpen: false })
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