import { Outlet } from "react-router-dom";
import "./styles.scss";

const AuthenticationLayout = () => {
    return (
        <>
            <div className="authentication__wrapper">
                <img src="https://happytime.vn/images/icons/happytime-fulltext.png" alt="" className="brand-img" />
                <h2 className="authentication__slogan">Nền tảng quản lý chấm công trực tuyến</h2>
                <div className="authentication__container">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default AuthenticationLayout;
