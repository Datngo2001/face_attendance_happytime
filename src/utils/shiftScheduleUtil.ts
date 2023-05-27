import { DataFormat, ViewFormat } from "components/InputTime/default";
import { api } from "config/api";
import dayjs from "dayjs";
import { Shift, ShiftTypeName } from "store/slices/Main/Shifts/shiftsSlice";

export function getWorkingTime(shiftSchedule: Shift): string {
  let result = "";
  if (shiftSchedule.shift_type.name === ShiftTypeName.OFFICE.toString()) {
    result = `${dayjs(
      shiftSchedule.morning_working_time.from,
      DataFormat
    ).format(ViewFormat)} - ${dayjs(
      shiftSchedule.afternoon_working_time.to,
      DataFormat
    ).format(ViewFormat)}`;
  } else if (
    shiftSchedule.shift_type.name === ShiftTypeName.SINGLE.toString()
  ) {
    result = `${dayjs(shiftSchedule.working_time.from, DataFormat).format(
      ViewFormat
    )} - ${dayjs(shiftSchedule.working_time.to, DataFormat).format(
      ViewFormat
    )}`;
  }
  return result;
}

export function validateShift_ids(shift_ids: string[]): Promise<any> {
  return api
    .post("api/shift_schedule/validate", {
      shift_ids,
    })
    .catch((err) => console.log(err));
}
