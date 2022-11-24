import { Table } from "antd";
import { columns, Pagination } from "./components";
import { listEmployees } from "./dataTest";
import "./styles.scss";

const TableLeaveManagement = ({}) => {
    return (
        <>
            <div className="leave-management--table__wrapper">
                {/* <Box sx={{ height: 400, width: "100%" }}> */}
                {/* <DataGrid
                        // onRowClick={hanldeOnRowClick}
                        disableColumnMenu
                        headerHeight={110}
                        rowHeight={110}
                        rows={listEmployees}
                        columns={columns}
                        initialState={{
                            pinnedColumns: {
                                left: ["Mã nhân viên"],
                            },
                        }}
                        rowsPerPageOptions={[5]}
                        disableSelectionOnClick
                        components={{
                            Pagination: Pagination,
                            // NoRowsOverlay: CustomNoRowsOverlay,
                        }}
                    /> */}
                {/* </Box> */}
                <Table
                    columns={columns}
                    dataSource={listEmployees}
                    scroll={{
                        x: 1300,
                        y: 335,
                    }}
                    bordered
                />
            </div>
        </>
    );
};

export default TableLeaveManagement;
