export const reducersUpdateIdListInvitation = (state, action) => {
    state.listIdInvitation = action.payload;
};

export const reducersUpdateIdOfSelectedStaff = (state, action) => {
    state.idOfSelectedStaff = action.payload;
};
