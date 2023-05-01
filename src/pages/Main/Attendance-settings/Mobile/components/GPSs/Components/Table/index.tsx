import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { getColumns } from "./components";
import "./styles.scss";
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";
import PaginationCustom from "components/PaginationCustom";
import LoadingCustom from "components/LoadingCustom";
import { extraReducersDeleteGPSConfig, extraReducersGetListGPSConfig } from "store/slices/Main/Attendance-settings/actions/extraReducers";
import NoRowsOverlayCustom from "components/NoRowsOverlayCustom";
import ModalCustom from "components/ModalCustom";
import { setCurrentGPDConfig } from "store/slices/Main/Attendance-settings/attendanceSettingsSlice";
import GPSAddingForm from "forms/Main/AttendancesSettings/Mobile/GPS";
import { FormAction } from "forms/formAction";

const Table = () => {
    // HOOK STATE
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    // ****************************

    // REDUX TOOLKIT
    const { listOfGPSConfig, total_pages, total_items, loading, lastCreateSuccess, lastDeleteSuccess, lastUpdateSuccess } = useAppSelector(
        (state) => state.attendanceSettings
    );
    const dispatch = useAppDispatch();
    // ****************************

    // HOOK EFFECT
    useEffect(() => {
        dispatch(
            extraReducersGetListGPSConfig({
                page: page - 1,
                size: process.env.REACT_APP_PAGE_SIZE,
            })
        );
    }, [lastCreateSuccess, lastDeleteSuccess, lastUpdateSuccess]);

    useEffect(() => {
        setOpen(false)
    }, [lastUpdateSuccess]);

    // ****************************

    const handleUpdateClick = (id) => {
        return () => {
            dispatch(setCurrentGPDConfig({ id }))
            setOpen(true)
        }
    }

    const handleDeleteClick = (id) => {
        return () => {
            dispatch(extraReducersDeleteGPSConfig({ id }))
        }
    }

    return (
        <>
            <div className="attendance-settings--mobile-gps__table">
                <p className="quantity-ipAddress">
                    Có <span className="quantity">{total_items}</span> địa  chỉ trong
                    danh sách
                </p>
                <Box sx={{ height: 250, width: "100%" }}>
                    <>
                        <DataGrid
                            disableColumnMenu
                            headerHeight={55}
                            rowHeight={65}
                            rows={listOfGPSConfig}
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
                        {listOfGPSConfig.length > 0 && (
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
                titleHeader={"CHỈNH SỬA THÔNG TIN VỊ TRÍ"}
                footer={false}
                state={open}
                setState={setOpen}
                callback={() => { }}>
                <GPSAddingForm action={FormAction.UPDATE} setOpen={setOpen} />
            </ModalCustom>
        </>
    );
};

export default Table;
