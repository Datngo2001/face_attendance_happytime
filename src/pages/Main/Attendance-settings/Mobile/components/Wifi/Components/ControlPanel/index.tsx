import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.scss";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import InputCustom from "components/InputCustom";
import SelectCustom from "components/SelectCustom";
import ButtonCustom from "components/ButtonCustom";
import ModalCustom from "components/ModalCustom";
import { WifiAddingForm } from "forms/Main/AttendancesSettings";
import { FormAction } from "forms/formAction";
import { useAppSelector } from "hooks/useAppSelector";
import { statusActiveOptions } from "utils/selectBoxOptions";

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
            options={statusActiveOptions}
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
          titleHeader={"THÊM MỚI IP WI-FI"}
          idTarget="addBtn"
          footer={false}
          state={open}
          setState={setOpen} callback={undefined}>
          <WifiAddingForm action={FormAction.CREATE} setOpen={setOpen} />
        </ModalCustom>
      </div>
    </>
  );
};

export default ControlPanel;
