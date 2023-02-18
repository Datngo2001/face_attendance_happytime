import { createSlice } from "@reduxjs/toolkit";

export type ShiftsState = {
  status: string;
  loading: boolean;
  listOfShift: Shift[];
  totalPages: number;
  totalPermissions: number;
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
  _id: string;
  name: string;
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

const listFeatureGroup: ShiftType[] = [
  {
    _id: "1",
    name: "Ca hành chính",
  },
  {
    _id: "2",
    name: "Ca đơn",
  },
];

// ************************************************

const shiftsSlice = createSlice({
  name: "shifts",
  initialState: {
    status: "fail",
    loading: false,
    listOfShift: listOfShifts,
    listOfShiftType: listFeatureGroup,
    totalPages: 1,
    totalPermissions: 0,
  } as ShiftsState,
  reducers: {},
});

export const {} = shiftsSlice.actions;
export default shiftsSlice;
