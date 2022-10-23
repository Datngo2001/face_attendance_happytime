import { Outlet } from "react-router-dom";
import ButtonMenu from "../../../components/ButtonMenu";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import "./styles.scss";
import { tabTitle } from "../../../utils";

const EmployeesLayout = () => {
    // GLOBAL FUNCTION
    tabTitle("Quản lý nhân sự")
    // ******************************

    // STATE
    // ******************************

    return (
        <>
            <div className="employees-layout__wrapper">
                <div className="employees-layout__list-btn-menu">
                    <ButtonMenu
                        path="list/index"
                        title="Danh sách nhân viên"
                        icon={<ArticleOutlinedIcon />}
                    />
                    <ButtonMenu
                        path="leave-management"
                        title="Quản lý phép"
                        icon={<AssignmentOutlinedIcon />}
                    />
                </div>
                <div className="employees-layout__content">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default EmployeesLayout;
