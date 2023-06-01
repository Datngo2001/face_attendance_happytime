import { createSlice } from "@reduxjs/toolkit";
import { extraReducersGetListShiftAssignmentsResult } from "./actions/extraReducers";
import { ShiftType } from "../Shifts/shiftsSlice";

export type ShiftAssignmentsResultState = {
  status: string;
  loading: boolean;
  listOfShiftAssignmentResult: ShiftAssignmentResult[];
  totalPages: number;
  totalShiftAssignmentResult: number;
};

export type ShiftAssignmentResultSearchParam = {
  page: number;
  size: number;
  date_range: {
    from: number;
    to: number;
  };
};

export type ShiftAssignmentResult = {
  agent_id: string;
  agent_name: string;
  avatar: string;
  position: string;
  shifts_by_date: ShiftsByDate[];
};

export type ShiftsByDate = {
  date: string;
  end: string;
  start: string;
  shift_code: string;
  shift_name: string;
  shift_schedule_id: string;
  shift_type: ShiftType;
}

const shiftAssignmentsResultSlice = createSlice({
  name: "shiftAssignmentsResult",
  initialState: {
    status: "fail",
    loading: false,
    totalPages: 1,
    totalShiftAssignmentResult: 0,
    listOfShiftAssignmentResult: [],
  } as ShiftAssignmentsResultState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        extraReducersGetListShiftAssignmentsResult.pending,
        (state: ShiftAssignmentsResultState) => {
          state.loading = true;
        }
      )
      .addCase(
        extraReducersGetListShiftAssignmentsResult.fulfilled,
        (
          state: ShiftAssignmentsResultState,
          { payload: { payload, message } }
        ) => {
          state.loading = false;
          if (message === "success") {
            state.totalPages = payload.total_pages;
            state.totalPages = payload.total_items;
            state.listOfShiftAssignmentResult = payload;
          }
        }
      );
  },
});

export const { } = shiftAssignmentsResultSlice.actions;
export default shiftAssignmentsResultSlice;
