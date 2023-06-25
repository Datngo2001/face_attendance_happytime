import { DeviceSearchParams } from "store/slices/Main/Attendance-settings/attendanceSettingsSlice";
import ControlPanel from "./components/ControlPanel";
import Table from "./components/Table";
import "./styles.scss";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "hooks/useAppDispatch";
import useThrottle from "hooks/useThrottle";
import { useEffect } from "react";
import { extraReducersGetListDeviceID } from "store/slices/Main/Attendance-settings/actions/extraReducers";

const defaultParams = {
    page: 0,
    size: parseInt(process.env.REACT_APP_PAGE_SIZE),
    status: undefined
} as DeviceSearchParams

const Devices: React.FC = () => {
    const { control, getValues, watch } = useForm({
        defaultValues: defaultParams
    });

    const dispatch = useAppDispatch();
    const searchParams = watch();

    const handleSearch = useThrottle(() => {
        dispatch(extraReducersGetListDeviceID(getValues()))
    }, 500)

    useEffect(() => {
        handleSearch();
    }, [searchParams])


    return (
        <>
            <div className="attendance-settings--mobile-devices__wrapper">
                <ControlPanel control={control} handleSearch={handleSearch} />
                <Table control={control} handleSearch={handleSearch} />
            </div>
        </>
    );
};

export default Devices;
