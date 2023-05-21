import {
  ApplyFor,
  ShiftAssignment,
  TimeApply,
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
      repeat_time: "",
      repeat_method: "",
    },
    shifts: [],
    use_same_shift: false,
    use_separate_shift: false,
  },
  day_applied: {
    shifts: [],
    use_same_shift: false,
    use_separate_shift: false,
  },
};
