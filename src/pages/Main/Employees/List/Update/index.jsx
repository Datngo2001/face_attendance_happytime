import { Link } from "react-router-dom";
import { EmployeesForm } from "../../../../../forms/Main/Employees";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import "./styles.scss";

const Update = () => {
    // STATE
    // ******************************

    // HOOK EFFECT
    // *****************************

    return (
        <>
            <div className="update__wrapper">
                <Link className="content-navigator" to="../list/view">
                    <ArrowBackRoundedIcon />
                    Quay lại
                </Link>
                <h3 className="content-title">Chỉnh sửa thông tin nhân viên</h3>
                <EmployeesForm method={"update"} />
            </div>
        </>
    );
};

export default Update;
