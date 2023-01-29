import React from "react";
import PermissionPanel from "./components/PermissionPanel";
import PermissionTable from "./components/PermissionTable";
import "./styles.scss";

function List() {
  return (
    <>
      <div className="permission-setting__wrapper">
        <PermissionPanel />
        <div className="permission-setting__table">
          <PermissionTable />
        </div>
      </div>
    </>
  );
}

export default List;
