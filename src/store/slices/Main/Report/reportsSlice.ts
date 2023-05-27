import { createSlice } from "@reduxjs/toolkit";
import { extraReducersGetListReport } from "./actions/extraReducers";
import { Gender } from "../Employees/employeesSlice";

export type ReportsState = {
  loading: boolean;
  listOfReport: Report[];
  totalPages: number;
  totalReports: number;
};

export type ReportSearchParams = {
  agent_id: string;
  date_range: {
    from: number;
    to: number;
  };
  page: number;
  size: number;
};

export type Report = {
  _id?: string;
  agent_id: string;
  tenant_id: string;
  agent_name: string;
  gender: Gender;
  avatar: string;
  check_attendance_results: CheckAttendanceResult[];
};

export type CheckAttendanceResult = {
  attendance_date: string;
  checked_in_at: number;
  checked_out_at: number;
  work_count: number;
  is_late: boolean;
  is_check_out_soon: boolean;
};

export enum CheckAttendanceResultStatus {
  attendanceOnTime = 1,
  notAttendance = 3,
  error = 6,
}

const reportsSlice = createSlice({
  name: "reports",
  initialState: {
    loading: false,
    listOfReport: [],
    totalPages: 0,
    totalReports: 0,
  } as ReportsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(extraReducersGetListReport.pending, (state: ReportsState) => {
        state.loading = true;
      })
      .addCase(
        extraReducersGetListReport.fulfilled,
        (state: ReportsState, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.totalPages = payload.total_pages;
            state.totalReports = payload.total_items;
            state.listOfReport = payload;
          }
        }
      );
  },
});

export const {} = reportsSlice.actions;
export default reportsSlice;
