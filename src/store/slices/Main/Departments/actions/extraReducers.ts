import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "config/api";

export const extraReducersGetDepartments = createAsyncThunk(
  "getDepartments",
  async () => {
    return api
      .get(`/api/department/get_by_tenant`, {})
      .then((response: any) => {
        return {
          payload: response.payload,
          message: response.message,
        };
      })
      .catch((error) => error);
  }
);
