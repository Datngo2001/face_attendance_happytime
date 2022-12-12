import "./styles.scss";
import logo from "../../assets/images/happytime-fulltext.png";
import ButtonCustom from "../ButtonCustom";
import MenuIcon from "@mui/icons-material/Menu";
import ButtonUser from "../ButtonUser";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../../assets/images/avatar.jpg"; //test avatar
import {
    ButtonUserInner,
    MenuBox,
    MenuBoxInner,
    NotificationBox,
    NotificationBoxInner,
} from "./components";
import DropMenu from "../DropMenu";
import ModalCustom from "../ModalCustom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { extraReducersGetInfoCompany } from "../../store/slices/Main/Company/actions/extraReducers";
import { extraReducersGetInfoUser } from "../../store/slices/Global/actions/extraReducers";

const HeaderMain = ({ isActive, state, setState }) => {
    // STATE
    const [open, setOpen] = useState(false);
    // ****************************************************************

    // VARIABLES
    // *******************************

    // HOOK ROUTER DOM
    const navigate = useNavigate();
    // ****************************

    // REDUX TOOLKIT
    const { infoOfCompany } = useSelector((state) => state.company);
    const { userInfor } = useSelector((state) => state.global);
    const dispatch = useDispatch();
    // ****************************

    // HOOK EFFECT
    useEffect(() => {
        dispatch(extraReducersGetInfoCompany());
        dispatch(extraReducersGetInfoUser());
    }, []);
    // ****************************

    // ARROW FUNCTION
    const handleLogOut = () => {
        sessionStorage.clear();
        navigate("/");
    };
    // ****************************
    const handleToggleSidebar = () => {
        setState(!state);
    };
    // ****************************************************************
    console.log("userInfor", userInfor);
    return (
        <>
            <header className="header-main__wrapper">
                {!isActive ? (
                    <>
                        <img src={logo} alt="logo" className="header-main__logo-img" />
                        <ButtonCustom className="btn-logout" onClick={handleLogOut}>
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
                                <ButtonUser
                                    type={1}
                                    name={infoOfCompany.company_name}
                                    avatar={infoOfCompany.avatar}
                                />
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
                                            name={userInfor.name}
                                            avatar={userInfor.avatar}
                                            role={userInfor.role}
                                        />
                                    }
                                    mt="12px"
                                    ml="-2px"
                                >
                                    <ButtonUserInner setOpen={setOpen} />
                                </DropMenu>
                                <ModalCustom
                                    idTarget="btnLogout_inHeader"
                                    titleHeader="Đăng xuất"
                                    titleBtnAccept="Đồng ý"
                                    state={open}
                                    setState={setOpen}
                                    callback={handleLogOut}
                                >
                                    Bạn có chắc chắn muốn đăng xuất khỏi hệ thống?
                                </ModalCustom>
                            </div>
                        </div>
                    </>
                )}
            </header>
        </>
    );
};

export default HeaderMain;
