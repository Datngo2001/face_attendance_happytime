import "./styles.scss";
import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";

const WorkInformation = () => {
    return (
        <>
            <div className="view-work-information__wrapper">
                <p className="title">
                    <BusinessCenterRoundedIcon />
                    Thông tin công việc
                </p>
                <div className="content">
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
            </div>
        </>
    );
};

export default WorkInformation;
