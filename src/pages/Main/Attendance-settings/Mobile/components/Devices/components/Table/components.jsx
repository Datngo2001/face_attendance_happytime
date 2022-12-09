import NoRowsOverlayCustom from "../../../../../../../../components/NoRowsOverlayCustom";

export const columns = [
    {
        field: "status",
        headerName: "Trạng thái",
        headerAlign: "center",
        align: "center",
        flex: 0.2,
        sortable: false,
    },
    {
        field: "idEmployee",
        headerName: "Mã nhân viên",
        flex: 0.2,
        sortable: false,
    },
    {
        field: "name",
        headerName: "Tên nhân viên",
        flex: 0.2,
        sortable: false,
    },
    {
        field: "department",
        headerName: "Phòng ban",
        flex: 0.2,
        sortable: false,
    },
    {
        field: "deviceId",
        headerName: "Device ID",
        flex: 0.2,
        sortable: false,
    },
    {
        field: "device",
        headerName: "Thiết bị",
        flex: 0.2,
        sortable: false,
    },
    {
        field: "createdDate",
        headerName: "Thời gian tạo",
        flex: 0.2,
        sortable: false,
    },
];

export const CustomNoRowsOverlay = () => {
    return <NoRowsOverlayCustom />;
};