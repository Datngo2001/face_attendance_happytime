import { ConfirmLogout, NavigatorItem } from "./components";
import { listNavigatorOptions } from "./data";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import "./styles.scss";
import ModalCustom from "../ModalCustom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Sidebar = ({ state }) => {
    // VARIABLES
    const location = useLocation();
    // ******************************

    // STATE
    const [openModal, setOpenModal] = useState(false);
    // ********************************

    // ARROW FUNCTION
    const handleShowModal = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        setOpenModal(false);
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
                    <span className="btn-logout" onClick={handleShowModal}>
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
            {/* HANDLE MODAL */}
            <ModalCustom
                title="Đăng xuất"
                open={openModal}
                setOpen={setOpenModal}
                handleClose={handleCloseModal}
            >
                <ConfirmLogout setOpen={setOpenModal} handleClose={handleCloseModal} />
            </ModalCustom>
        </>
    );
};

export default Sidebar;
