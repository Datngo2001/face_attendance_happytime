import { ShiftAssignment } from "store/slices/Main/ShiftAssignments/shiftAssignmentsSlice";

export const defaulValues: ShiftAssignment = {
  name: "",
  apply_for: null,
  departments: [],
  positions: [],
  agents: [],
  use_day_range: true,
  use_specific_day: true,
  day_range: {
    from: 0,
    to: 0,
    repeat_config: {
      repeat_time: "",
      repeat_method: "",
    },
    shifts: null,
    use_same_shift: false,
    use_separate_shift: false,
  },
  day_applied: {
    shifts: null,
    use_same_shift: false,
    use_separate_shift: false,
  },
};
