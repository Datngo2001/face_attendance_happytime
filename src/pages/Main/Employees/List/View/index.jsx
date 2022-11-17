import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.scss";
import "../index.scss";
import { detailInfor } from "./dataTest";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import {
    BankInformation,
    Header,
    Note,
    Permission,
    Profile,
    WorkInformation,
} from "./components";
import { useEffect, useState } from "react";
import LoadingCustom from "../../../../../components/LoadingCustom";

const View = () => {
    // STATE
    const { idOfSelectedStaff } = useSelector((state) => state.employees);
    const [loading, setLoading] = useState(true);
    // *****************************

    // VARIABLES
    const {
        id,
        avatar,
        name,
        jobPosition,
        typeEmployee,
        department,
        statusEmployee,
        phoneNumber,
        email,
        emailCompany,
    } = detailInfor;
    // ******************************

    // HOOK EFFECT
    useEffect(() => {
        // FAKE LOADING API
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        // ****************************
    }, []);
    // *****************************

    // ARROW FUNCTIONS
    // *****************************

    console.log("id row:", idOfSelectedStaff);

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
                        <Header avatar={avatar} name={name} id={id} />
                        <WorkInformation
                            jobPosition={jobPosition}
                            department={department}
                            statusEmployee={statusEmployee}
                        />
                        <Profile
                            phoneNumber={phoneNumber}
                            email={email}
                            emailCompany={emailCompany}
                        />
                        <BankInformation />
                        <Permission />
                        <Note />
                    </>
                )}
            </div>
        </>
    );
};

export default View;
