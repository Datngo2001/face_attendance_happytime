import { EmployeesState } from "../employeesSlice";

export const reducersUpdateIdListInvitation = (
  state: EmployeesState,
  action
) => {
  state.listIdInvitation = action.payload;
};

export const reducersUpdateIdOfSelectedStaff = (
  state: EmployeesState,
  action
) => {
  state.idOfSelectedStaff = action.payload;
};

export const reducersUpdateStatusState = (state: EmployeesState, action) => {
  state.status = action.payload;
};
