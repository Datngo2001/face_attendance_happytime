import { useEffect } from "react";
import { useForm } from "react-hook-form";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.scss";
import InputCustom from "components/InputCustom";
import SelectCustom from "components/SelectCustom";
import { useAppDispatch } from "hooks/useAppDispatch";
import { extraReducersGetListDeviceID } from "store/slices/Main/Attendance-settings/actions/extraReducers";
import { statusActiveOptions } from "utils/selectBoxOptions";

const ControlPanel = () => {
  const { control } = useForm();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(extraReducersGetListDeviceID({ size: 10, page: 0 }))
  }, [])

  return (
    <>
      <div className="attendance-settings--mobile-devices--control-panel">
        <InputCustom
          name="dataSearch"
          control={control}
          width="100%"
          placeholder="Tên nhân viên, mã nhân viên, Divice ID"
          iconRight={<SearchRoundedIcon />}
        />
        <div style={{ height: "20px", width: "100%" }}></div>
        <SelectCustom
          name="activeStatus"
          width="300px"
          control={control}
          options={statusActiveOptions}
          placeholder="Trạng thái hoạt động"
        />
      </div>
    </>
  );
};

export default ControlPanel;
