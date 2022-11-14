import { LogoutModalContent, NavigatorItem } from "./components";
import { listNavigatorOptions } from "./data";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import "./styles.scss";
import ModalCustom from "../ModalCustom";
import { useLocation } from "react-router-dom";

const Sidebar = ({ state }) => {
    // VARIABLES
    const location = useLocation();
    // ******************************

    // STATE
    // ********************************

    // ARROW FUNCTION
    const handleLogout = () => {
        console.log("logout");
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
                        <p className="title">Mã định danh workspace</p>
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
                callback={handleLogout}
            >
                <LogoutModalContent />
            </ModalCustom>
        </>
    );
};

export default Sidebar;
