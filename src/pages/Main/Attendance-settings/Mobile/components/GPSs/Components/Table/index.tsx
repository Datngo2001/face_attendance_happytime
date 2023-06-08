import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
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
import useConfirmMoldal from "hooks/useConfirmMoldal";
import DataGridCustom from "components/DataGridCustom";
import { FormPaginationCustom } from "components/PaginationCustom/FormPaginationCustom";

type Props = {
    control: any
    handleSearch: any
}

const Table: React.FC<Props> = ({ control, handleSearch }) => {
    // HOOK STATE
    const [open, setOpen] = useState(false);
    const { openConfirmModal } = useConfirmMoldal();
    // ****************************

    // REDUX TOOLKIT
    const { listOfGPSConfig, total_pages, total_items, loading, lastCreateSuccess, lastDeleteSuccess, lastUpdateSuccess } = useAppSelector(
        (state) => state.attendanceSettings
    );
    const dispatch = useAppDispatch();
    // ****************************

    // HOOK EFFECT
    useEffect(() => {
        handleSearch()
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
            openConfirmModal("Xác nhận", "Bạn có muốn xóa vị trí này không ?", () => {
                dispatch(extraReducersDeleteGPSConfig({ id }))
            })
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
                        <DataGridCustom
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
                        <FormPaginationCustom control={control} name={"page"} totalPages={total_pages} />
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
