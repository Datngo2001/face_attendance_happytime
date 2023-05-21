import { createSlice } from "@reduxjs/toolkit";
import {
  extraReducersCreateDepartments,
  extraReducersDeleteDepartments,
  extraReducersGetDepartmentAndPositionList,
  extraReducersGetDepartments,
} from "./actions/extraReducers";
import { reducersSetCurrentDepartment } from "./actions/reducers";

export type DepartmentsState = {
  status: string;
  loading: boolean;

  departmentTrees: Department[];
  department: Department;
  departments: Department[];
  positions: Position[];
  total_department: number;
  total_position: number;
  lastCreateSuccess: number;
  lastUpdateSuccess: number;
  lastDeleteSuccess: number;
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

export type CreateDepartmentDto = {
  name: string;
  department_parent_id: string;
  positions: Position[];
};

const departmentsSlice = createSlice({
  name: "departments",
  initialState: {
    status: "fail",
    loading: false,
    positions: [],
    departments: [],
  } as DepartmentsState,
  reducers: {
    setCurrentDepartment: reducersSetCurrentDepartment,
  },
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
          if (message === "success") {
            state.total_department = payload.total_department;
            state.total_position = payload.total_position;

            let departments = payload.items as Department[];
            state.departmentTrees = [];
            let rootDepartments = departments.filter(
              (department) => department.department_parent_id == null
            );
            rootDepartments.forEach((root) =>
              state.departmentTrees.push(
                createDepartmentTree(root, departments)
              )
            );
          }
        }
      );

    builder
      .addCase(
        extraReducersGetDepartmentAndPositionList.pending,
        (state: DepartmentsState) => {
          state.loading = true;
        }
      )
      .addCase(
        extraReducersGetDepartmentAndPositionList.fulfilled,
        (state: DepartmentsState, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.total_department = payload.total_department;
            state.total_position = payload.total_position;

            let departments = payload.items as Department[];
            state.departments = departments;
            state.positions = [];

            departments.forEach((department) => {
              state.positions.push(...department.children_position);
            });
          }
        }
      );

    builder
      .addCase(
        extraReducersCreateDepartments.pending,
        (state: DepartmentsState) => {
          state.loading = true;
        }
      )
      .addCase(
        extraReducersCreateDepartments.fulfilled,
        (state: DepartmentsState, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.lastCreateSuccess = Date.now();
          }
        }
      );
    builder
      .addCase(
        extraReducersDeleteDepartments.pending,
        (state: DepartmentsState) => {
          state.loading = true;
        }
      )
      .addCase(
        extraReducersDeleteDepartments.fulfilled,
        (state: DepartmentsState, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.lastDeleteSuccess = Date.now();
          }
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

export const { setCurrentDepartment } = departmentsSlice.actions;
export default departmentsSlice;
