import employeesSlice from "./Main/Employees/employeesSlice";
import authSlice from "./Authentication/authSlice";
import companySlice from "./Main/Company/companySlice";
import attendancesSlice from "./Main/Attendances/attendancesSlice";
import permissionsSlice from "./Main/Permission/permissionSlice";
import shiftsSlice from "./Main/Shifts/shiftsSlice";
import departmentsSlice from "./Main/Departments/departmentsSlice";
import { confirmModalSlice } from "./ConfirmModal/confirmModalSlice";
import shiftAssignmentsSlice from "./Main/ShiftAssignments/shiftAssignmentsSlice";
import shiftAssignmentsResultSlice from "./Main/ShiftAssignmentsResult/shiftAssignmentsResultSlice";
import newsCategoriesSlice from "./Main/NewsCategories/newsCategoriesSlice";
import newsSlice from "./Main/News/newsSlice";

export {
  employeesSlice,
  permissionsSlice,
  authSlice,
  companySlice,
  attendancesSlice,
  shiftsSlice,
  departmentsSlice,
  confirmModalSlice,
  shiftAssignmentsSlice,
  shiftAssignmentsResultSlice,
  newsCategoriesSlice,
  newsSlice
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
