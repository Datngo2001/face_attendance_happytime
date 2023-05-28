import "./styles.scss";
import { IndexControlPanel } from "./Components/IndexControlPanel";
import { EmployeeSearchParams } from "store/slices/Main/Employees/employeesSlice";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "hooks/useAppDispatch";
import useThrottle from "hooks/useThrottle";
import { useEffect } from "react";
import { extraReducersGetListEmployees } from "store/slices/Main/Employees/actions/extraReducers";
import { TableDataEmployees } from "./Components/TableDataEmployees";
import { extraReducersGetDepartments } from "store/slices/Main/Departments/actions/extraReducers";

const defaultParams = {
    agent_status: null,
    name: null,
    phone_number: null,
    role: 0,
    agent_position: null,
    is_used_happy_time: true,
    personal_mail: null,
    company_mail: null,
    agent_code: null,
    start_working_date: null,
    stop_working_date: null,
    official_working_date: null,
    page: 0,
    size: parseInt(process.env.REACT_APP_PAGE_SIZE),
} as EmployeeSearchParams

const Index = () => {
    const { control, setValue, getValues, watch } = useForm({
        defaultValues: defaultParams
    });

    const dispatch = useAppDispatch();
    const searchParams = watch();

    const handleSearch = useThrottle(() => {
        dispatch(extraReducersGetListEmployees(getValues()))
    }, 500)

    useEffect(() => {
        handleSearch();
    }, [searchParams])

    useEffect(() => {
        dispatch(extraReducersGetDepartments())
    }, [])

    return (
        <>
            <div className="index__wrapper">
                <IndexControlPanel control={control} setValue={setValue} />
                <div className="index__table">
                    <TableDataEmployees control={control} />
                </div>
            </div>
        </>
    );
};

export default Index;
