import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import LoadingCustom from "../../../../../../../../components/LoadingCustom";
import PaginationCustom from "../../../../../../../../components/PaginationCustom";
import { columns, CustomNoRowsOverlay } from "./components";
import "./styles.scss";

const Table = () => {
    const listIPAddress = [
        {
            stt: 1,
            wifiIPName: "test",
            IPAdress: "198.162.110",
        },
        {
            stt: 2,
            wifiIPName: "test",
            IPAdress: "198.162.110",
        },
        {
            stt: 3,
            wifiIPName: "test",
            IPAdress: "198.162.110",
        },
    ];
    return (
        <>
            <div className="attendance-settings--mobile-wifi__table">
                <p className="quantity-ipAddress">
                    Có <span className="quantity">{0}</span> nhân viên trong danh sách
                </p>
                <Box sx={{ height: 250, width: "100%" }}>
                    <>
                        <DataGrid
                            disableColumnMenu
                            headerHeight={55}
                            rowHeight={65}
                            rows={listIPAddress}
                            columns={columns}
                            getRowId={(row) => row.stt}
                            rowsPerPageOptions={[5]}
                            disableSelectionOnClick={true}
                            hideFooter={true}
                            // loading={loading}
                            components={{
                                Pagination: false,
                                NoRowsOverlay: CustomNoRowsOverlay,
                                LoadingOverlay: LoadingCustom,
                            }}
                        />
                        {listIPAddress.length > 0 && (
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
