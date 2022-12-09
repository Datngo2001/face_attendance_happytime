import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import LoadingCustom from "../../../../../../../../components/LoadingCustom";
import PaginationCustom from "../../../../../../../../components/PaginationCustom";
import { columns, CustomNoRowsOverlay } from "./components";
import "./styles.scss";

const Table = () => {
    // REDUX TOOLKIT
    const { listOfDeviceID, loading } = useSelector((state) => state.attendanceSettings);
    // ****************************

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
                            columns={columns}
                            getRowId={(row) => row._id}
                            rowsPerPageOptions={[5]}
                            disableSelectionOnClick={true}
                            hideFooter={true}
                            loading={loading}
                            components={{
                                Pagination: false,
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
                                <PaginationCustom
                                // page={page}
                                // setPage={setPage}
                                // totalPages={totalPages}
                                />
                            </div>
                        )}
                    </>
                </Box>
            </div>
        </>
    );
};

export default Table;
