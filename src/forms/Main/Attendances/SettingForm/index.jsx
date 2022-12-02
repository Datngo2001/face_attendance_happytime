import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ButtonCustom from "../../../../components/ButtonCustom";
import "./styles.scss";

const SettingForm = () => {
    // REACT HOOK FORM
    const { register, handleSubmit } = useForm({});
    // ****************************

    // HOOK EFFECT
    useEffect(() => {
        document.getElementById("theLastDayOfMonth").checked = true;
    }, []);
    // ****************************

    // ARROW FUNCTIONS
    const handleOnSubmit = (data) => {
        console.log("data", data);
    };
    // ****************************

    return (
        <>
            <div className="attendances--setting-form__wrapper">
                <div className="description">Chọn 1 trong 2 cách</div>
                <div className="attendances--setting-form__container">
                    <div className="radio-control">
                        <input
                            id="theLastDayOfMonth"
                            {...register("closingTimekeepingDate")}
                            name="closingTimekeepingDate"
                            type="radio"
                            value={1}
                        />
                        <div className="label">
                            <label htmlFor="theLastDayOfMonth">
                                Ngày cuối cùng của tháng
                            </label>
                        </div>
                    </div>
                    <div className="radio-control">
                        <input
                            id="chooseBySelf"
                            {...register("closingTimekeepingDate")}
                            name="closingTimekeepingDate"
                            type="radio"
                            value={2}
                        />
                        <div className="label">
                            <label htmlFor="chooseBySelf">
                                Người dùng tự chọn ngày cố định mỗi tháng
                            </label>
                        </div>
                    </div>
                </div>
                <div className="attendances--setting-form__actions">
                    <ButtonCustom
                        width="60px"
                        height="40px"
                        onClick={handleSubmit(handleOnSubmit)}
                    >
                        Lưu
                    </ButtonCustom>
                </div>
            </div>
        </>
    );
};

export default SettingForm;
