import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.scss";
import "../index.scss";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import {
    BankInformation,
    Header,
    Note,
    Permission,
    Profile,
    WorkInformation,
} from "./components";
import { useEffect } from "react";
import LoadingCustom from "../../../../../components/LoadingCustom";
import { extraReducersGetInfoEmployeeById } from "../../../../../store/slices/Main/Employees/actions/extraReducers";

const View = () => {
    // HOOK REACT TOOLKIT
    const { loading, infoOfEmployee } = useSelector((state) => state.employees);
    const dispatch = useDispatch();
    // *****************************

    // VARIABLES
    // ******************************

    // HOOK EFFECT
    useEffect(() => {
        dispatch(
            extraReducersGetInfoEmployeeById({
                id: sessionStorage.getItem("idSelectedEmployee"),
            })
        );

        // Clean function
    }, []);
    // *****************************

    // ARROW FUNCTIONS
    // *****************************

    console.log("infoOfEmployee", infoOfEmployee);

    return (
        <>
            <div className="view__wrapper">
                <Link className="content-navigator" to="../list/index">
                    <ArrowBackRoundedIcon />
                    Quay lại
                </Link>
                <h3 className="content-title">Chi tiết nhân viên</h3>
                {loading ? (
                    <LoadingCustom />
                ) : (
                    <>
                        <Header
                            avatar={infoOfEmployee.avatar}
                            name={infoOfEmployee.name}
                            id={infoOfEmployee._id}
                        />
                        <WorkInformation
                            jobPosition={infoOfEmployee.agent_position}
                            department={infoOfEmployee.agent_position}
                            statusEmployee={infoOfEmployee.agent_status}
                            statusUsingHappyTime={infoOfEmployee.is_used_happy_time}
                        />
                        <Profile
                            phoneNumber={infoOfEmployee.phone_number}
                            email={infoOfEmployee.personal_mail}
                            emailCompany={infoOfEmployee.company_mail}
                        />
                        <BankInformation />
                        <Permission role={infoOfEmployee.role}/>
                        <Note />
                    </>
                )}
            </div>
        </>
    );
};

export default View;
