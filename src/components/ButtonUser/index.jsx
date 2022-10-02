import "./styles.scss";
import avatar from "../../assets/images/avatar.jpg";
import SyncIcon from "@mui/icons-material/Sync";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ButtonUser = ({ type, onClick }) => {
    return (
        <>
            <div className="button-user__wrapper">
                <div
                    className={`button-user__content ${type === 1 ? "type-1" : "type-2"}`}
                >
                    <img src={avatar} alt="" className="avatar" />
                    <div className="infor">
                        <p className="name">Test</p>
                        <p className="role">Admin</p>
                    </div>
                    {type === 1 ? (
                        <span className="icon type-1">
                            <SyncIcon />
                        </span>
                    ) : (
                        <span className="icon type-2">
                            <ExpandMoreIcon />
                        </span>
                    )}
                </div>
            </div>
        </>
    );
};

export default ButtonUser;
