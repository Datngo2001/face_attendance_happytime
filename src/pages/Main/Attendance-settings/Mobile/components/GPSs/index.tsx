import React, { useEffect } from 'react'
import ControlPanel from './Components/ControlPanel'
import Table from './Components/Table'
import { GPSSearchParams } from 'store/slices/Main/Attendance-settings/attendanceSettingsSlice'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from 'hooks/useAppDispatch'
import useThrottle from 'hooks/useThrottle'
import { extraReducersGetListGPSConfig } from 'store/slices/Main/Attendance-settings/actions/extraReducers'

const defaultParams = {
    page: 0,
    size: parseInt(process.env.REACT_APP_PAGE_SIZE),
} as GPSSearchParams

const GPSs: React.FC = () => {
    const { control, getValues, watch } = useForm({
        defaultValues: defaultParams
    });

    const dispatch = useAppDispatch();
    const searchParams = watch();

    const handleSearch = useThrottle(() => {
        dispatch(extraReducersGetListGPSConfig(getValues()))
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

export default GPSs