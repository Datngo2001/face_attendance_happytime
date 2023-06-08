import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.scss";
import dayjs from "dayjs";
import ButtonCustom from "components/ButtonCustom";
import InputCustom from "components/InputCustom";
import DatePickerCustom from "components/InputDate/DatePickerCustom";
import DateRangePickerCustom from "components/InputDate/DateRangePickerCustom";

type Props = {
  control: any;
  setValue: any;
  trigger: any;
}

const ControlPanel: React.FC<Props> = ({ control, setValue, trigger }) => {
  return (
    <>
      <div className="attendances--summary--control-panel__wrapper">
        <div className="attendances--summary--control-panel__header">
          <div className="content-title">Bảng công</div>
          <ButtonCustom
            width="160px"
            height="40px"
            type={2}
            icon={<ReplayRoundedIcon />}
          >
            Cập nhật kết quả
          </ButtonCustom>
        </div>
        <div className="attendances--summary--control-panel__body">
          <InputCustom
            name="agent_id"
            control={control}
            placeholder="Nhập tên nhân viên, mã nhân viên"
            iconRight={<SearchRoundedIcon />}
          />
          <div style={{ width: "100%", height: "20px" }}></div>
          <DateRangePickerCustom
            name="date_range"
            fromName={"from"}
            toName={"to"}
            width="500px"
            control={control}
            fromLabel="Chọn ngày bắt đầu"
            toLabel="Chọn ngày kết thúc"
          />
        </div>
        <div className="attendances--summary--control-panel__footer">
          <div className="description-item">
            <span className="description-item__icon green"></span>
            <p className="description-item__title">Chấm công đúng giờ</p>
          </div>
          <div className="description-item">
            <span className="description-item__icon yellow"></span>
            <p className="description-item__title">
              Đi muộn / Về sớm / Quên Check out
            </p>
          </div>
          <div className="description-item">
            <span className="description-item__icon gray"></span>
            <p className="description-item__title">Không chấm công</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlPanel;
