import { GridColumns } from "@mui/x-data-grid";
import dayjs from "dayjs";

export const getColumns = (): GridColumns => ([
    {
        field: "create_by.name",
        headerName: "Người phản hồi",
        // width: 150,
        flex: 0.4,
        sortable: false,
        renderCell: (params) => {
            return (<>{params.row.create_by.name}</>)
        }
    },
    {
        field: "new_title",
        headerName: "Tên bài viết",
        // width: 150,
        flex: 0.3,
        sortable: false,
    },
    {
        field: "reply_content",
        headerName: "Nội dung phản hồi",
        // width: 150,
        flex: 0.3,
        sortable: false,
    },
    {
        field: "created_date",
        headerName: "Ngày tạo",
        // width: 150,
        flex: 0.4,
        sortable: false,
        renderCell: (params) => {
            return (<>{params.row.created_date && dayjs(params.row.created_date).format("HH:mm DD/MM/YYYY")}</>)
        }
    },
]);
