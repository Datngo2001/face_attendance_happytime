import { Department, DepartmentsState } from "../departmentsSlice";

export const reducersSetCurrentDepartment = (
  state: DepartmentsState,
  action: { payload: { department: Department } }
) => {
  state.department = action.payload.department;
};
