import { createSlice } from "@reduxjs/toolkit";
import { extraReducersGetInfoUser } from "./actions/extraReducers";

export type UserInfor = {
  name: string;
  avatar: string;
  role: number;
};

export type GlobalState = {
  status: string;
  loading: boolean;
  userInfor: UserInfor;
};

export const globalSlice = createSlice({
  name: "global",
  initialState: {
    status: "fail",
    loading: false,
    userInfor: {} as UserInfor,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      extraReducersGetInfoUser.fulfilled,
      (state, { payload }) => {
        if (payload.message === "success") {
          state.userInfor = payload.payload;
        }
      }
    );
  },
});
