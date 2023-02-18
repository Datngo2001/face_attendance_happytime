import React from "react";
import ShiftTable from "../components/ShiftTable";
import ShiftSearchPannel from "../components/ShiftSearchPannel";

const ListShifts: React.FC = () => {
  return (
    <>
      <div className="ListShifts__wrapper">
        <ShiftSearchPannel />
        <div className="ListShifts__table">
          <ShiftTable />
        </div>
      </div>
    </>
  )
}

export default ListShifts;
