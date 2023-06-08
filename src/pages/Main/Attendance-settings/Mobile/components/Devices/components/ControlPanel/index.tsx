import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.scss";
import InputCustom from "components/InputCustom";
import SelectCustom from "components/SelectCustom";
import { statusActiveOptions } from "utils/selectBoxOptions";

type Props = {
  control: any
  handleSearch: any
}

const ControlPanel: React.FC<Props> = ({ control, handleSearch }) => {

  return (
    <>
      <div className="attendance-settings--mobile-devices--control-panel">
        <InputCustom
          name="dataSearch"
          control={control}
          width="100%"
          placeholder="Tên nhân viên, mã nhân viên, Divice ID"
          iconRight={<SearchRoundedIcon />}
        />
        <div style={{ height: "20px", width: "100%" }}></div>
        <SelectCustom
          name="activeStatus"
          width="300px"
          control={control}
          options={statusActiveOptions}
          placeholder="Trạng thái hoạt động"
        />
      </div>
    </>
  );
};

export default ControlPanel;
