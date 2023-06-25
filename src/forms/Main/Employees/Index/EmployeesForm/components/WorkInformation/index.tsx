import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import "./styles.scss";
import InputCustom from "components/InputCustom";
import DatePickerCustom from "components/InputDate/DatePickerCustom";
import SelectCustom from "components/SelectCustom";
import { FormAction } from "forms/formAction";
import { useAppSelector } from "hooks/useAppSelector";
import TreeViewSelectBox from "components/TreeViewSelectBox";
import { createPositionSelectOptions } from "utils/departmentUtil";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useEffect } from "react";
import { extraReducersGetDepartments } from "store/slices/Main/Departments/actions/extraReducers";
import { statusEmployeesOption, typeEmployeesOptions } from "store/slices/Main/Employees/employeesSlice";

type Props = {
  control: any;
  action: FormAction;
  setValue: any
}

const WorkInformation = ({
  control,
  action,
  setValue,
  watch
}) => {
  const { departmentTrees, departments } = useAppSelector((state) => state.departments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(extraReducersGetDepartments())
  }, [])

  const position_id = watch("position_id")

  useEffect(() => {
    if (position_id) {
      let department = departments.find(x => x.position_ids.includes(position_id))
      setValue("department_name", department?.department_name)
      setValue("department_id", department?.id)
    }
  }, [position_id])

  return (
    <>
      <div className="employees-form--work-information__wrapper divider-top">
        <div className="title">
          <BusinessCenterRoundedIcon />
          Thông tin công việc
        </div>
        <div className="employees-form__container">
          <div className="col">
            {action === FormAction.UPDATE && (
              <InputCustom
                name="agent_code"
                control={control}
                disabled={true}
                width="100%"
                className="input-item"
                label="Mã nhân viên"
                placeholder="Mã nhân viên"
              />
            )}
            <DatePickerCustom
              name="start_working_date"
              className="input-item"
              label="Ngày bắt đầu đi làm"
              required={true}
              placeholder="Ngày bắt đầu đi làm"
              control={control}
            />
            <SelectCustom
              name="agent_status"
              width="100%"
              className="input-item"
              required={true}
              label="Trạng thái nhân sự"
              control={control}
              placeholder="Trạng thái nhân sự"
              options={statusEmployeesOption}
            />
          </div>
          <div className="col">
            <TreeViewSelectBox
              label="Vị trí"
              required={true}
              placeholder="Vị trí"
              setValue={setValue}
              name="position_id"
              control={control}
              options={departmentTrees ? createPositionSelectOptions(departmentTrees) : []} />
            <SelectCustom
              name="agent_type"
              width="100%"
              className="input-item"
              label="Loại hình nhân sự"
              required={true}
              control={control}
              placeholder="Loại hình nhân sự"
              options={typeEmployeesOptions}
            />
          </div>
          <div className="col">
            <InputCustom
              name="department_name"
              width="100%"
              className="input-item"
              label="Phòng ban"
              required={true}
              control={control}
              placeholder="Phòng ban"
              disabled
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkInformation;
