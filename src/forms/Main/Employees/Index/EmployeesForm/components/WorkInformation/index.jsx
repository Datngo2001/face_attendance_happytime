import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import CheckboxCustom from "../../../../../../../components/CheckboxCustom";
import InputCustom from "../../../../../../../components/InputCustom";
import InputDate from "../../../../../../../components/InputDate";
import SelectCustom from "../../../../../../../components/SelectCustom";
import {
  jobPositionList,
  listStatusEmployees,
  listTypeEmployees,
} from "../../../../../../../utils/ListData";
import "./styles.scss";

const WorkInformation = ({
  method,
  register,
  setValue,
  trigger,
  errors,
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
                id="staffId"
                name="staffId"
                disabled={true}
                width="100%"
                className="input-item"
                label="Mã nhân viên"
                register={register}
                placeholder="Mã nhân viên"
                message={errors}
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
              id="doNotRequireTimekeeping"
              className="input-item checkbox"
              register={register}
              label="Không yêu cầu chấm công"
            />
          </div>
          <div className="col">
            <SelectCustom
              name="department"
              width="100%"
              className="input-item"
              required={true}
              label="Phòng ban"
              register={register}
              placeholder="Phòng ban"
              options={jobPositionList}
              message={errors}
            />
            <SelectCustom
              name="employeeStatus"
              width="100%"
              className="input-item"
              required={true}
              label="Trạng thái nhân sự"
              register={register}
              placeholder="Trạng thái nhân sự"
              options={listStatusEmployees}
              message={errors}
              setValue={setValue}
              defaultValue={employeeStatus}
            />
          </div>
          <div className="col">
            <SelectCustom
              name="workBranch"
              width="100%"
              className="input-item"
              label="Chi nhánh làm việc"
              register={register}
              placeholder="Chi nhánh làm việc"
              options={listStatusEmployees}
              message={errors}
            />
            {typeEmployee ? (
              <SelectCustom
                name="typeEmployee"
                width="100%"
                className="input-item"
                label="Loại hình nhân sự"
                required={true}
                register={register}
                placeholder="Loại hình nhân sự"
                options={listTypeEmployees}
                message={errors}
                setValue={setValue}
                defaultValue={typeEmployee}
              />
            ) : (
              <SelectCustom
                name="typeEmployee"
                width="100%"
                className="input-item"
                label="Loại hình nhân sự"
                required={true}
                register={register}
                placeholder="Loại hình nhân sự"
                options={listTypeEmployees}
                message={errors}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkInformation;
