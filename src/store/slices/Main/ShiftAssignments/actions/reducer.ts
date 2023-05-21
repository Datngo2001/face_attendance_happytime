import {
  ShiftAssignment,
  ShiftAssignmentsState,
} from "../shiftAssignmentsSlice";

export const reducersSetCurrentShiftAssignment = (
  state: ShiftAssignmentsState,
  action: { payload: { shiftAssignment: ShiftAssignment } }
) => {
  state.shiftAssignment = action.payload.shiftAssignment;
};
