import InputCustom from "../../../../../../../../components/InputCustom";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.scss";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { listStatusActive } from "../../../../../../../../utils/ListData";
import SelectCustom from "../../../../../../../../components/SelectCustom";
import ButtonCustom from "../../../../../../../../components/ButtonCustom";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ModalCustom from "../../../../../../../../components/ModalCustom";
import { WifiAddingForm } from "../../../../../../../../forms/Main/AttendancesSettings";

const ControlPanel = () => {
  // REACT HOOK FORM
  const { register, watch } = useForm({});
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
          id="dataSearch"
          name="dataSearch"
          width="100%"
          register={register}
          placeholder="Tên IP Wi-Fi bạn muốn tìm"
          iconRight={<SearchRoundedIcon />}
        />
        <div className="footer">
          <SelectCustom
            name="activeStatus"
            className="select-item"
            register={register}
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
          setState={setOpen}
        >
          <WifiAddingForm method="create" setOpen={setOpen} />
        </ModalCustom>
      </div>
    </>
  );
};

export default ControlPanel;
