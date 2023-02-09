import { GridColumns } from "@mui/x-data-grid";
import DropMenu from "components/DropMenu";
import { OptionColumn } from "components/OptionColumn";
import RowOptions from "../RowOptions";

export const columns: GridColumns = [
    {
        field: "no",
        headerName: "STT",
        sortable: false,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: "name",
        headerName: "Vai trò",
        sortable: false,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: "description",
        headerName: "Mô tả",
        sortable: false,
        flex: 1,
        align: 'center',
        headerAlign: 'center',
    },
    {
        field: "",
        headerName: "Tác vụ",
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell: (params) => {
            return (
                <>
                    <DropMenu
                        parent={<OptionColumn id={params.row.id} />}
                        mt="2px"
                        ml="4px"
                    >
                        <RowOptions />
                    </DropMenu>
                </>
            );
        },
    },
]