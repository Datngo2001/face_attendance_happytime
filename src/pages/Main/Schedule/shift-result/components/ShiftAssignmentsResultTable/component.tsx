import { GridColumns } from "@mui/x-data-grid";
import dayjs, { Dayjs } from "dayjs";
import { DateFormat } from "components/InputDate/default";
import ColumnName from "../ColumnName";
import HeaderWeekdays from "../HeaderWeekdays";
import { ResultCell } from "../ResultCell";

export const getColumns = (startDateStamp: number, endDateStamp: number): GridColumns => {

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
        result.push({
            field: date.format(DateFormat),
            renderHeader: () => {
                return <HeaderWeekdays day={date.day()} date={date.format("DD/MM")} />;
            },
            width: 150,
            sortable: false,
            headerAlign: "center",
            renderCell: (params) => (
                <ResultCell />
            ),
        });
    }

    return result
}