import { renderWeekdays } from "../../../../../utils";

export const reducersUpdateTimeStart = (state, action) => {
    state.listWeekdays = renderWeekdays(action.payload);
};
