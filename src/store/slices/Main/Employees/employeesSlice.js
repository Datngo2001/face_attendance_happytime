// const baseUrl = process.env.REACT_APP_BASE_URL
import { createSlice } from "@reduxjs/toolkit";
import {
    extraReducersCreateInfoEmployee,
    extraReducersGetInfoEmployeeById,
    extraReducersGetListEmployees,
    extraReducersUpdateInfoEmployee,
} from "./actions/extraReducers";
import {
    reducersUpdateIdListInvitation,
    reducersUpdateIdOfSelectedStaff,
    reducersUpdateStatusState,
} from "./actions/reducers";

const employeesSlice = createSlice({
    name: "employees",
    initialState: {
        status: "fail",
        loading: false,
        listIdInvitation: [],
        listOfEmployees: [],
        infoOfEmployee: {},
        totalPages: 0,
        totalEmployees: 0,
    },
    reducers: {
        updateIdListInvitation: reducersUpdateIdListInvitation,
        updateIdOfSelectedStaff: reducersUpdateIdOfSelectedStaff,
        updateStatusState: reducersUpdateStatusState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(extraReducersGetListEmployees.pending, (state) => {
                state.loading = true;
            })
            .addCase(extraReducersGetListEmployees.fulfilled, (state, { payload }) => {
                state.loading = false;
                if (payload.message === "success") {
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
                state.loading = false;
                if (payload.message === "success") {
                    state.infoOfEmployee = payload.payload;
                }
            });
        builder
            .addCase(extraReducersUpdateInfoEmployee.fulfilled, (state, { payload }) => {
                if (payload.message === "success") {
                    state.status = "success";
                }
            });
        builder.addCase(extraReducersCreateInfoEmployee.fulfilled, (state, { payload }) => {
            if(payload.message === "success") {
                state.status = "success";
            }
        })
    },
});

export const { updateIdListInvitation, updateIdOfSelectedStaff, updateStatusState } =
    employeesSlice.actions;
export default employeesSlice;
