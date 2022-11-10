import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { tabTitle, titleHeaderMain } from "../../../utils";
import "./styles.scss";

const RequestsLayout = () => {
    // GLOBAL FUNCTION
    tabTitle("Đơn từ");
    // ******************************
    // STATE
    // ******************************
    // HOOK EFFECT
    useEffect(() => {
        titleHeaderMain("Đơn từ");
    }, []);
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
