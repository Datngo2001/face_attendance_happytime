import { createSlice } from "@reduxjs/toolkit";
import {
  extraReducersCreateShiftAssignment,
  extraReducersGetListShiftAssignments,
  extraReducersGetShiftAssignmentById,
  extraReducersUpdateShiftAssignment,
  extraReducersDeleteShiftAssignment,
} from "./actions/extraReducers";
import { reducersSetCurrentShiftAssignment } from "./actions/reducer";

export type ShiftAssignmentsState = {
  status: string;
  loading: boolean;
  listOfShiftAssignment: ShiftAssignment[];
  totalPages: number;
  totalShifts: number;
  shiftAssignment?: ShiftAssignment;
  lastCreateSuccess: number;
  lastUpdateSuccess: number;
  lastDeleteSuccess: number;
};

export enum ApplyFor {
  company = "company",
  agent = "agent",
  position = "position",
  department = "department",
}

export enum TimeApply {
  use_day_range = "use_day_range",
  use_specific_day = "use_specific_day",
}

export type ShiftAssignment = {
  _id?: string;
  name: string;
  timeApply: TimeApply; // this feild for UI purpose only
  apply_for: ApplyFor;
  departments: string[];
  positions: string[];
  agents: string[];
  use_day_range: true;
  use_specific_day: true;
  day_range: {
    from: number;
    to: number;
    repeat_config: {
      repeat_time: string;
      repeat_method: string;
    };
    shifts: [
      {
        day: string;
        date: string;
        shift_ids: string[];
      }
    ];
    use_same_shift: boolean;
    use_separate_shift: boolean;
  };
  day_applied: {
    shifts: [
      {
        day: string;
        date: string;
        shift_ids: string[];
      }
    ];
    use_same_shift: boolean;
    use_separate_shift: boolean;
  };
};

const shiftAssignmentsSlice = createSlice({
  name: "shifts",
  initialState: {
    status: "fail",
    loading: false,
    totalPages: 1,
    totalShifts: 0,
    listOfShiftAssignment: [],
    shiftAssignment: null,
  } as ShiftAssignmentsState,
  reducers: {
    setCurrentShiftAssignment: reducersSetCurrentShiftAssignment,
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        extraReducersGetListShiftAssignments.pending,
        (state: ShiftAssignmentsState) => {
          state.loading = true;
        }
      )
      .addCase(
        extraReducersGetListShiftAssignments.fulfilled,
        (state: ShiftAssignmentsState, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.totalPages = payload.total_pages;
            state.totalShifts = payload.total_items;
            state.listOfShiftAssignment = payload.items;
          }
        }
      );
    builder
      .addCase(
        extraReducersCreateShiftAssignment.pending,
        (state: ShiftAssignmentsState) => {
          state.loading = true;
        }
      )
      .addCase(
        extraReducersCreateShiftAssignment.fulfilled,
        (
          state: ShiftAssignmentsState,
          { payload: { payload, message, onSuccess } }
        ) => {
          state.loading = false;
          state.lastCreateSuccess = Date.now();
          onSuccess();
        }
      );
    builder
      .addCase(
        extraReducersUpdateShiftAssignment.pending,
        (state: ShiftAssignmentsState) => {
          state.loading = true;
        }
      )
      .addCase(
        extraReducersUpdateShiftAssignment.fulfilled,
        (
          state: ShiftAssignmentsState,
          { payload: { payload, message, onSuccess } }
        ) => {
          state.loading = false;
          state.lastUpdateSuccess = Date.now();
          onSuccess();
        }
      );
    builder
      .addCase(
        extraReducersDeleteShiftAssignment.pending,
        (state: ShiftAssignmentsState) => {
          state.loading = true;
        }
      )
      .addCase(
        extraReducersDeleteShiftAssignment.fulfilled,
        (state: ShiftAssignmentsState, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.lastDeleteSuccess = Date.now();
          }
        }
      );
    builder
      .addCase(
        extraReducersGetShiftAssignmentById.pending,
        (state: ShiftAssignmentsState) => {
          state.loading = true;
        }
      )
      .addCase(
        extraReducersGetShiftAssignmentById.fulfilled,
        (state: ShiftAssignmentsState, { payload: { payload, message } }) => {
          state.loading = false;

          if (payload.use_day_range === true) {
            payload.timeApply = TimeApply.use_day_range;
          } else if (payload.use_specific_day === true) {
            payload.timeApply = TimeApply.use_specific_day;
          }

          state.shiftAssignment = payload;
        }
      );
  },
});

export const { setCurrentShiftAssignment } = shiftAssignmentsSlice.actions;
export default shiftAssignmentsSlice;
