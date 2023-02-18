import { GridColumns } from "@mui/x-data-grid";

export const columns: GridColumns = [
    {
        flex: 1,
        field: "is_enabled",
        headerName: "Trạng thái",
        sortable: false,
        align: "center",
        headerAlign: "center",
    },
    {
        flex: 1,
        field: "code",
        headerName: "Mã ca làm việc",
        sortable: false,
    },
    {
        flex: 2,
        field: "name",
        headerName: "Tên ca làm việc",
        sortable: false,
    },
]