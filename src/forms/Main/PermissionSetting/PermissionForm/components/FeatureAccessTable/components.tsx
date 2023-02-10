import { GridColumns } from "@mui/x-data-grid";
import FeatureCell from "../FeatureCell";
import AccessCell from "../AccessCell";

export const getColumns = (handleOpenCloseFeature): GridColumns => {
    return [
        {
            field: "no",
            headerName: "STT",
            sortable: false,
            renderCell: (params) => {
                return (
                    <div style={{ padding: "0px 10px" }}>
                        {params.row.no}
                    </div>
                );
            },
        },
        {
            field: "features",
            headerName: "Tính năng",
            sortable: false,
            flex: 1,
            renderCell: (params) => {
                return (
                    <>
                        <FeatureCell
                            isOpen={params.row.isOpen}
                            features={params.row.features}
                            onFeatureGroupClick={handleOpenCloseFeature(params.row.no)} />
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
                        <AccessCell
                            isOpen={params.row.isOpen}
                            accesses={params.row.accesses} />
                    </>
                );
            },
        },
    ]
}