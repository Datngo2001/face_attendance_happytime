import "../styles.scss";
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";
import { extraReducersCreateBssid, extraReducersUpdateBssid } from "store/slices/Main/Attendance-settings/actions/extraReducers";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";
import { FormAction } from "forms/formAction";
import useCRUDForm from "hooks/useCRUDForm";
import { defaultValues } from "./defaultValues";
import { schema } from "./validation";

type Props = {
  action: FormAction
  setOpen: any
}

const BssidAddingForm: React.FC<Props> = ({ action, setOpen }) => {

  const { bssid: Bssid } = useAppSelector((state) => state.attendanceSettings);
  const dispatch = useAppDispatch();

  const { control, handleSubmit } = useCRUDForm({
    defaultValues: action === FormAction.CREATE ? defaultValues : Bssid,
    validationSchema: schema
  });

  const handleOnSubmitCreate = (data) => {
    dispatch(
      extraReducersCreateBssid({
        data: data,
      })
    );
  };

  const handleOnSubmitUpdate = (data) => {
    dispatch(
      extraReducersUpdateBssid({
        data: data,
      })
    );
  };

  return (
    <>
      <div className="bssid-adding-form__wrapper">
        <div className="field-control">
          <InputCustom
            name="bssid_name"
            width="470px"
            label="Tên BSSID"
            placeholder="Tên BSSID"
            control={control}
            required={true}
          />
        </div>
        <div className="field-control">
          <InputCustom
            name="bssid_address"
            width="470px"
            label="BSSID"
            placeholder="BSSID"
            control={control}
            required={true}
          />
        </div>

        <div className="bssid-adding-form__actions">
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

export default BssidAddingForm;
