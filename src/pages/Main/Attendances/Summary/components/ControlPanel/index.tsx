import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.scss";
import dayjs from "dayjs";
import ButtonCustom from "components/ButtonCustom";
import InputCustom from "components/InputCustom";
import InputDate from "components/InputDate";

export type Props = {
  control: any;
  setValue: any;
  trigger: any;
}

const ControlPanel: React.FC<Props> = ({ control, setValue, trigger }) => {
  // VARIABLES
  const today = dayjs(new Date().toString()).format("DD/MM/YYYY");
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
            name="searchData"
            control={control}
            placeholder="Nhập tên nhân viên, mã nhân viên"
            iconRight={<SearchRoundedIcon />}
          />
          <div style={{ width: "100%", height: "20px" }}></div>
          <InputDate
            id="timeStart"
            width="250px"
            setValue={setValue}
            trigger={trigger}
            placeholder="Chọn ngày bắt đầu"
            defaultValue={today}
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
          <div className="description-item">
            <span className="description-item__icon blue-1"></span>
            <p className="description-item__title">Có đơn từ</p>
          </div>
          <div className="description-item">
            <span className="description-item__icon blue-2"></span>
            <p className="description-item__title">Nghỉ lễ</p>
          </div>
          <div className="description-item">
            <span className="description-item__icon red"></span>
            <p className="description-item__title">Có lỗi</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlPanel;
