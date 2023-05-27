import { GridColumns } from "@mui/x-data-grid";
import dayjs, { Dayjs } from "dayjs";
import { convertDayToNameDay } from "utils/convertFunctions";
import HeaderWeekdays from "./components/HeaderWeekdays";
import ColumnWeekdays from "./components/ColumnWeekdays";
import ColumnName from "./components/ColumnName";
import { DateFormat } from "components/InputDate/default";

export function getColumns(startDateStamp: number, endDateStamp: number): GridColumns {

    const startDate = dayjs(startDateStamp)
    const endDate = endDateStamp ? dayjs(endDateStamp) : startDate.add(1, "month")

    return [
        {
            field: "agent_name",
            headerName: "Tên nhân viên",
            sortable: false,
            width: 260,
            headerAlign: "center",
            renderCell: (params) => {
                return (
                    <ColumnName
                        img={params.row.avatar}
                        name={params.row.agent_name}
                        id={params.row.idEmployee}
                    />
                );
            },
        },
        ...getDateColumns(startDate, endDate)
    ]
}

function getDateColumns(startDate: Dayjs, endDate: Dayjs): GridColumns {
    const result: GridColumns = []

    for (let date = startDate; date <= endDate; date = date.add(1, "day")) {
        const isDayOff = (convertDayToNameDay({ type: 2, day: date.day(), }) === "sunday")
            || (convertDayToNameDay({ type: 2, day: date.day(), }) === "saturday")

        const dateString = date.format(DateFormat)

        result.push({
            field: date.format(DateFormat),
            renderHeader: () => {
                return <HeaderWeekdays day={date.day()} date={date.format("DD/MM")} />;
            },
            width: 150,
            sortable: false,
            headerAlign: "center",
            renderCell: (params) => {
                const result = params.row.check_attendance_results?.find(x => x.attendance_date === dateString)
                return (
                    <ColumnWeekdays
                        checkAttendanceResult={result}
                        isDayOff={isDayOff}
                    />
                );
            },
        });
    }

    return result
}