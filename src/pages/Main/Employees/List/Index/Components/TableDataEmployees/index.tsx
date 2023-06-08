import "./styles.scss";
import { columns } from "./components";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import PaginationCustom from "../../../../../../../components/PaginationCustom";
import { extraReducersGetListEmployees } from "../../../../../../../store/slices/Main/Employees/actions/extraReducers";
import { useNavigate } from "react-router-dom";
import DataGridCustom from "components/DataGridCustom";
import { useAppSelector } from "hooks/useAppSelector";
import { FormPaginationCustom } from "components/PaginationCustom/FormPaginationCustom";

type Props = {
  control: any
}

export const TableDataEmployees: React.FC<Props> = ({ control }) => {
  const navigate = useNavigate();

  const { listOfEmployees, totalPages, totalEmployees, loading } = useAppSelector(
    (state) => state.employees
  );

  const hanldeOnRowClick = (rowData) => {
    navigate(`../list/view/${rowData.row._id}`);
  };

  return (
    <>
      <p className="quantity-employees">
        Có <span className="quantity">{totalEmployees}</span> nhân viên trong
        danh sách
      </p>
      <DataGridCustom
        onRowClick={hanldeOnRowClick}
        headerHeight={100}
        rowHeight={100}
        rows={listOfEmployees}
        columns={columns}
        getRowId={(row) => row._id}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        loading={loading}
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
          <FormPaginationCustom control={control} name={"page"} totalPages={totalPages} />
        </div>
      )}
    </>
  );
}
