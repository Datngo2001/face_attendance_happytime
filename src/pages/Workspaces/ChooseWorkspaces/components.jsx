import "./styles.scss";
import EastIcon from "@mui/icons-material/East";
import ApartmentIcon from "@mui/icons-material/Apartment";

export const ButtonWorkspace = ({ username, role, avatar, onClick }) => {
    return (
        <>
            <div onClick={onClick} className="btn-workspace__wrapper">
                {avatar ? (
                    <img
                        src={avatar || <ApartmentIcon />}
                        alt="ảnh"
                        className="btn-workspace__avatar"
                    />
                ) : (
                    <ApartmentIcon className="btn-workspace__no-avatar"/>
                )}
                <div className="btn-workspace__text">
                    <p className="username">{username}</p>
                    <p className="role">Admin</p>
                </div>
                <EastIcon className="icon" />
            </div>
        </>
    );
};
