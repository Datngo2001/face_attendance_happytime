import DropMenu from "../../../../../../../../components/DropMenu";
import ModalCustom from "../../../../../../../../components/ModalCustom";
import NoRowsOverlayCustom from "../../../../../../../../components/NoRowsOverlayCustom";
import { WifiAddingForm } from "../../../../../../../../forms/Main/AttendancesSettings";
import ColumnActiveStatus from "../ColumnActiveStatus";
import { ColumnOthers, InnerButtonOthers } from "../ColumnOthers";

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
        field: "wifiIPName",
        headerName: "Tên IP Wi-Fi",
        // width: 150,
        flex: 0.3,
        sortable: false,
    },
    {
        field: "IPAdress",
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
                    <ColumnActiveStatus stt={params.row.stt} />
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
                    <ColumnOthers stt={params.row.stt} />
                </>
            );
        },
    },
];

export const CustomNoRowsOverlay = () => {
    return <NoRowsOverlayCustom />;
};
