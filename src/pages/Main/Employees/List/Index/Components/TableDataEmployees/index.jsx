import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { listEmployees } from "./dataTest";
import "./styles.scss";
import { columns, CustomNoRowsOverlay, Pagination } from "./components";
import { useNavigate } from "react-router-dom";
import LoadingCustom from "../../../../../../../components/LoadingCustom";
import { useDispatch } from "react-redux";
import { updateIdListInvitation } from "../../../../../../../store/slices/Main/Employees/employeesSlice";

// ARROW FUNCTIONS

// ******************************

// VARIABLES

// ************************************************************************************************

export default function TableDataEmployees() {
    // STATE
    const dispatch = useDispatch();
    // ****************************************************

    // HOCK
    const navigate = useNavigate();
    // ****************************************************

    // ARROW FUNCTIONS
    const hanldeOnRowClick = (rowData) => {
        console.log("Row Data", rowData.row);
        navigate("view");
    };

    const handleOnSelectionModelChange = (idRows) => {
        dispatch(updateIdListInvitation(idRows));
    };
    // ****************************************************

    return (
        <>
            <p className="quantity-employees">
                Có <span className="quantity">{listEmployees.length || 0}</span> nhân viên
                trong danh sách
            </p>
            <Box sx={{ height: 400, width: "100%" }}>
                {listEmployees.length > 0 ? (
                    <DataGrid
                        onRowClick={hanldeOnRowClick}
                        disableColumnMenu
                        headerHeight={100}
                        rowHeight={100}
                        rows={listEmployees}
                        columns={columns}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        onSelectionModelChange={handleOnSelectionModelChange}
                        components={{
                            Pagination: Pagination,
                            NoRowsOverlay: CustomNoRowsOverlay,
                        }}
                    />
                ) : (
                    <DataGrid
                        onRowClick={hanldeOnRowClick}
                        disableColumnMenu
                        headerHeight={100}
                        rowHeight={100}
                        rows={[]}
                        loading
                        columns={columns}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        components={{
                            Pagination: Pagination,
                            NoRowsOverlay: CustomNoRowsOverlay,
                            LoadingOverlay: LoadingCustom,
                        }}
                    />
                )}
            </Box>
        </>
    );
}
