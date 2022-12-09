import NoRowsOverlayCustom from "../../../../../../../../components/NoRowsOverlayCustom";
import ColumnActiveStatus from "../ColumnActiveStatus";
import { ColumnOthers } from "../ColumnOthers";

export const columns = [
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
        field: "activeStatus",
        headerName: "Trạng thái hoạt động",
        headerAlign: "center",
        align: "center",
        flex: 0.5,
        sortable: false,
        renderCell: (params) => {
            return (
                <>
                    <ColumnActiveStatus stt={params.row._id} />
                </>
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
            // STATE
            // ******************************
            return (
                <>
                    <ColumnOthers code={params.row._id} />
                </>
            );
        },
    },
];

export const CustomNoRowsOverlay = () => {
    return <NoRowsOverlayCustom />;
};
