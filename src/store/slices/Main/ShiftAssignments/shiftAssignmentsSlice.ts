import { createSlice } from "@reduxjs/toolkit";
import {
  extraReducersCreateShiftAssignment,
  extraReducersGetListShiftAssignments,
  extraReducersGetShiftAssignmentById,
  extraReducersUpdateShiftAssignment,
  extraReducersDeleteShiftAssignment,
} from "./actions/extraReducers";
import { reducersSetCurrentShiftAssignment } from "./actions/reducer";
import { SelectBoxOption } from "components/SelectCustom";

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

export enum DateApply {
  use_same_shift = "use_same_shift",
  use_separate_shift = "use_separate_shift",
}

export enum RepeatTime {
  week = "week",
  month = "month",
}

export enum RepeatMethod {
  weekly = "weekly",
  weekly2 = "weekly2",
  monthly = "monthly",
  monthly2 = "monthly2",
}

export const repeatTimeSelectOptions: SelectBoxOption[] = [
  {
    id: RepeatTime.week,
    name: "Tuần",
  },
  {
    id: RepeatTime.month,
    name: "Tháng",
  },
];

export const weekRepeatMethodSelectOptions: SelectBoxOption[] = [
  {
    id: RepeatMethod.weekly,
    name: "Hằng Tuần",
  },
  {
    id: RepeatMethod.weekly2,
    name: "Cách Tuần",
  },
];

export const monthRepeatMethodSelectOptions: SelectBoxOption[] = [
  {
    id: RepeatMethod.monthly,
    name: "Hằng Tháng",
  },
  {
    id: RepeatMethod.monthly2,
    name: "Cách Tháng",
  },
];

export type ShiftAssignment = {
  _id?: string;
  name: string;
  timeApply: TimeApply; // this feild for UI purpose only
  apply_for: ApplyFor;
  departments: string[];
  positions: string[];
  agents: string[];
  use_day_range: boolean;
  use_specific_day: boolean;
  day_range: {
    from: number;
    to: number;
    shift_ids: string[];
    use_same_shift: boolean;
    use_separate_shift: boolean;
    days: number[];
  };
  day_applied: {
    shifts: Shift[];
    use_same_shift: boolean;
    use_separate_shift: boolean;
  };
};

export type Shift = {
  date: string;
  shift_ids: string[];
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
          if (message === "success") {
            state.lastCreateSuccess = Date.now();
            onSuccess();
          }
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
          if (message === "success") {
            state.lastUpdateSuccess = Date.now();
            onSuccess();
          }
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
