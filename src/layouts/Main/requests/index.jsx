import { Outlet } from "react-router-dom";
import { tabTitle } from "../../../utils";
import "./styles.scss";

const RequestsLayout = () => {
    // GLOBAL FUNCTION
    tabTitle("Đơn từ")
    // ******************************
    // STATE
    // ******************************

    return (
        <>
            <div className="requests-layout__wrapper">
                requests-layout
                <Outlet />
            </div>
        </>
    );
};

export default RequestsLayout;
