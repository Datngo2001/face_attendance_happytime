import authSlice from "./Authentication/authSlice";
import attendancesSlice from "./Main/Attendances/attendancesSlice";
import { confirmModalSlice } from "./ConfirmModal/confirmModalSlice";
import companySlice from "./Main/Company/companySlice";

export {
  authSlice,
  attendancesSlice,
  confirmModalSlice,
  companySlice
};

export class BaseState {
  loading: boolean;
  has_next: boolean;
  has_previous: boolean;
  next_page: number;
  page_number: number;
  page_size: number;
  previous_page: number;
  total_items: number;
  total_pages: number;
}
