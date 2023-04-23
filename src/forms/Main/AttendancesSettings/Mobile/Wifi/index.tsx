import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "../styles.scss";
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";
import { updateStatusState } from "store/slices/Authentication/authSlice";
import { extraReducersCreateIPWifi } from "store/slices/Main/Attendance-settings/actions/extraReducers";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";
import { FormAction } from "forms/formAction";

export type Props = {
  action: FormAction
  setOpen: any
}

const WifiAddingForm: React.FC<Props> = ({ action, setOpen }) => {
  // REACT HOOK FORM
  const { control, register, handleSubmit } = useForm({});
  // ****************************

  // REDUX TOOLKIT
  const { status } = useAppSelector((state) => state.attendanceSettings);
  const dispatch = useAppDispatch();
  // ****************************

  // HOOK EFFECT
  useEffect((): any => {
    if (status === "success") {
      setOpen(false);
    }

    // Clean function
    return () => dispatch(updateStatusState("fail"));
  }, [status]);
  // ****************************

  // ARROW FUNCTIONS
  const handleOnSubmitCreate = (data) => {
    console.log("data", data);
    const dataSubmit = {
      ...data,
      status: parseInt(data.activeStatus),
    };

    dispatch(
      extraReducersCreateIPWifi({
        data: dataSubmit,
      })
    );
  };
  const handleOnSubmitUpdate = (data) => {
    console.log("data", data);
  };
  // ****************************

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
        <p className="des">
          IP hiện tại của bạn là 2401:d800:724b:ee03:bdfa:be83:443d:fca2
        </p>
        <div className="field-radio-control">
          <p className="label">Trạng thái hoạt động</p>
          <div className="radios">
            <div className="radios-group">
              <input
                id="option1"
                value={1}
                type="radio"
                name="activeStatus"
                {...register("activeStatus")}
                defaultChecked={true}
              />
              <label htmlFor="option1">On</label>
            </div>
            <div className="radios-group">
              <input
                id="option2"
                value={2}
                type="radio"
                name="activeStatus"
                {...register("activeStatus")}
              />
              <label htmlFor="option2">Off</label>
            </div>
          </div>
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
