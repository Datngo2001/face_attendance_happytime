import { AuthState } from "../../authSlice";

export const reducersUpdateStatusState = (state: AuthState, action) => {
  state.status = action.payload;
};
