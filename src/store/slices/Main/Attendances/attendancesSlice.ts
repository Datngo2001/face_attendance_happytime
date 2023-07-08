import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { renderWeekdays } from "utils";
import { reducersUpdateTimeStart } from "./actions/reducers";
import { extraReducersFaceTracking } from "./actions/extraReducers";

export type AttendancesState = {
  loading: boolean;
};

const attendancesSlices = createSlice({
  name: "attendances",
  initialState: {
    loading: false,

  } as AttendancesState,
  reducers: {
    updateTimeStart: reducersUpdateTimeStart,
  },
  extraReducers: (builder) => {
    builder
      .addCase(extraReducersFaceTracking.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(
        extraReducersFaceTracking.fulfilled,
        (state, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
          }
        }
      );
  },
});

export const { updateTimeStart } = attendancesSlices.actions;
export default attendancesSlices;
