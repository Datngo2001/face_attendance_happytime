// const baseUrl = process.env.REACT_APP_BASE_URL
import { createSlice } from "@reduxjs/toolkit";
import {
    reducersUpdateIdListInvitation,
    reducersUpdateIdOfSelectedStaff,
} from "./actions/reducers";

const employeesSlice = createSlice({
    name: "employeesSlice",
    initialState: {
        listIdInvitation: [],
        idOfSelectedStaff: "",
    },
    reducers: {
        updateIdListInvitation: reducersUpdateIdListInvitation,
        updateIdOfSelectedStaff: reducersUpdateIdOfSelectedStaff,
    },
    extraReducers: {},
});

export const { updateIdListInvitation, updateIdOfSelectedStaff } = employeesSlice.actions;
export default employeesSlice;
