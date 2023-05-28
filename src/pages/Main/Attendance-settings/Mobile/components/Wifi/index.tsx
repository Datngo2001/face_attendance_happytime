import { useForm } from "react-hook-form";
import { ControlPanel, Table } from "./Components";
import "./styles.scss";
import { WifiSearchParams } from "store/slices/Main/Attendance-settings/attendanceSettingsSlice";
import { useAppDispatch } from "hooks/useAppDispatch";
import useThrottle from "hooks/useThrottle";
import { extraReducersGetListIPWifi } from "store/slices/Main/Attendance-settings/actions/extraReducers";
import { useEffect } from "react";

const defaultParams = {
    page: 0,
    size: parseInt(process.env.REACT_APP_PAGE_SIZE),
} as WifiSearchParams

const Wifi: React.FC = () => {
    const { control, getValues, watch } = useForm({
        defaultValues: defaultParams
    });

    const dispatch = useAppDispatch();
    const searchParams = watch();

    const handleSearch = useThrottle(() => {
        dispatch(extraReducersGetListIPWifi(getValues()))
    }, 500)

    useEffect(() => {
        handleSearch();
    }, [searchParams])

    return (
        <>
            <div className="attendance-settings--mobile-wifi__wrapper">
                <ControlPanel control={control} handleSearch={handleSearch} />
                <Table control={control} handleSearch={handleSearch} />
            </div>
        </>
    );
};

export default Wifi;
