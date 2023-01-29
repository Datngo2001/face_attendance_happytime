import { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputCustom from "../../../../../../../../components/InputCustom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.scss";
import SelectCustom from "../../../../../../../../components/SelectCustom";
import { listStatusActive } from "../../../../../../../../utils/ListData";

const ControlPanel = () => {
  // REACT HOOK FORM
  const { register, watch } = useForm();
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
          id="dataSearch"
          register={register}
          width="100%"
          placeholder="Tên nhân viên, mã nhân viên, Divice ID"
          iconRight={<SearchRoundedIcon />}
        />
        <div style={{ height: "20px", width: "100%" }}></div>
        <SelectCustom
          id="activeStatus"
          width="300px"
          register={register}
          options={listStatusActive}
          placeholder="Trạng thái hoạt động"
        />
      </div>
    </>
  );
};

export default ControlPanel;
