import { CompanyState } from "../companySlice";

export const reducersUpdateStatusState = (state: CompanyState, action) => {
  state.status = action.payload;
};
