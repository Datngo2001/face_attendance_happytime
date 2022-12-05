import TapAndPlayIcon from "@mui/icons-material/TapAndPlay";
import ButtonSwitchCustom from "../../../../../../components/ButtonSwitchCustom";
import "./styles.scss";

const TimekeepingByPhone = ({ checked, setValue }) => {
    return (
        <>
            <div className="timekeeping-by-phone__wrapper">
                <div className="timekeeping-by-phone__title">
                    <h4 className="timekeeping-title">
                        <TapAndPlayIcon />
                        Chấm công bằng điện thoại
                    </h4>
                    <ButtonSwitchCustom id="timekeepingByPhone" setValue={setValue} />
                </div>
            </div>
        </>
    );
};

export default TimekeepingByPhone;
