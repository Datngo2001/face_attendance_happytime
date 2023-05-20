import TapAndPlayIcon from "@mui/icons-material/TapAndPlay";
import "./styles.scss";
import FormSwitchCustom from "components/ButtonSwitchCustom/FormSwitchCustom";
import { defaultValue } from "../../defaultValues";

export type Props = {
    setValue: any
    control: any
    getValues: any
}

const TimekeepingByPhone: React.FC<Props> = ({ setValue, getValues, control }) => {

    const handleOptionsSelect = (e) => {
        e.preventDefault();
        var newValue = { ...defaultValue.modules[0].functions };
        newValue[e.target.value].is_enabled = true;
        setValue("modules.0.functions", newValue);
    }

    return (
        <>
            <div className="timekeeping-by-phone__wrapper">
                <div className="timekeeping-by-phone__title">
                    <h4 className="timekeeping-title">
                        <TapAndPlayIcon />
                        Chấm công bằng điện thoại
                    </h4>
                    <FormSwitchCustom
                        name="modules.0.is_enabled"
                        control={control}
                        size={"medium"} />
                </div>
                <form onChange={handleOptionsSelect}>
                    <div className="timekeeping-by-phone__options">
                        <div className="option-field">
                            <input
                                type="radio"
                                name="timekeeping-by-phone-options"
                                value={0}
                                defaultChecked={getValues("modules.0.functions.0.is_enabled")}
                            />
                            <div className="label">
                                <label htmlFor="option1">
                                    <span className="timekeeping-text-large">
                                        Giới hạn chấm công qua IP Wi-Fi của công ty. Khai báo
                                        danh sách IP <span className="btn">Tại đây</span>
                                    </span>
                                    <span className="timekeeping-text-small">
                                        Bạn cần Wi-Fi với IP tĩnh để sử dụng hình thức chấm
                                        công này
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="option-field">
                            <input
                                type="radio"
                                name="timekeeping-by-phone-options"
                                value={1}
                                defaultChecked={getValues("modules.0.functions.1.is_enabled")}
                            />
                            <div className="label">
                                <label htmlFor="option2">
                                    <span className="timekeeping-text-large">
                                        Giới hạn chấm công qua địa chỉ BSSID Wifi. Khai báo
                                        danh sách BSSID <span className="btn">Tại đây</span>
                                    </span>
                                    <span className="timekeeping-text-small">
                                        Nhân viên sẽ có thể chấm công trên app khi truy cập
                                        Wifi có BSSID đã khai báo
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="option-field">
                            <input
                                type="radio"
                                name="timekeeping-by-phone-options"
                                value={2}
                                defaultChecked={getValues("modules.0.functions.2.is_enabled")}
                            />
                            <div className="label">
                                <label htmlFor="option3">
                                    <span className="timekeeping-text-large">
                                        Giới hạn chấm công theo vị trí (GPS). Thiết lập vị trí
                                        chấm công <span className="btn">Tại đây</span>
                                    </span>
                                    <span className="timekeeping-text-small">
                                        Nhân viên sẽ có thể chấm công trên app với điện thoại
                                        có kết nối Internet tại các vị trí đã thiết lập
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="option-field">
                            <input
                                type="radio"
                                name="timekeeping-by-phone-options"
                                value={3}
                                defaultChecked={getValues("modules.0.functions.3.is_enabled")}
                            />
                            <div className="label">
                                <label htmlFor="option4">
                                    <span className="timekeeping-text-large">
                                        Chấm công bằng QR code. Thiết lập QR chấm công. Truy
                                        cập link hiển thị QR{" "}
                                        <span className="btn">Tại đây</span>
                                    </span>
                                    <span className="timekeeping-text-small">
                                        Mã QR sẽ thay đổi 30s một lần để đảm bảo tính xác thực
                                        cho lượt chấm công của nhân viên
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="option-field">
                            <input
                                type="radio"
                                name="timekeeping-by-phone-options"
                                value={4}
                                defaultChecked={getValues("modules.0.functions.4.is_enabled")}
                            />
                            <div className="label">
                                <label htmlFor="option5">
                                    <span className="timekeeping-text-large">
                                        Không giới hạn
                                    </span>
                                    <span className="timekeeping-text-small">
                                        Nhân viên sẽ có thể chấm công trên app tại bất cứ đâu
                                        với điện thoại có kết nối Internet
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default TimekeepingByPhone;
