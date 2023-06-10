import { Box } from "@mui/system";
import { useEffect } from "react";
import { getColumns } from "./components";
import "./styles.scss";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import LoadingCustom from "components/LoadingCustom";
import NoRowsOverlayCustom from "components/NoRowsOverlayCustom";
import { FormPaginationCustom } from "components/PaginationCustom/FormPaginationCustom";
import DataGridCustom from "components/DataGridCustom";

type Props = {
    control: any
    handleSearch: any
}

const Table: React.FC<Props> = ({ control, handleSearch }) => {
    const { listOfNewsReplies, totalPages, totalNews, loading, } = useAppSelector(
        (state) => state.newsReplies
    );

    useEffect(() => {
        handleSearch()
    }, []);

    return (
        <>
            <div className="news-list-table">
                <p className="quantity-news">
                    Có <span className="quantity">{totalNews}</span> phản hồi trong
                    danh sách
                </p>
                <Box sx={{ height: 250, width: "100%" }}>
                    <>
                        <DataGridCustom
                            disableColumnMenu
                            headerHeight={55}
                            rowHeight={65}
                            rows={listOfNewsReplies}
                            columns={getColumns()}
                            getRowId={(row) => row._id}
                            rowsPerPageOptions={[10]}
                            disableSelectionOnClick={true}
                            hideFooter={true}
                            loading={loading}
                            components={{
                                // Pagination: false,
                                NoRowsOverlay: NoRowsOverlayCustom,
                                LoadingOverlay: LoadingCustom,
                            }}
                        />
                        <FormPaginationCustom control={control} name={"page"} totalPages={totalPages} />
                    </>
                </Box>
            </div>
        </>
    );
};

export default Table;
