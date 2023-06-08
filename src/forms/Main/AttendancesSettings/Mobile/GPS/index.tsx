import "../styles.scss";
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";
import { extraReducersCreateGPSConfig, extraReducersUpdateGPSConfig } from "store/slices/Main/Attendance-settings/actions/extraReducers";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";
import { FormAction } from "forms/formAction";
import useCRUDForm from "hooks/useCRUDForm";
import InputNumber from "components/InputNumber";
import { defaultValues } from "./defaultValues";
import { schema } from "./validation";
import GetPositionButton from "components/GetPositionButton";

type Props = {
  action: FormAction
  setOpen: any
}

const GPSAddingForm: React.FC<Props> = ({ action, setOpen }) => {
  const { GPSConfig } = useAppSelector((state) => state.attendanceSettings);
  const dispatch = useAppDispatch();

  const { control, handleSubmit, setValue } = useCRUDForm({
    defaultValues: action === FormAction.CREATE ? defaultValues : GPSConfig,
    validationSchema: schema
  });

  const handleOnSubmitCreate = (data) => {
    dispatch(
      extraReducersCreateGPSConfig({
        data: data,
      })
    );
  };

  const handleOnSubmitUpdate = (data) => {
    dispatch(
      extraReducersUpdateGPSConfig({
        data: data,
      })
    );
  };

  const setPosition = (lat, lon, radius) => {
    setValue("lat", lat)
    setValue("lon", lon)
    setValue("radius", radius)
  }

  return (
    <>
      <div className="gps-adding-form__wrapper">
        <div className="field-control">
          <InputCustom
            name="gps_name"
            width="470px"
            label="Tên vị trí"
            placeholder="Tên gợi nhớ vị trí"
            control={control}
            required={true}
          />
        </div>
        <div className="field-control">
          <InputCustom
            name="address"
            width="470px"
            label="Địa chỉ"
            placeholder="Địa chỉ"
            control={control}
            required={true}
          />
        </div>
        <div className="field-control">
          <GetPositionButton onChange={({ lat, lon, radius }) => setPosition(lat, lon, radius)}>Lấy vị trí hiện tại</GetPositionButton>
        </div>
        <div className="field-control">
          <InputNumber
            name="lat"
            width="470px"
            label="Vĩ độ"
            control={control}
            required={true}
            min={0}
            max={1000} />
        </div>
        <div className="field-control">
          <InputNumber
            name="lon"
            width="470px"
            label="Kinh độ"
            control={control}
            required={true}
            min={0}
            max={1000} />
        </div>
        <div className="field-control">
          <InputNumber
            name="radius"
            width="470px"
            label="Bán kính"
            control={control}
            required={true}
            min={0}
            max={1000} />
        </div>
        <div className="gps-adding-form__actions">
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

export default GPSAddingForm;
