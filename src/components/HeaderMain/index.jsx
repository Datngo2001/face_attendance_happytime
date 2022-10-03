import "./styles.scss";
import logo from "../../assets/images/happytime-fulltext.png";
import ButtonCustom from "../ButtonCustom";
import MenuIcon from "@mui/icons-material/Menu";
import ButtonUser from "../ButtonUser";
import { Link } from "react-router-dom";
import { MenuBox, NotificationBox } from "./components";
import avatar from "../../assets/images/avatar.jpg"; //test avatar
import DropDown from "../DropDown/index,";
import { useState } from "react";
import { Divider } from "@mui/material";

const MenuBoxInner = () => {
    return (
        <>
            <div className="menu-box-inner__wrapper">
                <p className="title">Workspace của bạn</p>
                <h4 className="name-workspace">Coffee store</h4>
                <Divider />
            </div>
        </>
    );
};

const NotificationBoxInner = ({ listOfNotifications }) => {
    return (
        <>
            <div className="notification-box-inner__wrapper">
                <p className="title">Thông báo</p>
                {!listOfNotifications ? (
                    <p className="none">Bạn chưa có thông báo nào</p>
                ) : (
                    listOfNotifications.map((item) => {
                        return item;
                    })
                )}
            </div>
        </>
    );
};

const HeaderMain = ({ isActive }) => {
    const [isHideMenuBox, setIsHideMenuBox] = useState(false);
    const [isHideNotifyBox, setIsHideNotifyBox] = useState(false);
    const handleLogout = () => {};
    const handleToggleMenu = () => {};
    const handleToggleMenuBox = () => {
        setIsHideMenuBox(!isHideMenuBox);
    };
    const handleToggleNotifyBox = () => {
        setIsHideNotifyBox(!isHideNotifyBox);
    };
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
                                <ButtonUser type={1} name="Coffee Store" />
                                <MenuBox onClick={handleToggleMenuBox}>
                                    <DropDown state={isHideMenuBox}>
                                        <MenuBoxInner />
                                    </DropDown>
                                </MenuBox>
                                <NotificationBox onClick={handleToggleNotifyBox}>
                                    <DropDown state={isHideNotifyBox}>
                                        <NotificationBoxInner />
                                    </DropDown>
                                </NotificationBox>
                                <ButtonUser
                                    type={2}
                                    name="Lê Duy Tường"
                                    avatar={avatar}
                                />
                            </div>
                        </div>
                    </>
                )}
            </header>
        </>
    );
};

export default HeaderMain;
