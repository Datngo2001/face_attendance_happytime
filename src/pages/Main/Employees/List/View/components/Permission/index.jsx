import "./styles.scss";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

const Permission = ({role}) => {
    return (
        <>
            <div className="view-permission__wrapper">
                <div className="title">
                    <SettingsRoundedIcon />
                    Quyền thao tác trên HappyTime
                </div>
                <div className="content divider-bottom">
                    <div className="col">
                        <div className="col__label">
                            <p className="label">Quyền thao tác</p>
                        </div>
                        <div className="col__data">
                            <p className="data">{role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Permission;
