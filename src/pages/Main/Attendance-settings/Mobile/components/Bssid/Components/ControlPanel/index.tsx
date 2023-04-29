import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.scss";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";
import ModalCustom from "components/ModalCustom";
import { FormAction } from "forms/formAction";
import BssidAddingForm from "forms/Main/AttendancesSettings/Mobile/Bssid";
import { useAppSelector } from "hooks/useAppSelector";

const ControlPanel = () => {
  const { control } = useForm({});

  const [open, setOpen] = useState(false);

  const { lastCreateSuccess } = useAppSelector(
    (state) => state.attendanceSettings
  );

  useEffect(() => {
    setOpen(false)
  }, [lastCreateSuccess]);

  return (
    <>
      <div className="attendance-settings--mobile-gps__control-panel">
        <InputCustom
          name="dataSearch"
          width="100%"
          control={control}
          placeholder="Tên, địa chỉ vị trí bạn muốn tìm"
          iconRight={<SearchRoundedIcon />}
        />
        <ButtonCustom
          id="addGPSBtn"
          width="90px"
          height="32px"
          type={2}
          icon={<AddRoundedIcon />}
        >
          Thêm
        </ButtonCustom>
        <ModalCustom
          titleHeader={"THÊM MỚI VỊ TRÍ"}
          idTarget="addGPSBtn"
          footer={false}
          state={open}
          setState={setOpen}
          callback={() => { }}>
          <BssidAddingForm action={FormAction.CREATE} setOpen={setOpen} />
        </ModalCustom>
      </div>
    </>
  );
};

export default ControlPanel;