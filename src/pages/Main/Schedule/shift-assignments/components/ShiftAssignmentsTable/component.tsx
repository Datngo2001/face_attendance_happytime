import { GridColumns } from "@mui/x-data-grid";
import DropMenu from "components/DropMenu";
import { DateFormat } from "components/InputDate/default";
import { OptionColumn } from "components/OptionColumn";
import dayjs from "dayjs";
import RowOptions from "../RowOptions";

export const getColumns = (deleteClick): GridColumns => ([
    {
        flex: 1,
        field: "name",
        headerName: "Tiêu đề",
        sortable: false,
    },
    {
        flex: 1,
        field: "1",
        headerName: "Đối tượng áp dụng",
        sortable: false,
        renderCell: (params) => (
            <div></div>
        )
    },
    {
        flex: 1,
        field: "2",
        headerName: "Thời gian áp dụng",
        sortable: false,
        renderCell: (params) => (
            <div></div>
        )
    },
    {
        flex: 1,
        field: "created_at",
        headerName: "Ngày tạo",
        sortable: false,
        renderCell: (params) => (
            <div>{dayjs(params.row.created_at).format(DateFormat)}</div>
        )
    },
    {
        flex: 0.5,
        field: "others",
        headerName: "",
        align: "center",
        sortable: false,
        renderCell: (params) => (
            <>
                <DropMenu
                    parent={<OptionColumn id={params.row._id} />}
                    mt="2px"
                    ml="4px"
                >
                    <RowOptions id={params.row._id} handleDelete={deleteClick} />
                </DropMenu>
            </>
        )
    },
])