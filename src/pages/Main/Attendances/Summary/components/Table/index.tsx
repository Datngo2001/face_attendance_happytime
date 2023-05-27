import { Box } from "@mui/material";
import "./styles.scss";
import { FormPaginationCustom } from "components/PaginationCustom/FormPaginationCustom";
import { useAppSelector } from "hooks/useAppSelector";
import DataGridCustom from "components/DataGridCustom";
import { getColumns } from "./columns";
import LoadingCustom from "components/LoadingCustom";
import NoRowsOverlayCustom from "components/NoRowsOverlayCustom";
import { useMemo, useRef } from "react";

export type Props = {
    control: any,
    watch: any
}

const Table: React.FC<Props> = ({ control, watch }) => {
    const { listOfReport, loading } = useAppSelector(state => state.reports)
    const tempId = useRef(0)
    const date_range = watch("date_range")

    const columns = useMemo(() => getColumns(date_range.from, date_range.to), [date_range.from, date_range.to])

    return (
        <>
            <div className="attendances--summary--table__wrapper">
                <p className="quantity-employees">
                    Có <span className="quantity">{listOfReport.length}</span> nhân viên trong
                    danh sách
                </p>
                <Box sx={{ height: 300, width: "100%" }}>
                    <DataGridCustom
                        disableColumnMenu
                        headerHeight={67}
                        rowHeight={67}
                        rows={listOfReport}
                        columns={columns}
                        getRowId={(row) => tempId.current += 1}
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick
                        hideFooter={true}
                        loading={loading}
                        components={{
                            Pagination: null,
                            LoadingOverlay: LoadingCustom,
                        }}
                    />
                    <FormPaginationCustom name="page" control={control} />
                </Box>
            </div>
        </>
    );
};

export default Table;
