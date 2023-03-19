import { createSlice } from "@reduxjs/toolkit";
import {
  extraReducersCreateShift,
  extraReducersGetListShiftTypes,
  extraReducersGetListShifts,
  extraReducersGetShiftById,
  extraReducersUpdateShift,
} from "./actions/extraReducers";
import { reducersResetShift } from "./actions/reducer";

export type ShiftsState = {
  status: string;
  loading: boolean;
  listOfShift: Shift[];
  totalPages: number;
  totalShifts: number;
  listOfShiftType: ShiftType[];
  shift: Shift;
};

export enum ShiftTypeName {
  OFFICE = "Ca hành chính",
  SINGLE = "Ca đơn",
  UNKNOW = "UNKNOW",
}

export type Shift = {
  _id?: string;
  name: string;
  name_unsigned?: string;
  shift_type: {
    id: string;
    name: string;
  };
  code: string;
  is_enabled: true;
  work_count: number;
  partial_work_count: number;
  is_using_check_in_limit: boolean;
  is_using_check_out_limit: boolean;
  config_in_late: ConfigLateOrEarly;
  config_out_early: ConfigLateOrEarly;
  working_time: TimeBox;
  allow_in_time: TimeBox;
  allow_out_time: TimeBox;
  afternoon_allow_in_time: TimeBox;
  afternoon_allow_out_time: TimeBox;
  afternoon_working_time: TimeBox;
  morning_allow_in_time: TimeBox;
  morning_allow_out_time: TimeBox;
  morning_working_time: TimeBox;
};

export type TimeBox = {
  from: string;
  to: string;
};

export type ConfigLateOrEarly = {
  is_in_use: boolean;
  time: string;
  late_in_morning: string;
  early_out_morning: string;
  late_in_afternoon: string;
  early_out_afternoon: string;
};

export type ShiftType = {
  no: number;
  _id: string;
  create_by: number;
  created_date: number;
  description: string;
  is_deleted: boolean;
  last_update_by: number;
  last_updated_date: number;
  schedule_name: string;
  tenant_id: string;
};

const shiftsSlice = createSlice({
  name: "shifts",
  initialState: {
    status: "fail",
    loading: false,
    listOfShift: [],
    listOfShiftType: [],
    totalPages: 1,
    totalShifts: 0,
  } as ShiftsState,
  reducers: {
    resetShift: reducersResetShift,
  },
  extraReducers: (builder) => {
    builder
      .addCase(extraReducersGetListShifts.pending, (state: ShiftsState) => {
        state.loading = true;
      })
      .addCase(
        extraReducersGetListShifts.fulfilled,
        (state: ShiftsState, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.totalPages = payload.total_pages;
            state.totalShifts = payload.total_items;
            state.listOfShift = payload.items;
          }
        }
      );
    builder
      .addCase(extraReducersGetListShiftTypes.pending, (state: ShiftsState) => {
        state.loading = true;
      })
      .addCase(
        extraReducersGetListShiftTypes.fulfilled,
        (state: ShiftsState, { payload: { payload, message } }) => {
          state.loading = false;
          if (message === "success") {
            state.listOfShiftType = payload.map((item, index) => ({
              no: index + 1,
              ...item,
            }));
          }
        }
      );
    builder
      .addCase(extraReducersCreateShift.pending, (state: ShiftsState) => {
        state.loading = true;
      })
      .addCase(
        extraReducersCreateShift.fulfilled,
        (state: ShiftsState, { payload: { payload, message, onSuccess } }) => {
          state.loading = false;
          onSuccess();
        }
      );
    builder
      .addCase(extraReducersUpdateShift.pending, (state: ShiftsState) => {
        state.loading = true;
      })
      .addCase(
        extraReducersUpdateShift.fulfilled,
        (state: ShiftsState, { payload: { payload, message, onSuccess } }) => {
          state.loading = false;
          onSuccess();
        }
      );
    builder
      .addCase(extraReducersGetShiftById.pending, (state: ShiftsState) => {
        state.loading = true;
      })
      .addCase(
        extraReducersGetShiftById.fulfilled,
        (state: ShiftsState, { payload: { payload, message } }) => {
          state.loading = false;
          state.shift = payload;
        }
      );
  },
});

export const { resetShift } = shiftsSlice.actions;
export default shiftsSlice;
