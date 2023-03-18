import { GridColumns } from "@mui/x-data-grid";
import ButtonSwitchCustom from "components/ButtonSwitchCustom";
import DropMenu from "components/DropMenu";
import { OptionColumn } from "components/OptionColumn";
import { ShiftTypeName } from "store/slices/Main/Shifts/shiftsSlice";
import RowOptions from "../RowOptions";

export const columns: GridColumns = [
    {
        flex: 1,
        field: "is_enabled",
        headerName: "Trạng thái",
        sortable: false,
        align: "center",
        headerAlign: "center",
        renderCell: (params) => {
            return <ButtonSwitchCustom id="" checked={params.row.is_enabled} setValue={() => { }} />;
        },
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
    {
        flex: 1,
        field: "time",
        headerName: "Thời gian làm việc",
        sortable: false,
        renderCell: (params) => {
            return <div className="column-working-time">
                {params.row.shift_type.name === ShiftTypeName.OFFICE.toString() &&
                    <span>
                        {params.row.morning_working_time.from} - {params.row.afternoon_working_time.from}
                    </span>
                }
                {params.row.shift_type.name === ShiftTypeName.SINGLE.toString() &&
                    <span>
                        {params.row.working_time.from} - {params.row.working_time.from}
                    </span>
                }
            </div>;
        },
    },
    {
        flex: 1,
        field: "shift_type.name",
        headerName: "Loại ca",
        sortable: false,
        renderCell: (params) => {
            return <div className="column-shift-type">{params.row.shift_type.name}</div>;
        },
    },
    {
        flex: 0.5,
        field: "others",
        headerName: "",
        align: "center",
        sortable: false,
        renderCell: (params) => {
            return (
                <>
                    <DropMenu
                        parent={<OptionColumn id={params.row._id} />}
                        mt="2px"
                        ml="4px"
                    >
                        <RowOptions id={params.row._id} typeId={params.row.shift_type.id} />
                    </DropMenu>
                </>
            );
        },
    },
]