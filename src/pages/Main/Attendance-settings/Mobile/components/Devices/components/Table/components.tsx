import { Tooltip } from "@mui/material";
import { GridColumns } from "@mui/x-data-grid";
import ButtonSwitchCustom from "components/ButtonSwitchCustom";
import NoRowsOverlayCustom from "components/NoRowsOverlayCustom";
import { convertTimestampToString } from "utils";

export const getColumns = (handleUpdateStatusClick): GridColumns => ([
    {
        field: "status",
        headerName: "Trạng thái",
        headerAlign: "center",
        align: "center",
        flex: 0.2,
        sortable: false,
        renderCell: (params) => {
            return (
                <ButtonSwitchCustom
                    id={params.row.device_id}
                    checked={JSON.parse(params.row.status)}
                    handleClick={(id, value) => handleUpdateStatusClick(id, params.row.agent_id, value)}
                    setValue={() => { }}
                />
            );
        },
    },
    {
        field: "agent_view.id",
        headerName: "Mã nhân viên",
        flex: 0.2,
        sortable: false,
        renderCell: (params) => (
            <div style={{ overflow: "hidden", textOverflow: "ellipsis" }}>
                {/* <Tooltip title={params.row.agent_view.id ?? ""}>{params.row.agent_view.id}</Tooltip> */}
                {params.row.agent_view.id}
            </div>
        )
    },
    {
        field: "agent_view.name",
        headerName: "Tên nhân viên",
        flex: 0.2,
        sortable: false,
        renderCell: (params) => (
            <>
                {params.row.agent_view.name}
            </>
        )
    },
    {
        field: "department.department_name",
        headerName: "Phòng ban",
        flex: 0.2,
        sortable: false,
        renderCell: (params) => (
            <>
                {params.row.department}
            </>
        )
    },
    {
        field: "device_id",
        headerName: "Device ID",
        flex: 0.2,
        sortable: false,
    },
    {
        field: "device_name",
        headerName: "Thiết bị",
        flex: 0.2,
        sortable: false,
    },
    {
        field: "created_date",
        headerName: "Thời gian tạo",
        flex: 0.2,
        sortable: false,
        renderCell: (params) => (
            <>
                {convertTimestampToString(params.row.created_date, "HH:MM:ss DD/MM/YYYY")}
            </>
        )
    },
]);

export const CustomNoRowsOverlay = () => {
    return <NoRowsOverlayCustom />;
};