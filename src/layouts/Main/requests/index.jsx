import { Outlet } from "react-router-dom";
import "./styles.scss";

const RequestsLayout = () => {
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
