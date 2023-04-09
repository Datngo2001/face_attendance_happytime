import { createSlice } from "@reduxjs/toolkit";
import { extraReducersGetDepartments } from "./actions/extraReducers";

export type DepartmentsState = {
  status: string;
  loading: boolean;
  departments: Department[];
  total_department: number;
  total_position: number;
};

export type Department = {
  id?: string;
  department_children_ids?: string[];
  position_ids?: string[];
  children_position?: Position[];
  department_name: string;
  department_parent_id?: string;
  departments?: Department[];
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
          state.departments = payload.items;
        }
      );
  },
});

export const {} = departmentsSlice.actions;
export default departmentsSlice;
