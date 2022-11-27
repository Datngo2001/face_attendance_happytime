import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import * as auth from "../../auth/index";
import HeaderHome from "../../components/HeaderHome";
import { tabTitle } from "../../utils";
import "./styles.scss";

const HomeLayout = () => {
    tabTitle("Nền tảng chấm công online hàng đầu HappyTime");

    // HOOK ROUTER DOM
    const navigate = useNavigate();
    // ****************************

    // HOOK EFFECT
    useEffect(() => {
        if (auth.authAccount()) {
            navigate("app/employees/list/index");
        }
    }, []);
    // ****************************
    return (
        <>
            <HeaderHome />
            <Outlet />
        </>
    );
};

export default HomeLayout;
