import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import "./styles.scss";
import SelectCustom from "components/SelectCustom";
import { roleOptions } from "store/slices/Main/Employees/employeesSlice";

export type Props = {
  control: any,
}

const Permission: React.FC<Props> = ({
  control,
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
              name="role"
              width="100%"
              required={true}
              className="input-item"
              label="Quyền thao tác"
              options={roleOptions}
              control={control}
              placeholder="Quyền thao tác"
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
