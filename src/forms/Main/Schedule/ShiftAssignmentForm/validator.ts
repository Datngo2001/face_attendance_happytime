import { validateShift_ids } from "utils/shiftScheduleUtil";
import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Không được bỏ trống"),
  apply_for: yup.string().required("Không được bỏ trống"),
  departments: yup.array().required("Không được bỏ trống"),
  day_range: yup.object().shape({
    shift_ids: yup
      .array()
      .test("validate_day_range_shift_ids", async (value, testContext) => {
        if (value?.length > 0) {
          let res = await validateShift_ids(value);
          if (res.status < 0) {
            return testContext.createError({ message: res.payload });
          } else {
            return true;
          }
        } else {
          return true;
        }
      }),
  }),
  day_applied: yup.object().shape({
    shift_ids: yup
      .array()
      .test("validate_day_range_shift_ids", async (value, testContext) => {
        if (value?.length > 0) {
          let res = await validateShift_ids(value);
          if (res.status < 0) {
            return testContext.createError({ message: res.payload });
          } else {
            return true;
          }
        } else {
          return true;
        }
      }),
  }),
});
