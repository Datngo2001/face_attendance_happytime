import "./styles.scss";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { Link } from "react-router-dom";

const ButtonUserInner = ({setOpen}) => {
    // STATE
    // ******************************

    return (
        <>
            <div className="button-user-inner__wrapper">
                <ul className="list-item">
                    <Link className="item" to="/app/profile/info">
                        <DriveFileRenameOutlineRoundedIcon />
                        Cập nhật thông tin cá nhân
                    </Link>
                    <Link className="item" to="/app/workspace-settings">
                        <ApartmentRoundedIcon />
                        Cài đặt workspace
                    </Link>
                    <div
                        id="btnLogout_inHeader"
                        onClick={() => setOpen(true)}
                        className="item"
                    >
                        <LogoutRoundedIcon />
                        Đăng xuất
                    </div>
                </ul>
            </div>
        </>
    );
};

export default ButtonUserInner;
