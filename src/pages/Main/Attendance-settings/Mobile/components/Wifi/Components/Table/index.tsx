import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { getColumns } from "./components";
import "./styles.scss";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { extraReducersDeleteIPWifi, extraReducersUpdateIPWifiStatus } from "store/slices/Main/Attendance-settings/actions/extraReducers";
import LoadingCustom from "components/LoadingCustom";
import { setCurrentIPWifi } from "store/slices/Main/Attendance-settings/attendanceSettingsSlice";
import ModalCustom from "components/ModalCustom";
import { WifiAddingForm } from "forms/Main/AttendancesSettings";
import { FormAction } from "forms/formAction";
import NoRowsOverlayCustom from "components/NoRowsOverlayCustom";
import useConfirmMoldal from "hooks/useConfirmMoldal";
import { FormPaginationCustom } from "components/PaginationCustom/FormPaginationCustom";
import DataGridCustom from "components/DataGridCustom";

export type Props = {
    control: any
    handleSearch: any
}

const Table: React.FC<Props> = ({ control, handleSearch }) => {
    const [open, setOpen] = useState(false)

    const { listOfIPWifi, total_pages, total_items, loading, lastCreateSuccess, lastUpdateSuccess, lastDeleteSuccess } = useAppSelector(
        (state) => state.attendanceSettings
    );
    const dispatch = useAppDispatch();
    const { openConfirmModal } = useConfirmMoldal();

    useEffect(() => {
        handleSearch()
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
                    Có <span className="quantity">{total_items}</span> wifi trong
                    danh sách
                </p>
                <Box sx={{ height: 250, width: "100%" }}>
                    <>
                        <DataGridCustom
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
                        <FormPaginationCustom control={control} name={"page"} totalPages={total_pages} />
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
