import ColumnDaysInWeek from "./ColumnWeekdays";
import ColumnName from "./ColumnName";
import HeaderWeekdays from "./HeaderWeekdays";

export const columns = [
    {
        field: "fullName",
        headerName: "Tên nhân viên",
        sortable: false,
        width: 260,
        headerAlign: "center",
        renderCell: (params) => {
            return (
                <ColumnName
                    img={params.row.img}
                    name={params.row.fullName}
                    id={params.row.idEmployee}
                />
            );
        },
    },
    {
        field: "monday",
        renderHeader: (params) => {
            return <HeaderWeekdays weekdays="Thứ 2" date="01/12" />;
        },
        sortable: false,
        flex: 1,
        headerAlign: "center",
        renderCell: (params) => {
            return (
                <ColumnDaysInWeek
                    morning={params.row.monday?.morning}
                    afternoon={params.row.monday?.afternoon}
                />
            );
        },
    },
    {
        field: "tuesday",
        renderHeader: (params) => {
            return <HeaderWeekdays weekdays="Thứ 3" date="02/12" />;
        },
        sortable: false,
        flex: 1,
        headerAlign: "center",
        renderCell: (params) => {
            return (
                <ColumnDaysInWeek
                    morning={params.row.tuesday?.morning}
                    afternoon={params.row.tuesday?.afternoon}
                />
            );
        },
    },
    {
        field: "wednesday",
        renderHeader: (params) => {
            return <HeaderWeekdays weekdays="Thứ 4" date="03/12" />;
        },
        sortable: false,
        flex: 1,
        headerAlign: "center",
        renderCell: (params) => {
            return (
                <ColumnDaysInWeek
                    morning={params.row.wednesday?.morning}
                    afternoon={params.row.wednesday?.afternoon}
                />
            );
        },
    },
    {
        field: "thursday",
        renderHeader: (params) => {
            return <HeaderWeekdays weekdays="Thứ 5" date="04/12" />;
        },
        sortable: false,
        flex: 1,
        headerAlign: "center",
        renderCell: (params) => {
            return (
                <ColumnDaysInWeek
                    morning={params.row.thursday?.morning}
                    afternoon={params.row.thursday?.afternoon}
                />
            );
        },
    },
    {
        field: "friday",
        renderHeader: (params) => {
            return <HeaderWeekdays weekdays="Thứ 6" date="05/12" />;
        },
        sortable: false,
        flex: 1,
        headerAlign: "center",
        renderCell: (params) => {
            return (
                <ColumnDaysInWeek
                    morning={params.row.friday?.morning}
                    afternoon={params.row.friday?.afternoon}
                />
            );
        },
    },
    {
        field: "saturday",
        renderHeader: (params) => {
            return <HeaderWeekdays weekdays="Thứ 7" date="06/12" />;
        },
        sortable: false,
        flex: 1,
        headerAlign: "center",
        renderCell: (params) => {
            return <ColumnDaysInWeek isDayOff={true} />;
        },
    },
    {
        field: "sunday",
        renderHeader: (params) => {
            return <HeaderWeekdays weekdays="Chủ nhật" date="07/12" />;
        },
        sortable: false,
        flex: 1,
        headerAlign: "center",
        renderCell: (params) => {
            return <ColumnDaysInWeek isDayOff={true} />;
        },
    },
];
