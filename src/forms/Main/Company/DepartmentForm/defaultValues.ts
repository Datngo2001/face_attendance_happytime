import {
  CreateDepartmentDto,
  Position,
} from "store/slices/Main/Departments/departmentsSlice";

export const defaultValuesPostion: Position = {
  id: null,
  department_id: "",
  is_manager: false,
  position_code: null,
  position_name: "",
};

export const defaultValues: CreateDepartmentDto = {
  name: "",
  department_parent_id: "null",
  positions: [defaultValuesPostion],
};
