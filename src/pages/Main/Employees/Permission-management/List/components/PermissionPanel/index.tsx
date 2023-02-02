import React from "react";
import { Tooltip } from "@mui/material";
import ButtonCustom from "components/ButtonCustom";
import AddIcon from '@mui/icons-material/Add';
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.scss"
import InputCustom from "components/InputCustom";
import { useForm } from "react-hook-form";


function PermissionPanel() {
  // STATE
  const { register, watch } = useForm({});
  // ******************************

  return <div className="permission__control-panel">
    <div className="header">
      <h2 className="content-title">QUẢN LÝ VAI TRÒ</h2>
      <div className="actions">
        <Tooltip
          title=""
          placement="bottom-end"
        >
          <span className="wrapper">
            <ButtonCustom
              className="button"
              width="124px"
              height="32px"
              onClick={() => { }}
              icon={<AddIcon />}>
              THÊM MỚI
            </ButtonCustom>
          </span>
        </Tooltip>
      </div>
    </div>
    <form className="search-form">
      <InputCustom
        id="searchPermission"
        register={register}
        iconRight={<SearchRoundedIcon />}
        className="input-item"
        placeholder="Nhập tên vai trò"
      />
    </form>
  </div >;
}

export default PermissionPanel;
