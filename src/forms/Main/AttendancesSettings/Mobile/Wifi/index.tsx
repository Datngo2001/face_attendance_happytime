import "../styles.scss";
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";
import { extraReducersCreateIPWifi, extraReducersUpdateIPWifi } from "store/slices/Main/Attendance-settings/actions/extraReducers";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";
import { FormAction } from "forms/formAction";
import useCRUDForm from "hooks/useCRUDForm";
import { defaultValues } from "./defaultValues";
import { schema } from "./validation";
import RadioGroupCustom, { RadioItem } from "components/RadioGroupCustom";

type Props = {
  action: FormAction
  setOpen: any
}

const IsActiveRadio: RadioItem[] = [
  {
    label: "On",
    value: "true"
  },
  {
    label: "Off",
    value: "false"
  }
]

const WifiAddingForm: React.FC<Props> = ({ action, setOpen }) => {
  const { iPWifi } = useAppSelector((state) => state.attendanceSettings);

  const { control, handleSubmit } = useCRUDForm({
    defaultValues: action === FormAction.CREATE ? defaultValues : iPWifi,
    validationSchema: schema
  });
  const dispatch = useAppDispatch();

  const handleOnSubmitCreate = (data) => {
    dispatch(
      extraReducersCreateIPWifi({
        data: data,
      })
    );
  };

  const handleOnSubmitUpdate = (data) => {
    dispatch(
      extraReducersUpdateIPWifi({
        data: data,
      })
    );
  };

  return (
    <>
      <div className="wifi-adding-form__wrapper">
        <div className="field-control">
          <InputCustom
            name="ip_name"
            width="470px"
            label="Tên IP Wi-Fi"
            placeholder="Nhập Tên IP Wi-Fi"
            control={control}
            required={true}
          />
        </div>
        <div className="field-control">
          <InputCustom
            name="ip_address"
            width="470px"
            label="IP"
            placeholder="Nhập Địa chỉ IP"
            control={control}
            required={true}
          />
        </div>
        <div className="field-control">
          <RadioGroupCustom
            name='is_active'
            control={control}
            label="Trạng thái hoạt động"
            items={IsActiveRadio} />
        </div>
        <div className="wifi-adding-form__actions">
          <ButtonCustom width="84px" type={3} onClick={() => setOpen(false)}>
            Hủy bỏ
          </ButtonCustom>
          <ButtonCustom
            width="60px"
            onClick={handleSubmit(
              action === FormAction.UPDATE ? handleOnSubmitUpdate : handleOnSubmitCreate
            )}
          >
            Lưu
          </ButtonCustom>
        </div>
      </div>
    </>
  );
};

export default WifiAddingForm;
