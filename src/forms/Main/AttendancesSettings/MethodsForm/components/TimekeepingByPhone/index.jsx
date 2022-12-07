import TapAndPlayIcon from "@mui/icons-material/TapAndPlay";
import ButtonSwitchCustom from "../../../../../../components/ButtonSwitchCustom";
import "./styles.scss";

const TimekeepingByPhone = ({ checked, setValue, register }) => {
    return (
        <>
            <div className="timekeeping-by-phone__wrapper">
                <div className="timekeeping-by-phone__title">
                    <h4 className="timekeeping-title">
                        <TapAndPlayIcon />
                        Chấm công bằng điện thoại
                    </h4>
                    <ButtonSwitchCustom id="methodByPhone" setValue={setValue} />
                </div>
                <div className="timekeeping-by-phone__options">
                    <div className="option-field">
                        <input
                            id="option1"
                            type="radio"
                            name="timekeepingByPhoneOption"
                            {...register("timekeepingByPhoneOption")}
                            value={1}
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
                            id="option2"
                            type="radio"
                            name="timekeepingByPhoneOption"
                            {...register("timekeepingByPhoneOption")}
                            value={2}
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
                            id="option3"
                            type="radio"
                            name="timekeepingByPhoneOption"
                            {...register("timekeepingByPhoneOption")}
                            value={3}
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
                            id="option4"
                            type="radio"
                            name="timekeepingByPhoneOption"
                            {...register("timekeepingByPhoneOption")}
                            value={4}
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
                            id="option5"
                            type="radio"
                            name="timekeepingByPhoneOption"
                            {...register("timekeepingByPhoneOption")}
                            value={5}
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
