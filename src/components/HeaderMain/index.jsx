import "./styles.scss";
import logo from "../../assets/images/happytime-fulltext.png";
import ButtonCustom from "../ButtonCustom";
import MenuIcon from "@mui/icons-material/Menu";
import ButtonUser from "../ButtonUser";
import { Link } from "react-router-dom";
import { MenuBox, NotificationBox } from "./components";

const HeaderMain = ({ isActive }) => {
    const handleLogout = () => {};
    const handleToggleMenu = () => {};
    return (
        <>
            <header className="header-main__wrapper">
                {!isActive ? (
                    <>
                        <img src={logo} alt="logo" className="header-main__logo-img" />
                        <ButtonCustom className="btn-logout" onClick={handleLogout}>
                            Đăng xuất
                        </ButtonCustom>
                    </>
                ) : (
                    <>
                        <div className="header-main__left">
                            <MenuIcon
                                onClick={handleToggleMenu}
                                className="btn-toggle-menu"
                            />
                            <Link to="../">
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="header-main__logo-img isActive"
                                />
                            </Link>
                        </div>
                        <div className="header-main__right">
                            <h2 className="title">Quản lý nhân sự</h2>
                            <div>
                                <ButtonUser type={1} />
                                <MenuBox />
                                <NotificationBox />
                                <ButtonUser type={2} />
                            </div>
                        </div>
                    </>
                )}
            </header>
        </>
    );
};

export default HeaderMain;
