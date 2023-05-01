import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { CustomNoRowsOverlay, getColumns } from "./components";
import "./styles.scss";
import LoadingCustom from "components/LoadingCustom";
import { useAppSelector } from "hooks/useAppSelector";
import PaginationCustom from "components/PaginationCustom";
import { useAppDispatch } from "hooks/useAppDispatch";
import useConfirmMoldal from "hooks/useConfirmMoldal";
import { extraReducersUpdateDeviceIDStatus } from "store/slices/Main/Attendance-settings/actions/extraReducers";

const Table = () => {
    const dispatch = useAppDispatch();
    const { listOfDeviceID, page_number, total_pages, loading } = useAppSelector((state) => state.attendanceSettings);
    const { openConfirmModal } = useConfirmMoldal();

    const handleUpdateStatusClick = (id, agent_id, value) => {
        openConfirmModal("Xác nhận", "Bạn có cập nhật trạng thái cho thiết bị này không ?", () => {
            dispatch(extraReducersUpdateDeviceIDStatus({ id, status: value, agent_id }))
        })
    }

    return (
        <>
            <div className="attendance-settings--mobile-devices--table">
                <p className="quantity-ipAddress">
                    Có <span className="quantity">{0}</span> nhân viên trong danh sách
                </p>
                <Box sx={{ height: 250, width: "100%" }}>
                    <>
                        <DataGrid
                            disableColumnMenu
                            headerHeight={55}
                            rowHeight={65}
                            rows={listOfDeviceID}
                            columns={getColumns(handleUpdateStatusClick)}
                            getRowId={(row) => row.device_id}
                            rowsPerPageOptions={[5]}
                            disableSelectionOnClick={true}
                            hideFooter={true}
                            loading={loading}
                            components={{
                                Pagination: null,
                                NoRowsOverlay: CustomNoRowsOverlay,
                                LoadingOverlay: LoadingCustom,
                            }}
                        />
                        {listOfDeviceID.length > 0 && (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "right",
                                    padding: "16px 24px",
                                    backgroundColor: "#ffffff",
                                    borderTop: "1px solid #eeeeee",
                                }}
                            >
                                <PaginationCustom page={page_number} setPage={() => { }} totalPages={total_pages} />
                            </div>
                        )}
                    </>
                </Box>
            </div>
        </>
    );
};

export default Table;
