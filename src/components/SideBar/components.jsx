import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
import ButtonCustom from "../ButtonCustom";
import "./styles.scss";

export const NavigatorItem = ({ linkTo, icon, title, state }) => {
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
                    <Link to={linkTo} className="navigator-item__wrapper">
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
                    <Link to={linkTo} className="navigator-item__wrapper">
                        {icon} <span className="title">{title}</span>
                    </Link>
                </Tooltip>
            )}
        </>
    );
};

export const ConfirmLogout = ({ handleClose, handleLogout }) => {
    return (
        <>
            <div className="confirm-logout__wrapper">
                <p className="title">Bạn có chắc chắn muốn đăng xuất khỏi hệ thống?</p>
                <div className="actions">
                    <ButtonCustom
                        className="btn-cancel"
                        onClick={handleClose}
                        width="auto"
                        height="32px"
                    >
                        HỦY BỎ
                    </ButtonCustom>
                    <ButtonCustom
                        className="btn-confirm"
                        onClick={handleLogout}
                        width="auto"
                        height="32px"
                    >
                        XÁC NHẬN
                    </ButtonCustom>
                </div>
            </div>
        </>
    );
};
