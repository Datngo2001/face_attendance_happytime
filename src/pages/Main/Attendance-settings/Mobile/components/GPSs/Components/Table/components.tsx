import { GridColumns } from "@mui/x-data-grid";
import DropMenu from "components/DropMenu";
import { OptionColumn } from "components/OptionColumn";
import RowOptions from "../RowOptions";

export const getColumns = (handleUpdateClick: Function): GridColumns => ([
    {
        field: "stt",
        headerName: "STT",
        headerAlign: "center",
        // width: 165,
        align: "center",
        flex: 0.2,
        sortable: false,
    },
    {
        field: "gps_name",
        headerName: "Tên vị trí",
        // width: 150,
        flex: 0.3,
        sortable: false,
    },
    {
        field: "address",
        headerName: "Địa chỉ",
        // width: 150,
        flex: 0.4,
        sortable: false,
    },
    {
        field: "lat",
        headerName: "Vĩ độ",
        // width: 150,
        flex: 0.4,
        sortable: false,
    },
    {
        field: "lon",
        headerName: "Kinh độ",
        // width: 150,
        flex: 0.4,
        sortable: false,
    },
    {
        field: "radius",
        headerName: "Bán kính",
        // width: 150,
        flex: 0.4,
        sortable: false,
    },
    {
        field: "others",
        headerName: "",
        // width: 150,
        flex: 0.2,
        sortable: false,
        align: "center",
        renderCell: (params) => {
            return (
                <>
                    <DropMenu
                        parent={<OptionColumn id={params.row._id} />}
                        mt="2px"
                        ml="4px"
                    >
                        <RowOptions id={params.row._id} handleUpdateClick={handleUpdateClick} />
                    </DropMenu>
                </>
            );
        },
    },
]);