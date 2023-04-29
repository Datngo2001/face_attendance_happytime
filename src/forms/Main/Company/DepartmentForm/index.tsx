import React, { useEffect } from "react";
import "./styles.scss"
import { FormAction } from "forms/formAction";
import ButtonCustom from "components/ButtonCustom";
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";
import useCRUDForm from "hooks/useCRUDForm";
import { defaultValues } from "./defaultValues";
import { schema } from "./validation";
import InputCustom from "components/InputCustom";
import { Department } from "store/slices/Main/Departments/departmentsSlice";
import TreeViewSelectBox, { SelectBoxNode } from "components/TreeViewSelectBox";
import { createDepartmentSelectOptions } from "utils/departmentUtil";

export type Props = {
  action: FormAction
  setOpen: any
}

const DepartmentForm: React.FC<Props> = ({ action, setOpen }) => {
  const { department, departmentTrees } = useAppSelector((state) => state.departments);
  const dispatch = useAppDispatch();

  const { control, handleSubmit, setValue } = useCRUDForm({
    defaultValues: action === FormAction.CREATE ? defaultValues : department,
    validationSchema: schema
  });

  const handleOnSubmitCreate = (data) => {
    // dispatch(
    //   extraReducersCreateBssid({
    //     data: data,
    //   })
    // );
  };

  const handleOnSubmitUpdate = (data) => {
    // dispatch(
    //   extraReducersUpdateBssid({
    //     data: data,
    //   })
    // );
  };
  return (
    <div className="department-form__wrapper">
      <div className="field-control">
        <InputCustom
          name="department_name"
          width="470px"
          label="Phòng ban mới"
          placeholder="Tên phòng ban"
          control={control}
          required={true}
        />
      </div>

      <div className="field-control">
        <TreeViewSelectBox
          setValue={setValue}
          placeholder="Chọn phòng ban"
          name="department_parent_id"
          control={control}
          options={departmentTrees ? createDepartmentSelectOptions(departmentTrees) : []} />
      </div>

      <div className="department-form__actions">
        <ButtonCustom width="84px" type={3} onClick={() => setOpen(false)}>
          Hủy bỏ
        </ButtonCustom>
        <ButtonCustom
          width="60px"
          onClick={handleSubmit(
            action === FormAction.UPDATE ? handleOnSubmitUpdate : handleOnSubmitCreate
          )}
        >
          Lưu
        </ButtonCustom>
      </div>
    </div>
  );
};

export default DepartmentForm;
