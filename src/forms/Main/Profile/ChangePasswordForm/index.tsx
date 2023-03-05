import { yupResolver } from "@hookform/resolvers/yup";
import { Divider } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { schema } from "./handleForm";
import "./styles.scss";
import InputCustom from "components/InputCustom";
import CheckboxCustom from "components/CheckboxCustom";
import ButtonCustom from "components/ButtonCustom";

const ChangePasswordForm = () => {
  // REACT HOOK FORM
  const {
    control,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });
  // ****************************

  // HOOK EFFECT
  useEffect(() => { }, []);
  // ****************************

  // ARROW FUNCTIONS
  const handleOnSubmit = (data) => {
    console.log("data", data);
  };
  // ****************************

  return (
    <>
      <div className="change-password-form__wrapper profile-forms__wrapper">
        <p className="profile-forms__title">Thay đổi mật khẩu</p>
        <div className="change-password-form__body">
          <div className="field-control">
            <label className="label" htmlFor="newPassword">
              Mật khẩu hiện tại<span> *</span>
            </label>
            <InputCustom
              name="oldPassword"
              required={true}
              type="password"
              width="300px"
              control={control}
              placeholder="Nhập mật khẩu hiện tại"
            />
          </div>
          <div className="field-control">
            <label className="label" htmlFor="newPassword">
              Mật khẩu mới<span> *</span>
            </label>
            <InputCustom
              name="newPassword"
              required={true}
              type="password"
              width="300px"
              control={control}
              placeholder="Nhập mật khẩu mới"
            />
          </div>
          <div className="field-control">
            <label className="label" htmlFor="newPassword">
              Xác nhận lại mật khẩu mới<span> *</span>
            </label>
            <InputCustom
              name="confirmNewPassword"
              required={true}
              type="password"
              width="300px"
              control={control}
              placeholder="Xác nhận lại mật khẩu mới"
            />
          </div>
          <div className="checbox-control">
            <CheckboxCustom
              name="logoutFromAllOfDevices"
              label="Đăng xuất khỏi tất cả các thiết bị"
              control={control} />
          </div>
        </div>
      </div>
      <Divider />
      <div className="profile-forms__action">
        <ButtonCustom
          height="32px"
          width="106px"
          onClick={handleSubmit(handleOnSubmit)}
        >
          Thực hiện
        </ButtonCustom>
      </div>
    </>
  );
};

export default ChangePasswordForm;
