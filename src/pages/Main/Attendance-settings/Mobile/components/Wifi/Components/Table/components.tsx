import { GridColumns } from "@mui/x-data-grid";
import { RowOptions } from "../RowOptions";
import DropMenu from "components/DropMenu";
import { OptionColumn } from "components/OptionColumn";
import ButtonSwitchCustom from "components/ButtonSwitchCustom";

export const getColumns = (handleUpdateClick: Function, handleDeleteClick: Function, handleUpdateStatusClick: Function): GridColumns => ([
    {
        field: "ip_name",
        headerName: "Tên IP Wi-Fi",
        // width: 150,
        flex: 0.3,
        sortable: false,
    },
    {
        field: "ip_address",
        headerName: "IP",
        // width: 150,
        flex: 0.4,
        sortable: false,
    },
    {
        field: "is_active",
        headerName: "Trạng thái hoạt động",
        headerAlign: "center",
        align: "center",
        flex: 0.5,
        sortable: false,
        renderCell: (params) => {
            return (
                <ButtonSwitchCustom
                    id={params.row._id}
                    checked={JSON.parse(params.row.is_active)}
                    handleClick={(id, value) => handleUpdateStatusClick(id, value)}
                    setValue={() => { }}
                />
            );
        },
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
