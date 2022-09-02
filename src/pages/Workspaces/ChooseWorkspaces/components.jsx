import "./styles.scss";
import avatarTest from "../../../assets/images/avatar.jpg";
import EastIcon from '@mui/icons-material/East';

export const ButtonWorkspace = ({ username, role, avatar, onClick }) => {
    return (
        <>
            <div onClick={onClick} className="btn-workspace__wrapper">
                <img src={avatarTest} alt="ảnh" className="btn-workspace__avatar" />
                <div className="btn-workspace__text">
                    <p className="username">{username}</p>
                    <p className="role">Admin</p>
                </div>
                <EastIcon className="icon"/>
            </div>
        </>
    );
};
