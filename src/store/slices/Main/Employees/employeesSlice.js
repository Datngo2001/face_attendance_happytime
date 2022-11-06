// const baseUrl = process.env.REACT_APP_BASE_URL

import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
    name: "employeesSlice",
    initialState: {
        listIdInvitation: [],
    },
    reducers: {
        updateIdListInvitation: (state, action) => {
            state.listIdInvitation = action.payload;
        },
    },
    extraReducers: {},
});

export const { updateIdListInvitation } = employeesSlice.actions;
export default employeesSlice;
