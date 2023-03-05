import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import "./styles.scss";
import InputCustom from "components/InputCustom";

const AnnualLeave = ({ control }) => {
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
              name="numOfLeaveThisYear"
              type="number"
              width="100%"
              required={true}
              className="input-item"
              label="Số phép năm nay"
              control={control}
              placeholder="0"
            />
          </div>
          <div className="col">
            <InputCustom
              name="numOfLeaveLastYear"
              type="number"
              width="100%"
              required={true}
              className="input-item"
              label="Số phép năm trước"
              control={control}
              placeholder="0"
            />
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default AnnualLeave;
