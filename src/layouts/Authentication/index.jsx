import "./styles.scss";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Logo from "../../assets/images/happytime-fulltext.png";

const AuthenticationLayout = () => {
    return (
        <>
            <div className="authentication__wrapper">
                <img src={Logo} alt="" className="brand-img" />
                <h2 className="authentication__slogan">Nền tảng quản lý chấm công trực tuyến</h2>
                <div className="authentication__container">
                    <Outlet />
                </div>
                <div className="authentication__banner"></div>
            </div>
            <Footer type="2" />
        </>
    );
};

export default AuthenticationLayout;
