import "./styles.scss";
import { useForm } from "react-hook-form";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./handleForm";
import { useEffect } from "react";
import { focusToElement } from "utils";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";
import { Footer } from "antd/es/layout/layout";

const ForgotPasswordForm = () => {
  // STATE
  const {
    control,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });
  // ******************************

  // HOOK EFFECT
  useEffect(() => {
    focusToElement("phone");
  }, []);
  // ****************************

  // ARROW FUNCTIONS
  const onSubmit = (data) => {
    console.log("data", data);
  };
  // ****************************

  return (
    <>
      <form action="" className="forgot-password-form__wrapper">
        <Link className="tag-redirect" to="../login">
          <KeyboardBackspaceIcon />
          Quay lại
        </Link>
        <h2 className="forgot-password-form__title">Quên mật khẩu</h2>
        <InputCustom
          name="phone"
          control={control}
          className="input-phone"
          type="tel"
          placeholder="Nhập số điện thoại"
          iconLeft={<LocalPhoneRoundedIcon />}
        />
        <div style={{ marginTop: "40px" }}>
          <ButtonCustom height="48px" onClick={handleSubmit(onSubmit)}>
            GỬI MÃ XÁC NHẬN
          </ButtonCustom>
        </div>
      </form>
      <Footer itemType="2" />
    </>
  );
};

export default ForgotPasswordForm;
