import { Outlet } from "react-router-dom";
import "./styles.scss";

const EmployeesLayout = () => {
    // STATE
    // ******************************

    return (
        <>
            <div className="employees-layout__wrapper">
                employees-layout
                <Outlet/>
            </div>
        </>
    );
};

export default EmployeesLayout;
