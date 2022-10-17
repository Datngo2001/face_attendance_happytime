import "./styles.scss";
import SyncIcon from "@mui/icons-material/Sync";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const ButtonUser = ({ type, onClick, avatar, name, role, children }) => {
    return (
        <>
            <div className="button-user__wrapper" onClick={onClick}>
                <div
                    className={`button-user__content ${type === 1 ? "type-1" : "type-2"}`}
                >
                    {avatar ? (
                        <img src={avatar} alt="" className="avatar" />
                    ) : (
                        <div className="avatar none">
                            <PersonIcon />
                        </div>
                    )}
                    <div className="infor">
                        <p className="name">{name}</p>
                        <p className="role">{type === 1 ? "Workspaces" : "Admin"}</p>
                    </div>
                    {type === 1 ? (
                        <Link to="/workspaces">
                            <span className="icon type-1">
                                <SyncIcon />
                            </span>
                        </Link>
                    ) : (
                        <span className="icon type-2">
                            <ExpandMoreIcon />
                        </span>
                    )}
                </div>
                {children}
            </div>
        </>
    );
};

export default ButtonUser;
