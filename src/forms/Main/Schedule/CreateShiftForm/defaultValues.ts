import { Shift } from "store/slices/Main/Shifts/shiftsSlice";

export const defaultValues: Shift = {
  _id: "",
  name: "",
  name_unsigned: "",
  shift_type: {
    id: "",
    name: "",
  },
  code: "",
  is_enabled: true,
  work_count: 0,
  partial_work_count: 0,
  is_using_check_in_limit: true,
  is_using_check_out_limit: true,
  config_in_late: {
    is_in_use: true,
    time: "",
    late_in_morning: "",
    early_out_morning: "",
    late_in_afternoon: "",
    early_out_afternoon: "",
  },
  config_out_early: {
    is_in_use: true,
    time: "",
    late_in_morning: "",
    early_out_morning: "",
    late_in_afternoon: "",
    early_out_afternoon: "",
  },
  working_time: {
    from: "",
    to: "",
  },
  allow_in_time: {
    from: "",
    to: "",
  },
  allow_out_time: {
    from: "",
    to: "",
  },
  afternoon_allow_in_time: {
    from: "",
    to: "",
  },
  afternoon_allow_out_time: {
    from: "",
    to: "",
  },
  afternoon_working_time: {
    from: "",
    to: "",
  },
  morning_allow_in_time: {
    from: "",
    to: "",
  },
  morning_allow_out_time: {
    from: "",
    to: "",
  },
  morning_working_time: {
    from: "",
    to: "",
  },
};
