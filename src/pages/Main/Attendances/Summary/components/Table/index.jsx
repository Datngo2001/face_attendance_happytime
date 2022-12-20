import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import PaginationCustom from "../../../../../../components/PaginationCustom";
import { columns } from "./components/columns";
import { rows } from "./dataTest";
import "./styles.scss";

const Table = () => {
    // STATE
    const [page, setPage] = useState(1);
    // ****************************************************

    return (
        <>
            <div className="attendances--summary--table__wrapper">
                <p className="quantity-employees">
                    Có <span className="quantity">{rows.length}</span> nhân viên trong
                    danh sách
                </p>
                <Box sx={{ height: 350, width: "100%" }}>
                    <>
                        <DataGrid
                            disableColumnMenu
                            headerHeight={67}
                            rowHeight={67}
                            rows={rows}
                            columns={columns}
                            getRowId={(row) => row.id}
                            rowsPerPageOptions={[5]}
                            disableSelectionOnClick
                            hideFooter={true}
                            // loading={loading}
                            // components={{
                            //     Pagination: false,
                            //     NoRowsOverlay: CustomNoRowsOverlay,
                            //     LoadingOverlay: LoadingCustom,
                            // }}
                        />
                        {true > 0 && (
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
                                    totalPages={1}
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
