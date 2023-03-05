import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import SelectCustom from "../../../../../../../components/SelectCustom";
import { listRoles } from "../../../../../../../utils/ListData";
import "./styles.scss";

export type Props = {
  control: any,
  manipulationRight: any,
}

const Permission: React.FC<Props> = ({
  control,
  manipulationRight,
}) => {
  return (
    <>
      <div className="employees-form--permission__wrapper divider-top">
        <div className="title">
          <SettingsRoundedIcon />
          Quyền thao tác trên HappyTime
        </div>
        <div className="employees-form__container">
          <div className="col">
            <SelectCustom
              name="manipulationRight"
              width="100%"
              required={true}
              disabled={true}
              className="input-item"
              label="Quyền thao tác"
              options={listRoles}
              control={control}
              placeholder="Quyền thao tác"
              defaultValue={manipulationRight}
            />
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
};

export default Permission;
