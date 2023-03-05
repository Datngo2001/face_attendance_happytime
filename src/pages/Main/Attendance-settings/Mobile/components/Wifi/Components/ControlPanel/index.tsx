import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.scss";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import InputCustom from "components/InputCustom";
import SelectCustom from "components/SelectCustom";
import { listStatusActive } from "utils/ListData";
import ButtonCustom from "components/ButtonCustom";
import ModalCustom from "components/ModalCustom";
import { WifiAddingForm } from "forms/Main/AttendancesSettings";

const ControlPanel = () => {
  // REACT HOOK FORM
  const { control, watch } = useForm({});
  // ****************************

  // HOOK STATE
  const [open, setOpen] = useState(false);
  // ****************************

  // HOOk EFFECT
  useEffect(() => {
    const subscription = watch((value) => console.log("data", value));
    return () => subscription.unsubscribe();
  }, [watch]);
  // ****************************

  return (
    <>
      <div className="attendance-settings--mobile-wifi__control-panel">
        <InputCustom
          name="dataSearch"
          width="100%"
          control={control}
          placeholder="Tên IP Wi-Fi bạn muốn tìm"
          iconRight={<SearchRoundedIcon />}
        />
        <div className="footer">
          <SelectCustom
            name="activeStatus"
            className="select-item"
            control={control}
            width="35%"
            placeholder="Trạng thái hoạt động"
            options={listStatusActive}
          />
          <ButtonCustom
            id="addBtn"
            width="90px"
            height="32px"
            type={2}
            icon={<AddRoundedIcon />}
          >
            Thêm
          </ButtonCustom>
        </div>
        <ModalCustom
          idTarget="addBtn"
          footer={false}
          state={open}
          setState={setOpen} callback={undefined}>
          <WifiAddingForm method="create" setOpen={setOpen} />
        </ModalCustom>
      </div>
    </>
  );
};

export default ControlPanel;
