import "./styles.scss";
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
        <SelectCustom
          name="status"
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
