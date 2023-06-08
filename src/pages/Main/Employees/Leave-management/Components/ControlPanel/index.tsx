import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./styles.scss";
import { departmentList, positionList } from "./data";
import InputCustom from "components/InputCustom";
import SelectCustom from "components/SelectCustom";
import React from "react";

type Props = {
  control: any
}

const ControlPanel: React.FC<Props> = ({ control }) => {
  return (
    <>
      <div className="leave-management--control-panel__wrapper">
        <div className="content-title">Quản lý phép</div>
        <div className="control-panel">
          <InputCustom
            name="searchData"
            iconRight={<SearchOutlinedIcon />}
            width="25%"
            control={control}
            placeholder="Tên, mã nhân viên, số điện thoại"
          />
          <SelectCustom
            name="department"
            control={control}
            width="20%"
            options={departmentList}
            placeholder="Chọn phòng ban"
          />
          <SelectCustom
            name="position"
            control={control}
            width="20%"
            options={positionList}
            placeholder="Chọn vị trí"
          />
        </div>
      </div>
    </>
  );
};

export default ControlPanel;
