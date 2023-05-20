import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import "./styles.scss";
import InputCustom from "components/InputCustom";
import InputDate from "components/InputDate";
import SelectCustom from "components/SelectCustom";
import { listStatusEmployees, listTypeEmployees } from "utils/ListData";
import { FormAction } from "forms/formAction";
import { useAppSelector } from "hooks/useAppSelector";
import TreeViewSelectBox from "components/TreeViewSelectBox";
import { createDepartmentSelectOptions, createPositionSelectOptions } from "utils/departmentUtil";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useEffect } from "react";
import { extraReducersGetDepartments } from "store/slices/Main/Departments/actions/extraReducers";

export type Props = {
  control: any;
  action: FormAction;
  setValue: any
}

const WorkInformation = ({
  control,
  action,
  setValue
}) => {
  const { departmentTrees } = useAppSelector((state) => state.departments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(extraReducersGetDepartments())
  }, [])

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
            <InputDate
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
              options={listStatusEmployees}
            />
          </div>
          <div className="col">
            {/* <SelectCustom
              name="department"
              width="100%"
              className="input-item"
              required={true}
              label="Phòng ban"
              control={control}
              placeholder="Phòng ban"
              options={jobPositionList}
            /> */}
            <TreeViewSelectBox
              label="Phòng ban"
              required={true}
              placeholder="Phòng ban"
              setValue={setValue}
              name="position_id"
              control={control}
              options={departmentTrees ? createPositionSelectOptions(departmentTrees) : []} />
          </div>
          <div className="col">
            <SelectCustom
              name="agent_type"
              width="100%"
              className="input-item"
              label="Loại hình nhân sự"
              required={true}
              control={control}
              placeholder="Loại hình nhân sự"
              options={listTypeEmployees}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkInformation;
