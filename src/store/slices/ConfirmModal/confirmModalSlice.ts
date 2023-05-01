import { createSlice } from "@reduxjs/toolkit";
import {
  reducersCloseConfirmModal,
  reducersOpenConfirmModal,
} from "./actions/reducers";

export type ConfirmModalState = {
  open: boolean;
  title: string;
  content: string;
  callback: any;
};

export const defaultConfirmModalState: ConfirmModalState = {
  open: false,
  title: "",
  content: "",
  callback: () => {},
};

export const confirmModalSlice = createSlice({
  name: "confirmModal",
  initialState: defaultConfirmModalState,
  reducers: {
    openConfirmModal: reducersOpenConfirmModal,
    closeConfirmModal: reducersCloseConfirmModal,
  },
  extraReducers: (builder) => {},
});

export const { openConfirmModal, closeConfirmModal } =
  confirmModalSlice.actions;
