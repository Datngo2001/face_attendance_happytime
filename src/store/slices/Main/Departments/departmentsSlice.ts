import { createSlice } from "@reduxjs/toolkit";
import { extraReducersGetDepartments } from "./actions/extraReducers";

export type DepartmentsState = {
  status: string;
  loading: boolean;
  departmentTrees: Department[];
  total_department: number;
  total_position: number;
};

export type Department = {
  id?: string;
  department_children_ids?: string[];
  position_ids: string[];
  children_position: Position[];
  department_name: string;
  department_parent_id?: string;
  children_department: Department[];
};

export type Position = {
  id?: string;
  department_id: string;
  is_manager: boolean;
  position_code?: string;
  position_name: string;
};

const departmentsSlice = createSlice({
  name: "departments",
  initialState: {
    status: "fail",
    loading: false,
  } as DepartmentsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        extraReducersGetDepartments.pending,
        (state: DepartmentsState) => {
          state.loading = true;
        }
      )
      .addCase(
        extraReducersGetDepartments.fulfilled,
        (state: DepartmentsState, { payload: { payload, message } }) => {
          state.loading = false;
          state.total_department = payload.total_department;
          state.total_position = payload.total_position;

          let departments = payload.items as Department[];
          state.departmentTrees = [];
          let rootDepartments = departments.filter(
            (department) => department.department_parent_id == null
          );
          rootDepartments.forEach((root) =>
            state.departmentTrees.push(createDepartmentTree(root, departments))
          );
        }
      );
  },
});

function createDepartmentTree(
  rootDepartment: Department,
  departments: Department[]
): Department {
  rootDepartment.children_department = [];

  if (rootDepartment.department_children_ids?.length > 0) {
    rootDepartment.department_children_ids.forEach((childId) => {
      let child = departments.find((department) => department.id === childId);
      rootDepartment.children_department.push(
        createDepartmentTree(child, departments)
      );
    });
  }

  return rootDepartment;
}

export const {} = departmentsSlice.actions;
export default departmentsSlice;
