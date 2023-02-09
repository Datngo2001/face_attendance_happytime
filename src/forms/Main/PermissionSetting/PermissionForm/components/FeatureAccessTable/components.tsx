import { GridColumns } from "@mui/x-data-grid";
import FeatureCell from "../FeatureCell";
import AccessCell from "../AccessCell";

export const columns: GridColumns = [
    {
        field: "no",
        headerName: "STT",
        sortable: false,
    },
    {
        field: "features",
        headerName: "Tính năng",
        sortable: false,
        flex: 1,
        renderCell: (params) => {
            return (
                <>
                    <FeatureCell features={params.row.features} />
                </>
            );
        },
    },
    {
        field: "accesses",
        headerName: "Phân quyền",
        sortable: false,
        flex: 1,
        renderCell: (params) => {
            return (
                <>
                    <AccessCell accesses={params.row.accesses} />
                </>
            );
        },
    },
]