import "./styles.scss";
import logo from "../../assets/images/happytime-fulltext.png";
import ButtonCustom from "../ButtonCustom";
import MenuIcon from "@mui/icons-material/Menu";
import ButtonUser from "../ButtonUser";
import { Link } from "react-router-dom";
import {
    ButtonUserInner,
    MenuBox,
    MenuBoxInner,
    NotificationBox,
    NotificationBoxInner,
} from "./components";
import avatar from "../../assets/images/avatar.jpg"; //test avatar
import DropDown from "../DropDown";
import { useState } from "react";

const HeaderMain = ({ isActive, state, setState }) => {
    // STATE
    const [isShowMenuBox, setIsShowMenuBox] = useState(false);
    const [isShowNotifyBox, setIsShowNotifyBox] = useState(false);
    const [isShowButtonUser, setIsShowButtonUser] = useState(false);
    // ****************************************************************

    // VARIABLES
    // *******************************

    // ARROW FUNCTION
    const handleLogout = () => {};
    const handleToggleSidebar = () => {
        setState(!state);
    };
    const handleToggleMenuBox = () => {
        setIsShowMenuBox(!isShowMenuBox);
    };
    const handleToggleNotifyBox = () => {
        setIsShowNotifyBox(!isShowNotifyBox);
    };
    const handleToggleButtonUser = () => {
        setIsShowButtonUser(!isShowButtonUser);
    };
    // ****************************************************************

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
                                onClick={handleToggleSidebar}
                                className="btn-toggle-menu"
                            />
                            <Link
                                style={{
                                    marginLeft: "24px",
                                }}
                                to="/app/employees/list/index"
                            >
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
                                    {isShowMenuBox && (
                                        <DropDown
                                            state={isShowMenuBox}
                                            setState={setIsShowMenuBox}
                                            height="212px"
                                            width="366px"
                                            top="74px"
                                            right="355px"
                                        >
                                            <MenuBoxInner />
                                        </DropDown>
                                    )}
                                </MenuBox>
                                <NotificationBox onClick={handleToggleNotifyBox}>
                                    {isShowNotifyBox && (
                                        <DropDown
                                            state={isShowNotifyBox}
                                            setState={setIsShowNotifyBox}
                                            width="366px"
                                            top="74px"
                                            right="290px"
                                        >
                                            <NotificationBoxInner />
                                        </DropDown>
                                    )}
                                </NotificationBox>
                                <ButtonUser
                                    type={2}
                                    name="Lê Duy Tường"
                                    avatar={avatar}
                                    onClick={handleToggleButtonUser}
                                >
                                    {isShowButtonUser && (
                                        <DropDown
                                            state={isShowButtonUser}
                                            setState={setIsShowButtonUser}
                                            height="auto"
                                            width="244px"
                                            top="74px"
                                            right="30px"
                                        >
                                            <ButtonUserInner />
                                        </DropDown>
                                    )}
                                </ButtonUser>
                            </div>
                        </div>
                    </>
                )}
            </header>
        </>
    );
};

export default HeaderMain;
