import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import InputCustom from "../../../../../../../components/InputCustom";
import "./styles.scss";

const AnnualLeave = ({ register, setValue, errors }) => {
    return (
        <>
            <div className="employees-form--annual-leave__wrapper divider-top">
                <div className="title">
                    <CalendarMonthRoundedIcon />
                    Thông tin phép năm
                </div>
                <div className="employees-form__container">
                    <div className="col">
                        <InputCustom
                            id="numOfLeaveThisYear"
                            type="number"
                            width="100%"
                            required={true}
                            className="input-item"
                            label="Số phép năm nay"
                            register={register}
                            placeholder="0"
                            message={errors}
                        />
                    </div>
                    <div className="col">
                        <InputCustom
                            id="numOfLeaveLastYear"
                            type="number"
                            width="100%"
                            required={true}
                            className="input-item"
                            label="Số phép năm trước"
                            register={register}
                            placeholder="0"
                            message={errors}
                        />
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        </>
    );
};

export default AnnualLeave;
