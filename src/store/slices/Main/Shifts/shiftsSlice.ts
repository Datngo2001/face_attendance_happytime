import { createSlice } from "@reduxjs/toolkit";
import {
  extraReducersGetListShiftTypes,
  extraReducersGetListShifts,
} from "./actions/extraReducers";

export type ShiftsState = {
  status: string;
  loading: boolean;
  listOfShift: Shift[];
  totalPages: number;
  totalShifts: number;
  listOfShiftType: ShiftType[];
};

export type Shift = {
  _id: string;
  status: ShiftStatus;
  code: string;
  name: string;
  type: string;
  work_from: string;
  work_to: string;
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

export enum ShiftStatus {
  ON = 1,
  OFF = 2,
}

// TEST DATA
const listOfShifts: Shift[] = [
  {
    _id: "1",
    code: "12345",
    name: "123456789",
    status: ShiftStatus.ON,
    work_from: "08:00:00",
    work_to: "12:00:00",
    type: "1",
  },
  {
    _id: "2",
    code: "123asd45",
    name: "123456asdas789",
    status: ShiftStatus.ON,
    work_from: "08:00:00",
    work_to: "17:30:00",
    type: "2",
  },
];
// ************************************************

const shiftsSlice = createSlice({
  name: "shifts",
  initialState: {
    status: "fail",
    loading: false,
    listOfShift: listOfShifts,
    listOfShiftType: [],
    totalPages: 1,
    totalShifts: 0,
  } as ShiftsState,
  reducers: {},
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
  },
});

export const {} = shiftsSlice.actions;
export default shiftsSlice;
