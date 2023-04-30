import {
  CreateDepartmentDto,
  Position,
} from "store/slices/Main/Departments/departmentsSlice";

export const defaultValues: CreateDepartmentDto = {
  name: "",
  department_parent_id: "null",
  positions: [
    {
      id: null,
      department_id: "",
      is_manager: false,
      position_code: null,
      position_name: "",
    } as Position,
  ],
};
