import EmployeesForm from "../../../../../forms/Main/Employees/Index/EmployeesForm";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import "./styles.scss";
import { Link } from "react-router-dom";
import LoadingCustom from "../../../../../components/LoadingCustom";
import { useEffect, useState } from "react";

const Create = () => {
    // STATE
    const [loading, setLoading] = useState(true);
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

    return (
        <>
            <div className="create__wrapper">
                <Link className="content-navigator" to="../list/index">
                    <ArrowBackRoundedIcon />
                    Quay lại
                </Link>
                <div className="content-title">Thêm mới nhân viên</div>
                {loading ? <LoadingCustom /> : <EmployeesForm />}
            </div>
        </>
    );
};

export default Create;
