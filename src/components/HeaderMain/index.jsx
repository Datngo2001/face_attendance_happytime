import "./styles.scss";
import logo from "../../assets/images/happytime-fulltext.png";
import ButtonCustom from "../ButtonCustom";

const HeaderMain = ({ isActive }) => {
    const handleLogout = () => {};
    return (
        <>
            <header className="header__wrapper">
                <img src={logo} alt="logo" className="header__logo-img" />
                <ButtonCustom className="btn-logout" onClick={handleLogout}>
                    Đăng xuất
                </ButtonCustom>
            </header>
        </>
    );
};

export default HeaderMain;
