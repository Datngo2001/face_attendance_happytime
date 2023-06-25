import { Box } from "@mui/material";
import { CustomNoRowsOverlay, getColumns } from "./components";
import "./styles.scss";
import LoadingCustom from "components/LoadingCustom";
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";
import useConfirmMoldal from "hooks/useConfirmMoldal";
import { extraReducersUpdateDeviceIDStatus } from "store/slices/Main/Attendance-settings/actions/extraReducers";
import DataGridCustom from "components/DataGridCustom";
import { FormPaginationCustom } from "components/PaginationCustom/FormPaginationCustom";

type Props = {
    control: any
    handleSearch: any
}

const Table: React.FC<Props> = ({ control, handleSearch }) => {
    const dispatch = useAppDispatch();
    const { listOfDeviceID, total_pages, total_items, loading } = useAppSelector((state) => state.attendanceSettings);
    const { openConfirmModal } = useConfirmMoldal();

    const handleUpdateStatusClick = (id, agent_id, value) => {
        openConfirmModal("Xác nhận", "Bạn có muốn cập nhật trạng thái cho thiết bị này không ?", () => {
            dispatch(extraReducersUpdateDeviceIDStatus({ id, status: value, agent_id }))
        })
    }

    return (
        <>
            <div className="attendance-settings--mobile-devices--table">
                <p className="quantity-ipAddress">
                    Có <span className="quantity">{total_items}</span> thiết bị trong danh sách
                </p>
                <Box sx={{ height: 250, width: "100%" }}>
                    <>
                        <DataGridCustom
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
                        <FormPaginationCustom control={control} name={"page"} totalPages={total_pages} />
                    </>
                </Box>
            </div>
        </>
    );
};

export default Table;
