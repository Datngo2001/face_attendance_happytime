import "./styles.scss";
import ViewModuleRoundedIcon from "@mui/icons-material/ViewModuleRounded";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Divider } from "@mui/material";

export const MenuBox = ({ children, onClick }) => {
    return (
        <>
            <div className="menu-box__wrapper" onClick={onClick}>
                <ViewModuleRoundedIcon />
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {children}
                </div>
            </div>
        </>
    );
};

export const NotificationBox = ({ children, onClick }) => {
    return (
        <>
            <div className="notification-box__wrapper" onClick={onClick}>
                <NotificationsNoneSharpIcon />
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                >
                    {children}
                </div>
            </div>
        </>
    );
};

export const MenuBoxInner = () => {
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

export const NotificationBoxInner = ({ listOfNotifications }) => {
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

export const ButtonUserInner = () => {
    return (
        <>
            <div className="button-user-inner__wrapper">
                <ul className="list-item">
                    <li className="item">
                        <DriveFileRenameOutlineRoundedIcon />
                        Cập nhật thông tin cá nhân
                    </li>
                    <li className="item">
                        <ApartmentRoundedIcon />
                        Cài đặt workspace
                    </li>
                    <li className="item">
                        <LogoutRoundedIcon />
                        Đăng xuất
                    </li>
                </ul>
            </div>
        </>
    );
};
