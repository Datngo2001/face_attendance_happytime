import { ConfirmModalState } from "../confirmModalSlice";

export const reducersOpenConfirmModal = (
  state: ConfirmModalState,
  action: { payload: { title; content; callback } }
) => {
  state.open = true;
  state.title = action.payload.title;
  state.content = action.payload.content;
  state.callback = action.payload.callback;
};

export const reducersCloseConfirmModal = (state: ConfirmModalState, action) => {
  state.open = false;
};
