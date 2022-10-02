import "./styles.scss";
import ViewModuleRoundedIcon from "@mui/icons-material/ViewModuleRounded";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";

export const MenuBox = () => {
    return (
        <>
            <div className="menu-box__wrapper">
                <ViewModuleRoundedIcon />
            </div>
        </>
    );
};

export const NotificationBox = () => {
    return (
        <>
            <div className="notification-box__wrapper">
                <NotificationsNoneSharpIcon />
            </div>
        </>
    );
};
