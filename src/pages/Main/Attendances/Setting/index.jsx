import { SettingForm } from "../../../../forms/Main/Attendances";
import "./styles.scss";

const Setting = () => {
    return (
        <>
            <div className="attendances--setting__wrapper">
                <div className="content-title">Cài đặt ngày chốt công</div>
                <SettingForm />
            </div>
        </>
    );
};

export default Setting;
