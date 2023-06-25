import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import "./styles.scss";

export const NavigatorItem = ({ linkTo, icon, title, state, url, pathActive }) => {
    // VARIABLES
    // ******************************

    return (
        <>
            {state ? (
                <Tooltip
                    className="toolTipNavigatorItem"
                    title={title}
                    placement="right"
                    arrow
                    disableHoverListener
                >
                    <Link
                        to={linkTo}
                        className={`navigator-item__wrapper ${
                            url.includes(pathActive) ? "active" : ""
                        }`}
                    >
                        {icon} <span className="title">{title}</span>
                    </Link>
                </Tooltip>
            ) : (
                <Tooltip
                    className="toolTipNavigatorItem"
                    title={title}
                    placement="right"
                    arrow
                >
                    <Link
                        to={linkTo}
                        className={`navigator-item__wrapper ${
                            url.includes(linkTo) ? "active" : ""
                        }`}
                    >
                        {icon} <span className="title">{title}</span>
                    </Link>
                </Tooltip>
            )}
        </>
    );
};

export const LogoutModalContent = () => {
    return (
        <>
            <div className="logout-modal-content__wrapper">
                <p className="title">Bạn có chắc chắn muốn đăng xuất khỏi hệ thống?</p>
            </div>
        </>
    );
};
