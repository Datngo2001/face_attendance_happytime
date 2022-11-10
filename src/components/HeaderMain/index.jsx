import "./styles.scss";
import logo from "../../assets/images/happytime-fulltext.png";
import ButtonCustom from "../ButtonCustom";
import MenuIcon from "@mui/icons-material/Menu";
import ButtonUser from "../ButtonUser";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/avatar.jpg"; //test avatar
import {
    ButtonUserInner,
    MenuBox,
    MenuBoxInner,
    NotificationBox,
    NotificationBoxInner,
} from "./components";
import DropMenu from "../DropMenu";

const HeaderMain = ({ isActive, state, setState }) => {
    // STATE
    // ****************************************************************

    // VARIABLES
    // *******************************

    // ARROW FUNCTION
    const handleLogout = () => {};
    const handleToggleSidebar = () => {
        setState(!state);
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
                            <h2 id="titleHeaderMain" className="title">
                                Chưa có tiêu đề
                            </h2>
                            <div>
                                <ButtonUser type={1} name="Coffee Store" />
                                <DropMenu parent={<MenuBox />} mt="12px" ml="-4px">
                                    <MenuBoxInner />
                                </DropMenu>
                                <DropMenu
                                    parent={<NotificationBox />}
                                    mt="12px"
                                    ml="-4px"
                                >
                                    <NotificationBoxInner />
                                </DropMenu>
                                <DropMenu
                                    parent={
                                        <ButtonUser
                                            type={2}
                                            name="Lê Duy Tường"
                                            avatar={avatar}
                                        />
                                    }
                                    mt="12px"
                                    ml="-2px"
                                >
                                    <ButtonUserInner />
                                </DropMenu>
                            </div>
                        </div>
                    </>
                )}
            </header>
        </>
    );
};

export default HeaderMain;
