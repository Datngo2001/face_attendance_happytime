import { LogoutModalContent, NavigatorItem } from "./components";
import { listNavigatorOptions } from "./data";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import "./styles.scss";
import ModalCustom from "../ModalCustom";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "hooks/useAppSelector";
import { Tooltip } from "@mui/material";

const SidebarCustom = ({ state }) => {
    // VARIABLES
    const location = useLocation();
    // ******************************

    // STATE
    const { infoOfCompany } = useAppSelector(state => state.company)
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
                        <div onClick={() => navigator.clipboard.writeText(infoOfCompany._id)}>
                            <p className="code">{infoOfCompany._id}</p>
                            <Tooltip title="Copy to clipboard   "><ContentCopyRoundedIcon /></Tooltip>
                        </div>
                    </div>
                </div>
            </div>
            {/* MODAL */}
            <ModalCustom
                idTarget="btnLogout"
                titleHeader="Đăng xuất"
                callback={handleLogOut}
                state={false} setState={undefined}>
                <LogoutModalContent />
            </ModalCustom>
        </>
    );
};

export default SidebarCustom;
