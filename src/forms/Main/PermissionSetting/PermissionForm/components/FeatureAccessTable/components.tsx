import { GridColumns } from "@mui/x-data-grid";

export const columns: GridColumns = [
    {
        field: "no",
        headerName: "STT",
        sortable: false,
    },
    {
        field: "features",
        headerName: "Tính năng",
        sortable: false,
        flex: 1
    },
    {
        field: "accesses",
        headerName: "Phân quyền",
        sortable: false,
        flex: 1
    },
]