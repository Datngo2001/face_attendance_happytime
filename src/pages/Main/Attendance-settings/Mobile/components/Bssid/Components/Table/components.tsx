import { GridColumns } from "@mui/x-data-grid";
import DropMenu from "components/DropMenu";
import { OptionColumn } from "components/OptionColumn";
import RowOptions from "../RowOptions";

export const getColumns = (handleUpdateClick: Function, handleDeleteClick: Function): GridColumns => ([
    {
        field: "bssid_name",
        headerName: "Tên BSSID",
        // width: 150,
        flex: 0.3,
        sortable: false,
    },
    {
        field: "bssid_address",
        headerName: "BSSID",
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
                        <RowOptions id={params.row._id} handleUpdateClick={handleUpdateClick} handleDeleteClick={handleDeleteClick} />
                    </DropMenu>
                </>
            );
        },
    },
]);