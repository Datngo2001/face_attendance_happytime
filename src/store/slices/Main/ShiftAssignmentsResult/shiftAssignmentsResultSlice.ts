import { createSlice } from "@reduxjs/toolkit";
import { extraReducersGetListShiftAssignmentsResult } from "./actions/extraReducers";

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
  _id?: string;
};

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
            state.listOfShiftAssignmentResult = payload.items;
          }
        }
      );
  },
});

export const {} = shiftAssignmentsResultSlice.actions;
export default shiftAssignmentsResultSlice;
