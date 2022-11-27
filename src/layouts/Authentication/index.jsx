import "./styles.scss";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Logo from "../../assets/images/happytime-fulltext.png";
import { useEffect } from "react";
import * as auth from "../../auth/index";

const AuthenticationLayout = () => {
    // HOOK ROUTER DOM
    // ****************************

    // HOOK ROUTER DOM
    const navigate = useNavigate();
    // ****************************

    // HOOK EFFECT
    useEffect(() => {
        if (auth.authAccount()) {
            navigate("../app/employees/list/index");
        }
    }, []);
    // ****************************
    return (
        <>
            <div className="authentication-layout__wrapper">
                <img src={Logo} alt="" className="brand-img" />
                <h2 className="authentication-layout__slogan">
                    Nền tảng quản lý chấm công trực tuyến
                </h2>
                <div className="authentication-layout__container">
                    <Outlet />
                </div>
                <div className="authentication-layout__banner"></div>
            </div>
            <Footer type="2" />
        </>
    );
};

export default AuthenticationLayout;
