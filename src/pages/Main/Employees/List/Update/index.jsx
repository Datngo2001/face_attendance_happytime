import { Link } from "react-router-dom";
import { UpdateEmployeesForm } from "../../../../../forms/Main/Employees";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import "./styles.scss";
import LoadingCustom from "../../../../../components/LoadingCustom";
import { useEffect, useState } from "react";

const Update = () => {
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
            <div className="update__wrapper">
                <Link className="content-navigator" to="../list/view">
                    <ArrowBackRoundedIcon />
                    Quay lại
                </Link>
                <h3 className="content-title">Chỉnh sửa thông tin nhân viên</h3>
                {loading ? <LoadingCustom /> : <UpdateEmployeesForm />}
            </div>
        </>
    );
};

export default Update;
