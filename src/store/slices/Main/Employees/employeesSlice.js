// const baseUrl = process.env.REACT_APP_BASE_URL
import { createSlice } from "@reduxjs/toolkit";
import {
    extraReducersGetInfoEmployeeById,
    extraReducersGetListEmployees,
} from "./actions/extraReducers";
import {
    reducersUpdateIdListInvitation,
    reducersUpdateIdOfSelectedStaff,
} from "./actions/reducers";

const employeesSlice = createSlice({
    name: "employees",
    initialState: {
        loading: true,
        listIdInvitation: [],
        listOfEmployees: [],
        infoOfEmployee: {},
        totalPages: 0,
        totalEmployees: 0,
    },
    reducers: {
        updateIdListInvitation: reducersUpdateIdListInvitation,
        updateIdOfSelectedStaff: reducersUpdateIdOfSelectedStaff,
    },
    extraReducers: (builder) => {
        builder
            .addCase(extraReducersGetListEmployees.pending, (state) => {
                state.loading = true;
            })
            .addCase(extraReducersGetListEmployees.fulfilled, (state, { payload }) => {
                if (payload.message === "success") {
                    state.loading = false;
                    state.totalPages = payload.payload.total_pages;
                    state.totalEmployees = payload.payload.total_items;
                    state.listOfEmployees = payload.payload.items;
                }
            });
        builder
            .addCase(extraReducersGetInfoEmployeeById.pending, (state) => {
                state.loading = true;
            })
            .addCase(extraReducersGetInfoEmployeeById.fulfilled, (state, { payload }) => {
                if (payload.message === "success") {
                    state.loading = false;
                    state.infoOfEmployee = payload.payload;
                }
            });
    },
});

export const { updateIdListInvitation, updateIdOfSelectedStaff } = employeesSlice.actions;
export default employeesSlice;
