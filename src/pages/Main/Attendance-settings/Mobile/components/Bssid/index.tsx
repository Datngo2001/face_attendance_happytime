import React, { useEffect } from 'react'
import ControlPanel from './Components/ControlPanel'
import Table from './Components/Table'
import { BssidSearchParams } from 'store/slices/Main/Attendance-settings/attendanceSettingsSlice'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from 'hooks/useAppDispatch'
import useThrottle from 'hooks/useThrottle'
import { extraReducersGetListBssid } from 'store/slices/Main/Attendance-settings/actions/extraReducers'

const defaultParams = {
    page: 0,
    size: parseInt(process.env.REACT_APP_PAGE_SIZE),
} as BssidSearchParams

const Bssid: React.FC = () => {
    const { control, getValues, watch } = useForm({
        defaultValues: defaultParams
    });

    const dispatch = useAppDispatch();
    const searchParams = watch();

    const handleSearch = useThrottle(() => {
        dispatch(extraReducersGetListBssid(getValues()))
    }, 500)

    useEffect(() => {
        handleSearch();
    }, [searchParams])

    return (
        <>
            <div className="attendance-settings--mobile-gps__wrapper">
                <ControlPanel control={control} handleSearch={handleSearch} />
                <Table control={control} handleSearch={handleSearch} />
            </div>
        </>
    )
}

export default Bssid