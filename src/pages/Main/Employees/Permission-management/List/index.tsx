import React from "react";
import PermissionPanel from "./components/PermissionPanel";
import PermissionTable from "./components/PermissionTable";
import "./styles.scss";

function List() {
  return (
    <>
      <div className="permission-list__wrapper">
        <PermissionPanel />
        <div className="permission-list__table">
          <PermissionTable />
        </div>
      </div>
    </>
  );
}

export default List;
