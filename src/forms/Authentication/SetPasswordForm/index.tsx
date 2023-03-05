import { Link, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { schema } from "./handleForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.scss";
import LockIcon from "@mui/icons-material/Lock";
import { useEffect } from "react";
import { focusToElement } from "../../../utils";
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";
import { updateStatusState } from "store/slices/Authentication/authSlice";
import { extraReducersRegister } from "store/slices/Authentication/Register/registerActions";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";

const SetPasswordForm = () => {
  // STATE
  const {
    control,
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  // ******************************

  // HOOK REACT TOOLKIT
  const { status } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  // ****************************

  // HOOK ROUTER DOM
  const navigate = useNavigate();
  // ****************************

  // HOOK EFFECT
  useEffect(() => {
    focusToElement("password");
  }, []);

  useEffect((): any => {
    if (status) {
      navigate("../login", { replace: true });
    }
    // Clean function
    return () => dispatch(updateStatusState(false));
  }, [status]);
  // ****************************

  // ARROW FUNCTIONS
  const onSubmit = (data) => {
    const dataRegister = JSON.parse(sessionStorage.getItem("dataRegister"));
    const dataSubmit = {
      name: dataRegister?.name,
      phone_number: dataRegister?.phone,
      company_name: dataRegister?.nameCompany,
      company_shorthand: dataRegister?.nameCompanyShortHand,
      job_position: dataRegister?.position,
      personal_mail: dataRegister?.email,
      scale: parseInt(dataRegister?.scale),
      code: dataRegister?.code,
      password: data.password,
    };

    dispatch(extraReducersRegister(dataSubmit));
  };
  // ****************************
  return (
    <>
      <form className="set-password-form__wrapper" onSubmit={handleSubmit(onSubmit)}>
        <div className="set-password-form__header">
          <Link className="tag-redirect" to="../login">
            <KeyboardBackspaceIcon />
            Quay lại
          </Link>
          <h2 className="set-password-form__title">Thiết lập mật khẩu</h2>
        </div>
        <div className="set-password-form__container">
          <InputCustom
            name="password"
            className="input-item"
            placeholder="Nhập mật khẩu"
            type="password"
            iconLeft={<LockIcon />}
            control={control}
          />
          <InputCustom
            name="confirmPassword"
            className="input-item"
            placeholder="Xác nhận mật khẩu"
            type="password"
            iconLeft={<LockIcon />}
            control={control}
          />
        </div>
        <div style={{ marginTop: "40px" }}>
          <ButtonCustom isSubmit height="48px">
            Lưu
          </ButtonCustom>
        </div>
      </form>
    </>
  );
};

export default SetPasswordForm;
