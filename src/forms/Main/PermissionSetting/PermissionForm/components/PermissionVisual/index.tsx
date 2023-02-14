import React, { useContext, useMemo } from 'react'
import { PermissionFormContext } from '../../context'
import { Chip, Stack } from '@mui/material'
import { AccessEnum } from 'store/slices/Main/Permission/permissionSlice'

const PermissionVisual: React.FC = () => {
    const { tableRows } = useContext(PermissionFormContext)

    const workspaceFeatures = useMemo(() => getFeatures(AccessEnum.WORKSPACE), [tableRows])
    const dapartmentFeatures = useMemo(() => getFeatures(AccessEnum.DEPARTMENT), [tableRows])
    const userFeatures = useMemo(() => getFeatures(AccessEnum.USER), [tableRows])

    function getFeatures(access: string): string[] {
        let result = []

        tableRows.forEach(row => {
            row.accesses.forEach((acc, index) => {
                if (acc === access && index !== 0) {
                    result.push(row.features[index])
                }
            });
        })

        return result;
    }

    return (
        <div className='PermissionVisual__wrapper'>
            <Stack spacing={2}>
                <div className='card'>
                    <p className='title'>WORKSPACE - Truy cập dữ liệu toàn Workspace</p>
                    <p className='info'>Nhân viên được <strong>Phân quyền</strong> Workspace có thể xem và thay đổi thông tin của toàn bộ nhân viên trong Workspace (tùy vào phạm vi quyền được phân).</p>
                    <div className='feature__container'>
                        {workspaceFeatures.map(feature => (
                            <div key={feature} className='feature__badge'>
                                <Chip label={feature} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='card'>
                    <p className='title'>DEPARTMENT - Truy cập dữ liệu của mình và cấp dưới</p>
                    <p className='info'>Nhân viên được <strong>Phân quyền</strong> Department có thể xem và thay đổi thông tin của bản thân và các nhân viên họ quản lý (tùy vào phạm vi quyền được phân).</p>
                    <div className='feature__container'>
                        {dapartmentFeatures.map(feature => (
                            <div key={feature} className='feature__badge'>
                                <Chip label={feature} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='card'>
                    <p className='title'>USER - Chỉ truy cập dữ liệu của mình</p>
                    <p className='info'>Nhân viên được <strong>Phân quyền</strong> User chỉ có thể xem và thay đổi thông tin chính mình (tùy vào phạm vi quyền được phân).</p>
                    <div className='feature__container'>
                        {userFeatures.map(feature => (
                            <div key={feature} className='feature__badge'>
                                <Chip label={feature} />
                            </div>
                        ))}
                    </div>
                </div>
            </Stack>
        </div>
    )
}


export default PermissionVisual