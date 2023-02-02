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
  listOfEmployees: [];
  infoOfEmployee: any;
  idOfSelectedStaff: string;
  totalPages: number;
  totalEmployees: number;
};

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
