import { Box } from "@mui/system";
import { useEffect } from "react";
import { getColumns } from "./components";
import "./styles.scss";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import LoadingCustom from "components/LoadingCustom";
import NoRowsOverlayCustom from "components/NoRowsOverlayCustom";
import useConfirmMoldal from "hooks/useConfirmMoldal";
import { FormPaginationCustom } from "components/PaginationCustom/FormPaginationCustom";
import DataGridCustom from "components/DataGridCustom";
import { extraReducersDeleteNews } from "store/slices/Main/News/actions/extraReducers";
import { useNavigate } from "react-router-dom";
import { FormAction } from "forms/formAction";

type Props = {
    control: any
    handleSearch: any
}

const Table: React.FC<Props> = ({ control, handleSearch }) => {
    const navigate = useNavigate();
    const { listOfNews, totalPages, totalNews, loading, lastCreateSuccess, lastUpdateSuccess, lastDeleteSuccess } = useAppSelector(
        (state) => state.news
    );
    const dispatch = useAppDispatch();
    const { openConfirmModal } = useConfirmMoldal();

    useEffect(() => {
        handleSearch()
    }, [lastCreateSuccess, lastUpdateSuccess, lastDeleteSuccess]);

    useEffect(() => {
    }, [lastUpdateSuccess]);

    const handleUpdateClick = (id) => {
        navigate(`../news-detail/${FormAction.UPDATE}/${id}`)
    }

    const handleDeleteClick = (id) => {
        openConfirmModal("Xác nhận", "Bạn có muốn xóa bài viết này không ?", () => {
            dispatch(extraReducersDeleteNews(id))
        })
    }

    return (
        <>
            <div className="news-list-table">
                <p className="quantity-news">
                    Có <span className="quantity">{totalNews}</span> bài đăng trong
                    danh sách
                </p>
                <Box sx={{ height: 250, width: "100%" }}>
                    <>
                        <DataGridCustom
                            disableColumnMenu
                            headerHeight={55}
                            rowHeight={65}
                            rows={listOfNews}
                            columns={getColumns(handleUpdateClick, handleDeleteClick)}
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
