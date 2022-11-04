import Box from "@mui/material/Box";
import {
    DataGrid,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
} from "@mui/x-data-grid";
import Pagination from "@mui/material/Pagination";
import { listEmployees } from "./dataTest";
import "./styles.scss";
import { StatusEmployee, StatusUsingHappyTime } from "./components";
import { ColumnContactInfo } from "../ColumnContactInfo";
import { ColumnName } from "../ColumnName";
import { ColumnOthers } from "../ColumnOthers";
import { useNavigate } from "react-router-dom";
import { InnerButtonOthers } from "../ColumnOthers/components";
import DropMenu from "../../../../../../../components/DropMenu";

function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <Pagination
            color="primary"
            count={pageCount}
            page={page + 1}
            onChange={(event, value) => apiRef.current.setPage(value - 1)}
        />
    );
}

// VARIABLES

const columns = [
    { field: "id", headerName: "Mã nhân viên", width: 110, sortable: false },
    {
        field: "fullName",
        headerName: "Tên nhân viên",
        // description: "",
        sortable: false,
        width: 200,
        renderCell: (params) => {
            return <ColumnName img="" role={params.row.role} name={params.row.name} />;
        },
    },
    {
        field: "department",
        headerName: "Phòng ban",
        sortable: false,
        width: 200,
        height: 100,
    },
    {
        field: "contactInf",
        headerName: "Thông tin liên lạc",
        sortable: false,
        width: 270,
        renderCell: (params) => {
            return (
                <ColumnContactInfo
                    email={params.row.contactInf.email}
                    phone={params.row.contactInf.phone}
                />
            );
        },
    },
    {
        field: "statusEmployee",
        headerName: "Trạng thái nhân sự",
        width: 200,
        sortable: false,
        renderCell: (params) => {
            return <StatusEmployee status={params.row.statusEmployee} />;
        },
    },
    {
        field: "statusUsingHappyTime",
        headerName: "Sử dụng HappyTime",
        width: 200,
        sortable: false,
        renderCell: (params) => {
            return <StatusUsingHappyTime status={params.row.statusEmployee} />;
        },
    },
    {
        field: "others",
        headerName: "",
        width: 65,
        sortable: false,
        renderCell: (params) => {
            return (
                <>
                    <DropMenu
                        parent={<ColumnOthers id={params.row.id} />}
                        mt="2px"
                        ml="4px"
                    >
                        <InnerButtonOthers />
                    </DropMenu>
                </>
            );
        },
    },
];
// ************************************************************************************************

export default function TableDataEmployees() {
    // HOCK
    const navigate = useNavigate();
    // ********************************************************

    // ARROW FUNCTIONS
    const hanldeOnRowClick = (rowData) => {
        console.log("Row Data", rowData.row);
        navigate("view");
    };
    // ****************************************************

    return (
        <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
                onRowClick={hanldeOnRowClick}
                disableColumnMenu
                headerHeight={100}
                rowHeight={100}
                rows={listEmployees}
                columns={columns}
                pagination
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                components={
                    {
                        // Pagination: CustomPagination,
                    }
                }
            />
        </Box>
    );
}
