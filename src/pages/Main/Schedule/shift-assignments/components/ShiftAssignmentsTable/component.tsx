import { GridColumns } from "@mui/x-data-grid";
import DropMenu from "components/DropMenu";
import { DateFormat } from "components/InputDate/default";
import { OptionColumn } from "components/OptionColumn";
import dayjs from "dayjs";
import RowOptions from "../RowOptions";
import { ApplyFor } from "store/slices/Main/ShiftAssignments/shiftAssignmentsSlice";
import { LabelResult } from "utils/getLabelUtil";
import { Stack } from "@mui/material";
import { Department, Position } from "store/slices/Main/Departments/departmentsSlice";

export const getColumns = (deleteClick, employeeLabels: LabelResult[], departments: Department[], positions: Position[]): GridColumns => ([
    {
        flex: 1,
        field: "name",
        headerName: "Tiêu đề",
        sortable: false,
    },
    {
        flex: 1,
        field: "apply_for",
        hide: true
    },
    {
        flex: 1,
        field: "agents",
        hide: true
    },
    {
        flex: 1,
        field: "1",
        headerName: "Đối tượng áp dụng",
        sortable: false,
        renderCell: (params) => {
            switch (params.row.apply_for) {
                case ApplyFor.company:
                    return (
                        <div className="apply_for_item company">Toàn công ty</div>
                    )
                case ApplyFor.agent:
                    return (
                        <Stack direction={"row"} flexWrap={"wrap"} gap={1} spacing={1}>
                            {params.row.agents?.map(agent => (
                                <div className="apply_for_item agent" key={agent}>
                                    {employeeLabels.find(x => x.id === agent)?.label ?? ""}
                                </div>
                            ))}
                        </Stack>
                    )
                case ApplyFor.department:
                    return (
                        <Stack direction={"row"} flexWrap={"wrap"} gap={1} spacing={1}>
                            {params.row.departments?.map(department => (
                                <div className="apply_for_item agent" key={department}>
                                    {departments.find(x => x.id === department)?.department_name ?? ""}
                                </div>
                            ))}
                        </Stack>
                    )
                case ApplyFor.position:
                    return (
                        <Stack direction={"row"} flexWrap={"wrap"} gap={1} spacing={1}>
                            {params.row.positions?.map(position => (
                                <div className="apply_for_item agent" key={position}>
                                    {positions.find(x => x.id === position)?.position_name ?? ""}
                                </div>
                            ))}
                        </Stack>
                    )
                default:
                    return (
                        <div></div>
                    )
            }
        }
    },
    {
        flex: 1,
        field: "day_applied",
        hide: true
    },
    {
        flex: 1,
        field: "day_range",
        hide: true
    },
    {
        flex: 1,
        field: "use_day_range",
        hide: true
    },
    {
        flex: 1,
        field: "use_specific_day",
        hide: true
    },
    {
        flex: 1,
        field: "2",
        headerName: "Thời gian áp dụng",
        sortable: false,
        renderCell: (params) => {
            return (
                <div>
                    {params.row.use_day_range && (<div style={{ flex: 1, textAlign: "center" }}>{dayjs(params.row.day_range.from).format(DateFormat)} - {dayjs(params.row.day_range.to).format(DateFormat)}</div>)}
                    {params.row.use_specific_day && (<Stack direction={"row"} flexWrap={"wrap"} gap={1} spacing={1}>
                        {params.row.day_applied.dates.map(date => <div className="apply_for_item " key={date}>{date}</div>)}
                    </Stack>)}
                </div>
            )
        }
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