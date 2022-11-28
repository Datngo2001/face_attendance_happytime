import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import "./styles.scss";
import { columns, CustomNoRowsOverlay } from "./components";
import LoadingCustom from "../../../../../../../components/LoadingCustom";
import { useDispatch, useSelector } from "react-redux";
import {
    updateIdListInvitation,
} from "../../../../../../../store/slices/Main/Employees/employeesSlice";
import { useEffect, useState } from "react";
import PaginationCustom from "../../../../../../../components/PaginationCustom";
import { extraReducersGetListEmployees } from "../../../../../../../store/slices/Main/Employees/actions/extraReducers";
import { useNavigate } from "react-router-dom";

// ARROW FUNCTIONS

// ******************************

// VARIABLES

// ********************************************************

export default function TableDataEmployees() {
    // STATE
    const [page, setPage] = useState(1);
    // ****************************************************

    // HOOK ROUTER DOM
    const navigate = useNavigate();
    // ******************************

    // HOOK REACT TOOLKIT
    const { listOfEmployees, totalPages, totalEmployees, loading } = useSelector(
        (state) => state.employees
    );
    const dispatch = useDispatch();
    // ******************************

    // HOOK EFFECT
    useEffect(() => {
        dispatch(
            extraReducersGetListEmployees({
                page: page - 1,
                size: process.env.REACT_APP_PAGE_SIZE,
            })
        );
    }, []);
    // ******************************

    // ARROW FUNCTIONS
    const hanldeOnRowClick = (rowData) => {
        console.log("Row Data", rowData.row);
        sessionStorage.setItem("idSelectedEmployee", rowData.row._id);
        dispatch(updateIdListInvitation([]));
        navigate("../list/view");
    };

    const handleOnSelectionModelChange = (idRows) => {
        console.log("idRows", idRows);
        dispatch(updateIdListInvitation(idRows));
    };
    // ****************************************************

    return (
        <>
            <p className="quantity-employees">
                Có <span className="quantity">{totalEmployees}</span> nhân viên trong danh
                sách
            </p>
            <Box sx={{ height: 350, width: "100%" }}>
                <>
                    <DataGrid
                        onRowClick={hanldeOnRowClick}
                        disableColumnMenu
                        headerHeight={100}
                        rowHeight={100}
                        rows={listOfEmployees}
                        getRowId={(row) => row._id}
                        columns={columns}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                        hideFooter={true}
                        loading={loading}
                        onSelectionModelChange={handleOnSelectionModelChange}
                        components={{
                            Pagination: false,
                            NoRowsOverlay: CustomNoRowsOverlay,
                            LoadingOverlay: LoadingCustom,
                        }}
                    />
                    {listOfEmployees.length > 0 && (
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
        </>
    );
}
