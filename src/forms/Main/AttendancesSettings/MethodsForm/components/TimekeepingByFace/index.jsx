import CameraRoundedIcon from "@mui/icons-material/CameraRounded";
import ButtonSwitchCustom from "../../../../../../components/ButtonSwitchCustom";
import "./styles.scss";

const TimekeepingByFace = ({ setValue, checked }) => {
    return (
        <>
            <div className="timekeeping-by-face__wrapper divider-top">
                <div className="timekeeping-by-face__title">
                    <div className="timekeeping-title">
                        <CameraRoundedIcon />
                        Chấm công bằng khuôn mặt
                    </div>
                    <ButtonSwitchCustom id="methodByFace" setValue={setValue} />
                </div>
                <div className="timekeeping-by-face__body">
                    <div className="timekeeping-text-large">
                        Chấm công khuôn mặt<span className="btn"> Tại đây</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TimekeepingByFace;
