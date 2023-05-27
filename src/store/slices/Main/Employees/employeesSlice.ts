// const baseUrl = process.env.REACT_APP_BASE_URL
import { createSlice } from "@reduxjs/toolkit";
import {
  extraReducersCreateInfoEmployee,
  extraReducersGetInfoEmployeeById,
  extraReducersGetListEmployees,
  extraReducersUpdateInfoEmployee,
} from "./actions/extraReducers";
import {
  reducersUpdateIdListInvitation,
  reducersUpdateIdOfSelectedStaff,
  reducersUpdateStatusState,
} from "./actions/reducers";

export type EmployeesState = {
  status: string;
  loading: boolean;
  listIdInvitation: [];
  listOfEmployees: Employee[];
  infoOfEmployee: Employee;
  idOfSelectedStaff: string;
  totalPages: number;
  totalEmployees: number;
};

export type Employee = {
  _id?: string;
  name: string;
  username?: string;
  avatar?: string;
  identify_id?: string;
  staying_address?: string;
  phone_number: string;
  company_mail?: string;
  issued_by?: string;
  residence_address?: string;
  school_name?: string;
  personal_mail: string;
  personal_tax_id?: string;
  major?: string;
  bank_account_number?: string;
  bank?: string;
  bank_branch?: string;
  working_branch?: string;
  note?: string;
  agent_code?: string;
  date_of_birth?: number;
  device_id: string;
  is_used_happy_time: boolean;
  stop_working_date?: number;
  tenant_id?: string;
  graduation_date?: number;
  gender?: Gender;
  married_status?: string;
  education_type?: string;
  issued_date?: number;
  start_working_date?: number;
  agent_status?: string;
  agent_type?: string;
  role: string;
  agent_position?: string;
  department: string;
  company_name?: string;
  position_id?: string;
};

export enum Gender {
  Female = "1",
  Male = "2",
}

const employeesSlice = createSlice({
  name: "employees",
  initialState: {
    status: "fail",
    loading: false,
    listIdInvitation: [],
    listOfEmployees: [],
    infoOfEmployee: {},
    idOfSelectedStaff: "",
    totalPages: 0,
    totalEmployees: 0,
  } as EmployeesState,
  reducers: {
    updateIdListInvitation: reducersUpdateIdListInvitation,
    updateIdOfSelectedStaff: reducersUpdateIdOfSelectedStaff,
    updateStatusState: reducersUpdateStatusState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        extraReducersGetListEmployees.pending,
        (state: EmployeesState) => {
          state.loading = true;
        }
      )
      .addCase(
        extraReducersGetListEmployees.fulfilled,
        (state: EmployeesState, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.totalPages = payload.total_pages;
            state.totalEmployees = payload.total_items;
            state.listOfEmployees = payload.items;
          }
        }
      );
    builder
      .addCase(
        extraReducersGetInfoEmployeeById.pending,
        (state: EmployeesState) => {
          state.loading = true;
        }
      )
      .addCase(
        extraReducersGetInfoEmployeeById.fulfilled,
        (state: EmployeesState, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.infoOfEmployee = payload;
          }
        }
      );
    builder.addCase(
      extraReducersUpdateInfoEmployee.fulfilled,
      (state: EmployeesState, { payload: { payload, message } }) => {
        if (message === "success") {
          state.status = "success";
        }
      }
    );
    builder.addCase(
      extraReducersCreateInfoEmployee.fulfilled,
      (state: EmployeesState, { payload: { payload, message } }) => {
        if (message === "success") {
          state.status = "success";
        }
      }
    );
  },
});

export const {
  updateIdListInvitation,
  updateIdOfSelectedStaff,
  updateStatusState,
} = employeesSlice.actions;
export default employeesSlice;
