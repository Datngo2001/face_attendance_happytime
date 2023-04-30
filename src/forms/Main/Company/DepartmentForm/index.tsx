import React, { useMemo } from "react";
import "./styles.scss"
import { FormAction } from "forms/formAction";
import ButtonCustom from "components/ButtonCustom";
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";
import useCRUDForm from "hooks/useCRUDForm";
import { schema } from "./validation";
import InputCustom from "components/InputCustom";
import TreeViewSelectBox from "components/TreeViewSelectBox";
import { createDepartmentSelectOptions } from "utils/departmentUtil";
import { extraReducersCreateDepartments } from "store/slices/Main/Departments/actions/extraReducers";
import { CreateDepartmentDto } from "store/slices/Main/Departments/departmentsSlice";
import PositionTable from "./components/PositionTable";
import { defaultValues } from "./defaultValues";

export type Props = {
  action: FormAction
  setOpen: any
}

const DepartmentForm: React.FC<Props> = ({ action, setOpen }) => {
  const { department, departmentTrees } = useAppSelector((state) => state.departments);
  const dispatch = useAppDispatch();

  const defaultFormValue: CreateDepartmentDto = useMemo(() => {
    if (action === FormAction.CREATE) {
      return defaultValues
    } else {
      return {
        name: department.department_name,
        department_parent_id: department.department_parent_id,
        positions: department.children_position
      } as CreateDepartmentDto
    }
  }, [action])

  const { control, handleSubmit, setValue, getValues, watch } = useCRUDForm({
    defaultValues: defaultFormValue,
    validationSchema: schema
  });

  const handleOnSubmitCreate = (data: CreateDepartmentDto) => {
    dispatch(
      extraReducersCreateDepartments(data)
    );
  };

  const handleOnSubmitUpdate = (data: CreateDepartmentDto) => {
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
          name="name"
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

      <div className="field-control">
        <PositionTable control={control} setValue={setValue} getValues={getValues} watch={watch} />
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
