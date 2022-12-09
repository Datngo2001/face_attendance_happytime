import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingCustom from "../../../../../../../../components/LoadingCustom";
import PaginationCustom from "../../../../../../../../components/PaginationCustom";
import { extraReducersGetListIPWifi } from "../../../../../../../../store/slices/Main/Attendance-settings/actions/extraReducers";
import { columns, CustomNoRowsOverlay } from "./components";
import "./styles.scss";

const Table = () => {
    // HOOK STATE
    const [page, setPage] = useState(1);
    // ****************************

    // REDUX TOOLKIT
    const { listOfIPWifi, totalPages, totalIPWifi, loading, shouldRender } = useSelector(
        (state) => state.attendanceSettings
    );
    const dispatch = useDispatch();
    // ****************************

    // HOOK EFFECT
    useEffect(() => {
        dispatch(
            extraReducersGetListIPWifi({
                page: page - 1,
                size: process.env.REACT_APP_PAGE_SIZE,
            })
        );
    }, [shouldRender]);
    // ****************************

    return (
        <>
            <div className="attendance-settings--mobile-wifi__table">
                <p className="quantity-ipAddress">
                    Có <span className="quantity">{totalIPWifi}</span> nhân viên trong
                    danh sách
                </p>
                <Box sx={{ height: 250, width: "100%" }}>
                    <>
                        <DataGrid
                            disableColumnMenu
                            headerHeight={55}
                            rowHeight={65}
                            rows={listOfIPWifi}
                            columns={columns}
                            getRowId={(row) => row._id}
                            rowsPerPageOptions={[10]}
                            disableSelectionOnClick={true}
                            hideFooter={true}
                            loading={loading}
                            components={{
                                Pagination: false,
                                NoRowsOverlay: CustomNoRowsOverlay,
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
                                    totalPages={totalPages}
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
