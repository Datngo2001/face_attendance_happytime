import "./styles.scss";
import ViewModuleRoundedIcon from "@mui/icons-material/ViewModuleRounded";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";

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
