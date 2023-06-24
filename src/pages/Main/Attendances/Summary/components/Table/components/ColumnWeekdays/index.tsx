import { CheckAttendanceResult, CheckAttendanceResultStatus } from "store/slices/Main/Report/reportsSlice";
import "./styles.scss";
import { useMemo } from "react";

type Props = {
    checkAttendanceResult: CheckAttendanceResult
    morning?: number
    afternoon?: number
    isDayOff: boolean
}

const ColumnWeekdays: React.FC<Props> = ({ checkAttendanceResult, morning = 6, afternoon = 6, isDayOff = false }) => {

    const checkAttendanceResultStatus = useMemo(() => {
        if (!checkAttendanceResult) {
            return CheckAttendanceResultStatus.notAttendance
        } else if (checkAttendanceResult.is_check_out_soon) {
            return CheckAttendanceResultStatus.attendanceWrongTime
        }
        return CheckAttendanceResultStatus.attendanceOnTime
    }, [checkAttendanceResult])

    return (
        <>
            <div
                className={`attendances--summary--table--column-weekdays__wrapper ${morning === 6 && afternoon === 6 && !isDayOff ? "no-timekeeping" : ""
                    } ${isDayOff ? "day-off" : ""}`}
            >
                {!isDayOff && (
                    <>
                        <div className="content">
                            <span className="label">{checkAttendanceResult?.work_count ?? 0}</span>
                            <div className={`icon type-${checkAttendanceResultStatus}`}></div>
                        </div>
                        {/* <div className="afternoon">
                            <span className="label">CH</span>
                            <div className={`icon type-${afternoon}`}></div>
                        </div> */}
                    </>
                )}
            </div>
        </>
    );
};

export default ColumnWeekdays;
