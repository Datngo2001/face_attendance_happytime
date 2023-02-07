import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DataGridCustom from "components/DataGridCustom";
import LoadingCustom from "components/LoadingCustom";
import NoRowsOverlayCustom from "components/NoRowsOverlayCustom";
import PaginationCustom from "components/PaginationCustom";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import React, { useState } from "react";
import { columns } from "./components";

function PermissionTable() {
  // STATE
  const [page, setPage] = useState(1);
  // ****************************************************

  // HOOK REDUX TOOLKIT
  const { listOfPermissions, totalPages, loading } = useAppSelector(
    (state) => state.permissions
  );
  const dispatch = useAppDispatch();
  // ******************************

  return <>
    <DataGridCustom
      // onRowClick={hanldeOnRowClick}
      disableColumnMenu
      headerHeight={70}
      rowHeight={70}
      rows={listOfPermissions}
      columns={columns}
      getRowId={(row: any) => row._id}
      rowsPerPageOptions={[5]}
      disableSelectionOnClick
      hideFooter={true}
      loading={loading}

    // onSelectionModelChange={handleOnSelectionModelChange}
    />
    {listOfPermissions.length > 0 && (
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
  </>;
}

export default PermissionTable;
