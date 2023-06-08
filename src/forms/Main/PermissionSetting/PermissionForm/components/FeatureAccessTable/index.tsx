import React, { useContext, useEffect, useState } from 'react'
import { AccessEnum, FeatureGroup } from 'store/slices/Main/Permission/permissionSlice'
import { getColumns } from "./components"
import DataGridCustom from 'components/DataGridCustom'
import { GridRowHeightParams } from '@mui/x-data-grid'
import { PermissionFormContext } from '../../context'

type Props = {
    featureGroups: FeatureGroup[]
    control: any
}

export type TableRow = {
    isOpen: boolean;
    no: number;
    _ids: string[]
    features: string[];
    accesses: AccessEnum[];
    allowAccessTypes: AccessEnum[];
}

const FeatureAccessTable: React.FC<Props> = ({ featureGroups, control }) => {

    const { tableRows, setTableRows } = useContext(PermissionFormContext)

    useEffect(() => {
        setTableRows(() => toTableRows(featureGroups))
    }, [])

    const handleOpenCloseFeature = (no) => {
        return () => {
            const newTableRows = [...tableRows]
            const row = newTableRows.find(row => row.no === no)
            row.isOpen = !row.isOpen
            setTableRows(() => newTableRows)
        }
    }

    const onGroupAccessSelect = (id, value) => {
        const newTableRows = [...tableRows]
        const row = newTableRows.find(row => row._ids[0] === id)
        row.accesses = row.accesses.map(access => value)
        setTableRows(() => newTableRows)
    }

    const onFeatureAccessSelect = (groupId, id, value) => {
        const newTableRows = [...tableRows]
        const row = newTableRows.find(row => row._ids[0] === groupId)
        const index = row._ids.findIndex(_id => _id === id && _id !== groupId)
        row.accesses[index] = value
        row.accesses[0] = null
        setTableRows(() => newTableRows)
    }

    return (
        <>
            <label>Cấp quyền truy cập</label>
            <DataGridCustom
                columns={getColumns(handleOpenCloseFeature, onGroupAccessSelect, onFeatureAccessSelect, control)}
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
        result.push({
            no: index + 1,
            _ids: [featureGroup._id],
            features: [featureGroup.name],
            accesses: [null],
            allowAccessTypes: featureGroup.allowAccessTypes,
            isOpen: false
        })
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