import { ShiftsState } from "../shiftsSlice";

export const reducersResetShift = (state: ShiftsState) => {
  state.shift = null;
};
