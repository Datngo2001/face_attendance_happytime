import { createSlice } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import { renderWeekdays } from "../../../../utils";
import { reducersUpdateTimeStart } from "./actions/reducers";

const attendancesSlices = createSlice({
    name: "attendances",
    initialState: {
        loading: false,
        timeStart: dayjs(new Date().toString()).format("DD/MM/YYYY"),
        listWeekdays: renderWeekdays(dayjs(new Date().toString()).format("DD/MM/YYYY")),
    },
    reducers: {
        updateTimeStart: reducersUpdateTimeStart,
    },
    extraReducers: (builder) => {},
});

export const { updateTimeStart } = attendancesSlices.actions;
export default attendancesSlices;
