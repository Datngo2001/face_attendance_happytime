import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.scss";
import { useEffect, useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";
import { useAppSelector } from "hooks/useAppSelector";

type Props = {
  control: any
  handleSearch: any
}

const ControlPanel: React.FC<Props> = ({ control }) => {

  return (
    <>
      <div className="news-list-control-panel">
        <InputCustom
          className="search-box"
          name="title"
          width="100%"
          control={control}
          placeholder="Tên bài viết"
          iconRight={<SearchRoundedIcon />}
        />
        <ButtonCustom
          className="add-btn"
          width="90px"
          height="32px"
          type={1}
          icon={<AddRoundedIcon />}
        >
          Tạo mới bào viết
        </ButtonCustom>
      </div>
    </>
  );
};

export default ControlPanel;
