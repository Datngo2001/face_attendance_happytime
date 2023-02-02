import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import LoadingCustom from "components/LoadingCustom";
import NoRowsOverlayCustom from "components/NoRowsOverlayCustom";
import PaginationCustom from "components/PaginationCustom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { columns } from "./components";

function PermissionTable() {
  // STATE
  const [page, setPage] = useState(1);
  // ****************************************************

  // HOOK REACT TOOLKIT
  // const { listOfEmployees, totalPages, totalEmployees, loading } = useSelector(
  //   (state) => state.employees
  // );
  // const dispatch = useDispatch();
  // ******************************

  return <>
    {/* <Box sx={{ height: 350, width: "100%" }}>
      <>
        <DataGrid
          // onRowClick={hanldeOnRowClick}
          disableColumnMenu
          headerHeight={100}
          rowHeight={100}
          rows={listOfEmployees}
          columns={columns}
          getRowId={(row) => row._id}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          hideFooter={true}
          loading={loading}
          // onSelectionModelChange={handleOnSelectionModelChange}
          components={{
            Pagination: null,
            NoRowsOverlay: NoRowsOverlayCustom,
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
    </Box> */}
  </>;
}

export default PermissionTable;
