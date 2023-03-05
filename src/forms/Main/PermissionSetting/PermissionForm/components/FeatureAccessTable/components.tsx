import { GridColumns } from "@mui/x-data-grid";
import FeatureCell from "../FeatureCell";
import AccessCell from "../AccessCell";

export const getColumns = (handleOpenCloseFeature, onGroupAccessSelect, onFeatureAccessSelect, control): GridColumns => {
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
            field: "_ids",
            hide: true
        },
        {
            field: "allowAccessTypes",
            hide: true
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
                            control={control}
                            _ids={params.row._ids}
                            isOpen={params.row.isOpen}
                            accesses={params.row.accesses}
                            allowAccessTypes={params.row.allowAccessTypes}
                            onFeatureAccessSelect={onFeatureAccessSelect}
                            onGroupAccessSelect={onGroupAccessSelect} />
                    </>
                );
            },
        },
    ]
}