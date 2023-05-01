import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getColumns } from "./components";
import "./styles.scss";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { extraReducersDeleteIPWifi, extraReducersGetListIPWifi, extraReducersUpdateIPWifiStatus } from "store/slices/Main/Attendance-settings/actions/extraReducers";
import LoadingCustom from "components/LoadingCustom";
import PaginationCustom from "components/PaginationCustom";
import { setCurrentIPWifi } from "store/slices/Main/Attendance-settings/attendanceSettingsSlice";
import ModalCustom from "components/ModalCustom";
import { WifiAddingForm } from "forms/Main/AttendancesSettings";
import { FormAction } from "forms/formAction";
import NoRowsOverlayCustom from "components/NoRowsOverlayCustom";
import useConfirmMoldal from "hooks/useConfirmMoldal";

const Table = () => {
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);

    const { listOfIPWifi, total_pages, total_items, loading, lastCreateSuccess, lastUpdateSuccess, lastDeleteSuccess } = useAppSelector(
        (state) => state.attendanceSettings
    );
    const dispatch = useAppDispatch();
    const { openConfirmModal } = useConfirmMoldal();

    useEffect(() => {
        dispatch(
            extraReducersGetListIPWifi({
                page: page - 1,
                size: process.env.REACT_APP_PAGE_SIZE,
            })
        );
    }, [lastCreateSuccess, lastUpdateSuccess, lastDeleteSuccess]);

    useEffect(() => {
        setOpen(false)
    }, [lastUpdateSuccess]);

    const handleUpdateClick = (id) => {
        return () => {
            dispatch(setCurrentIPWifi({ id }))
            setOpen(true)
        }
    }

    const handleUpdateStatusClick = (id, value) => {
        openConfirmModal("Xác nhận", "Bạn có muốn cập nhật trạng thái cho wifi này không ?", () => {
            dispatch(extraReducersUpdateIPWifiStatus({ id, is_active: value }))
        })
    }

    const handleDeleteClick = (id) => {
        return () => {
            openConfirmModal("Xác nhận", "Bạn có muốn xóa wifi này không ?", () => {
                dispatch(extraReducersDeleteIPWifi({ id }))
            })
        }
    }

    return (
        <>
            <div className="attendance-settings--mobile-wifi__table">
                <p className="quantity-ipAddress">
                    Có <span className="quantity">{total_items}</span> nhân viên trong
                    danh sách
                </p>
                <Box sx={{ height: 250, width: "100%" }}>
                    <>
                        <DataGrid
                            disableColumnMenu
                            headerHeight={55}
                            rowHeight={65}
                            rows={listOfIPWifi}
                            columns={getColumns(handleUpdateClick, handleDeleteClick, handleUpdateStatusClick)}
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
                        {listOfIPWifi.length > 0 && (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "right",
                                    padding: "16px 24px",
                                    backgroundColor: "#ffffff",
                                    borderTop: "1px solid #eeeeee",
                                }}
                            >
                                <PaginationCustom
                                    page={page}
                                    setPage={setPage}
                                    totalPages={total_pages}
                                />
                            </div>
                        )}
                    </>
                </Box>
            </div>
            <ModalCustom
                titleHeader={<span
                    style={{
                        color: "#212f3f",
                        fontSize: "20px",
                        textTransform: "uppercase",
                    }}
                >
                    Chỉnh sửa thông tin IP Wi-Fi
                </span>}
                state={open}
                setState={setOpen}
                footer={false}
                callback={() => { }}                >
                <WifiAddingForm action={FormAction.UPDATE} setOpen={setOpen} />
            </ModalCustom>
        </>
    );
};

export default Table;
