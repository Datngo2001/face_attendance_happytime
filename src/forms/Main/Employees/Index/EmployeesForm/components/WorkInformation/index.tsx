import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import "./styles.scss";
import InputCustom from "components/InputCustom";
import InputDate from "components/InputDate";
import CheckboxCustom from "components/CheckboxCustom";
import SelectCustom from "components/SelectCustom";
import { jobPositionList, listStatusEmployees, listTypeEmployees } from "utils/ListData";

const WorkInformation = ({
  control,
  method,
  errors,
  setValue,
  trigger,
  startWorkingDate,
  typeEmployee,
  employeeStatus,
}) => {
  return (
    <>
      <div className="employees-form--work-information__wrapper divider-top">
        <div className="title">
          <BusinessCenterRoundedIcon />
          Thông tin công việc
        </div>
        <div className="employees-form__container">
          <div className="col">
            {method === "update" && (
              <InputCustom
                name="staffId"
                control={control}
                disabled={true}
                width="100%"
                className="input-item"
                label="Mã nhân viên"
                placeholder="Mã nhân viên"
              />
            )}
            {method === "update" ? (
              <InputDate
                id="startWorkingDate"
                className="input-item"
                label="Ngày bắt đầu đi làm"
                required={true}
                placeholder="Ngày bắt đầu đi làm"
                setValue={setValue}
                message={errors}
                trigger={trigger}
                defaultValue={startWorkingDate}
              />
            ) : (
              <InputDate
                id="startWorkingDate"
                className="input-item"
                label="Ngày bắt đầu đi làm"
                required={true}
                placeholder="Ngày bắt đầu đi làm"
                setValue={setValue}
                message={errors}
                trigger={trigger}
              />
            )}
            <CheckboxCustom
              name="doNotRequireTimekeeping"
              className="input-item checkbox"
              control={control}
              label="Không yêu cầu chấm công" />
          </div>
          <div className="col">
            <SelectCustom
              name="department"
              width="100%"
              className="input-item"
              required={true}
              label="Phòng ban"
              control={control}
              placeholder="Phòng ban"
              options={jobPositionList}
            />
            <SelectCustom
              name="employeeStatus"
              width="100%"
              className="input-item"
              required={true}
              label="Trạng thái nhân sự"
              control={control}
              placeholder="Trạng thái nhân sự"
              options={listStatusEmployees}
              defaultValue={employeeStatus}
            />
          </div>
          <div className="col">
            <SelectCustom
              name="workBranch"
              width="100%"
              className="input-item"
              label="Chi nhánh làm việc"
              control={control}
              placeholder="Chi nhánh làm việc"
              options={listStatusEmployees}
            />
            {typeEmployee ? (
              <SelectCustom
                name="typeEmployee"
                width="100%"
                className="input-item"
                label="Loại hình nhân sự"
                required={true}
                control={control}
                placeholder="Loại hình nhân sự"
                options={listTypeEmployees}
                defaultValue={typeEmployee}
              />
            ) : (
              <SelectCustom
                name="typeEmployee"
                width="100%"
                className="input-item"
                label="Loại hình nhân sự"
                required={true}
                control={control}
                placeholder="Loại hình nhân sự"
                options={listTypeEmployees}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkInformation;
