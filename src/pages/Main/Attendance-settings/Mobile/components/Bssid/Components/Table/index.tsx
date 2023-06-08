import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { getColumns } from "./components";
import "./styles.scss";
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";
import PaginationCustom from "components/PaginationCustom";
import LoadingCustom from "components/LoadingCustom";
import { extraReducersDeleteBssid, extraReducersGetListBssid } from "store/slices/Main/Attendance-settings/actions/extraReducers";
import NoRowsOverlayCustom from "components/NoRowsOverlayCustom";
import ModalCustom from "components/ModalCustom";
import { setCurrentBssid } from "store/slices/Main/Attendance-settings/attendanceSettingsSlice";
import { FormAction } from "forms/formAction";
import BssidAddingForm from "forms/Main/AttendancesSettings/Mobile/Bssid";
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
    const { listOfBssid, total_pages, total_items, loading, lastCreateSuccess, lastDeleteSuccess, lastUpdateSuccess } = useAppSelector(
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
            dispatch(setCurrentBssid({ id }))
            setOpen(true)
        }
    }


    const handleDeleteClick = (id) => {
        return () => {
            openConfirmModal("Xác nhận", "Bạn có muốn xóa BSSID WIFI này không ?", () => {
                dispatch(extraReducersDeleteBssid({ id }))
            })
        }
    }


    return (
        <>
            <div className="attendance-settings--mobile-gps__table">
                <p className="quantity-ipAddress">
                    Có <span className="quantity">{total_items}</span> BSSID trong
                    danh sách
                </p>
                <Box sx={{ height: 250, width: "100%" }}>
                    <>
                        <DataGridCustom
                            disableColumnMenu
                            headerHeight={55}
                            rowHeight={65}
                            rows={listOfBssid}
                            columns={getColumns(handleUpdateClick, handleDeleteClick)}
                            getRowId={(row) => row._id}
                            rowsPerPageOptions={[10]}
                            disableSelectionOnClick={true}
                            hideFooter={true}
                            loading={loading}
                            components={{
                                Pagination: null,
                                NoRowsOverlay: NoRowsOverlayCustom,
                                LoadingOverlay: LoadingCustom,
                            }}
                        />
                        <FormPaginationCustom control={control} name={"page"} totalPages={total_pages} />
                    </>
                </Box>
            </div>
            <ModalCustom
                titleHeader={"CHỈNH SỬA BSSID"}
                footer={false}
                state={open}
                setState={setOpen}
                callback={() => { }}>
                <BssidAddingForm action={FormAction.UPDATE} setOpen={setOpen} />
            </ModalCustom>
        </>
    );
};

export default Table;
