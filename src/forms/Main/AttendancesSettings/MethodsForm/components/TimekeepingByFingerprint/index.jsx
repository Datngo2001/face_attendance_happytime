import FingerprintRoundedIcon from "@mui/icons-material/FingerprintRounded";
import ButtonSwitchCustom from "../../../../../../components/ButtonSwitchCustom";
import "./styles.scss";

const TimekeepingByFingerprint = ({ setValue, checked }) => {
    return (
        <>
            <div className="timekeeping-by-fingerprint__wrapper divider-top">
                <div className="timekeeping-by-fingerprint__title">
                    <h4 className="timekeeping-title">
                        <FingerprintRoundedIcon />
                        Chấm công bằng vân tay (Tracker)
                    </h4>
                    <ButtonSwitchCustom id="methodByFingerprint" setValue={setValue} />
                </div>
                <div className="timekeeping-by-fingerprint__body">
                    <div className="timekeeping-text-large">
                        Thiết lập Trackers <span className="btn">Tại đây</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TimekeepingByFingerprint;
