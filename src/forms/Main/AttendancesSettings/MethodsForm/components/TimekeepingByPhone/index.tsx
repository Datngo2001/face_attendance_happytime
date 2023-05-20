import TapAndPlayIcon from "@mui/icons-material/TapAndPlay";
import "./styles.scss";
import FormSwitchCustom from "components/ButtonSwitchCustom/FormSwitchCustom";
import { useState } from "react";

export type Props = {
    setValue: any
    control: any
    getValues: any
}

const TimekeepingByPhone: React.FC<Props> = ({ setValue, getValues, control }) => {

    const [render, rerender] = useState(false);

    const handleOptionsSelect = (e) => {
        getValues("modules.0.functions").forEach((func, index) => {
            console.log(func.is_enabled)
            if (func.is_enabled) {
                setValue(`modules.0.functions.${index}.is_enabled`, false);
            }
        })
        setValue(`modules.0.functions.${e.target.value}.is_enabled`, true);

        rerender(!render);
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
                <div className="timekeeping-by-phone__options">
                    <div className="option-field">
                        <input
                            type="radio"
                            name="timekeeping-by-phone-options"
                            value={0}
                            checked={getValues("modules.0.functions.0.is_enabled")}
                            onChange={handleOptionsSelect}
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
                            checked={getValues("modules.0.functions.1.is_enabled")}
                            onChange={handleOptionsSelect}
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
                            checked={getValues("modules.0.functions.2.is_enabled")}
                            onChange={handleOptionsSelect}
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
                            checked={getValues("modules.0.functions.3.is_enabled")}
                            onChange={handleOptionsSelect}
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
                            checked={getValues("modules.0.functions.4.is_enabled")}
                            onChange={handleOptionsSelect}
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
            </div>
        </>
    );
};

export default TimekeepingByPhone;
