import { useEffect } from "react";
import { useForm } from "react-hook-form";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.scss";
import InputCustom from "components/InputCustom";
import SelectCustom from "components/SelectCustom";
import { listStatusActive } from "utils/ListData";

const ControlPanel = () => {
  // REACT HOOK FORM
  const { control, watch } = useForm();
  // ****************************

  // HOOK EFFECT
  useEffect(() => {
    const subscription = watch((value) => console.log("data", value));
    return () => subscription.unsubscribe();
  }, [watch]);
  // ****************************

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
          options={listStatusActive}
          placeholder="Trạng thái hoạt động"
        />
      </div>
    </>
  );
};

export default ControlPanel;
