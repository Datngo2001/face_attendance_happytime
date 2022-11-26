import { LogoutModalContent, NavigatorItem } from "./components";
import { listNavigatorOptions } from "./data";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import "./styles.scss";
import ModalCustom from "../ModalCustom";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ state }) => {
    // VARIABLES
    const location = useLocation();
    // ******************************

    // STATE
    // ********************************

    // HOOK ROUTER DOM
    const navigate = useNavigate();
    // ****************************

    // ARROW FUNCTION
    const handleLogOut = () => {
        sessionStorage.clear();
        navigate("/");
    };
    // ********************************
    return (
        <>
            <div id="sidebarMain" className={state ? "show" : ""}>
                <div>
                    {listNavigatorOptions.map((navigatorItem, index) => {
                        return (
                            <NavigatorItem
                                key={index}
                                linkTo={navigatorItem.linkTo}
                                title={navigatorItem.title}
                                icon={navigatorItem.icon}
                                state={state}
                                pathActive={navigatorItem.pathActive}
                                url={location.pathname}
                            />
                        );
                    })}
                </div>
                <div className="sidebar-main__actions">
                    <span id="btnLogout" className="btn-logout">
                        <LogoutRoundedIcon /> <span className="title">Đăng xuất</span>
                    </span>
                    <div className="identifier-code">
                        <p className="title">Mã định danh doanh nghiệp</p>
                        <div>
                            <p className="code">16609880218015</p>
                            <ContentCopyRoundedIcon />
                        </div>
                    </div>
                </div>
            </div>
            {/* MODAL */}
            <ModalCustom
                idTarget="btnLogout"
                titleHeader="Đăng xuất"
                callback={handleLogOut}
            >
                <LogoutModalContent />
            </ModalCustom>
        </>
    );
};

export default Sidebar;
