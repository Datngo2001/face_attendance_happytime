import {
  ApplyFor,
  ShiftAssignment,
  TimeApply,
  repeatTimeSelectOptions,
  weekRepeatMethodSelectOptions,
} from "store/slices/Main/ShiftAssignments/shiftAssignmentsSlice";

export const defaulValues: ShiftAssignment = {
  name: "",
  apply_for: ApplyFor.company,
  timeApply: TimeApply.use_day_range,
  departments: [],
  positions: [],
  agents: [],
  use_day_range: true,
  use_specific_day: true,
  day_range: {
    from: Date.now(),
    to: 0,
    repeat_config: {
      repeat_time: repeatTimeSelectOptions[0].id.toString(),
      repeat_method: weekRepeatMethodSelectOptions[0].id.toString(),
    },
    shifts: [],
    use_same_shift: true,
    use_separate_shift: false,
    days: [],
  },
  day_applied: {
    shifts: [],
    use_same_shift: true,
    use_separate_shift: false,
  },
};
