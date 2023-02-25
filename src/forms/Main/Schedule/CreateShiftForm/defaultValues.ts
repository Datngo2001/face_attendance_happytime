import { Shift } from "store/slices/Main/Shifts/shiftsSlice";

export const defaultValuesOffice: Shift = {
  _id: "",
  name: "",
  name_unsigned: "",
  shift_type: {
    id: "",
    name: "",
  },
  code: "",
  is_enabled: true,
  work_count: 1,
  partial_work_count: 0.5,
  is_using_check_in_limit: false,
  is_using_check_out_limit: false,
  config_in_late: {
    is_in_use: true,
    time: null,
    late_in_morning: "08:01:00",
    early_out_morning: null,
    late_in_afternoon: "13:01:00",
    early_out_afternoon: null,
  },
  config_out_early: {
    is_in_use: true,
    time: null,
    late_in_morning: null,
    early_out_morning: "11:59:00",
    late_in_afternoon: null,
    early_out_afternoon: "17:29:00",
  },
  working_time: {
    from: null,
    to: null,
  },
  allow_in_time: {
    from: null,
    to: null,
  },
  allow_out_time: {
    from: null,
    to: null,
  },
  afternoon_allow_in_time: {
    from: "12:00:00",
    to: "14:00:00",
  },
  afternoon_allow_out_time: {
    from: "16:00:00",
    to: "18:30:00",
  },
  afternoon_working_time: {
    from: "13:00:00",
    to: "17:30:00",
  },
  morning_allow_in_time: {
    from: "07:00:00",
    to: "09:00:00",
  },
  morning_allow_out_time: {
    from: "11:00:00",
    to: "11:00:00",
  },
  morning_working_time: {
    from: "08:00:00",
    to: "12:00:00",
  },
};

export const defaultValuesSingle: Shift = {
  _id: "",
  name: "",
  name_unsigned: "",
  shift_type: {
    id: "",
    name: "",
  },
  code: "",
  is_enabled: true,
  work_count: 0.5,
  partial_work_count: 0.5,
  is_using_check_in_limit: true,
  is_using_check_out_limit: true,
  config_in_late: {
    is_in_use: true,
    time: "08:01:00",
    late_in_morning: null,
    early_out_morning: null,
    late_in_afternoon: null,
    early_out_afternoon: null,
  },
  config_out_early: {
    is_in_use: true,
    time: "11:59:00",
    late_in_morning: null,
    early_out_morning: null,
    late_in_afternoon: null,
    early_out_afternoon: null,
  },
  working_time: {
    from: "08:00:00",
    to: "12:00:00",
  },
  allow_in_time: {
    from: "07:00:00",
    to: "09:00:00",
  },
  allow_out_time: {
    from: "11:00:00",
    to: "12:30:00",
  },
  afternoon_allow_in_time: {
    from: null,
    to: null,
  },
  afternoon_allow_out_time: {
    from: null,
    to: null,
  },
  afternoon_working_time: {
    from: null,
    to: null,
  },
  morning_allow_in_time: {
    from: null,
    to: null,
  },
  morning_allow_out_time: {
    from: null,
    to: null,
  },
  morning_working_time: {
    from: null,
    to: null,
  },
};
