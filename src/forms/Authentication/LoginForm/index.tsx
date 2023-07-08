import "./styles.scss";
import { useForm } from "react-hook-form";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./handleForm";
import { useEffect } from "react";
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";
import { updateStatusState } from "store/slices/Authentication/authSlice";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";
import { Footer } from "antd/es/layout/layout";
import { extraReducersLogin } from "store/slices/Authentication/Login/loginActions";

const LoginForm = () => {
  // STATE
  const {
    control,
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });
  const navigate = useNavigate();

  // HOOK REDUX TOOLKIT
  const dispatch = useAppDispatch();
  const { status } = useAppSelector((state) => state.auth);
  // ****************************

  const onSubmit = (data) => {
    const dataSubmit = {
      phone_number: data.phone,
      password: data.password,
    };
    dispatch(extraReducersLogin(dataSubmit));
  };
  // ******************************

  useEffect(() => {
    if (status) navigate("/app/attendances/face-attendance");
    // Clean function
    return () => {
      dispatch(updateStatusState(false));
    };
  }, [status]);

  return (
    <>
      <div className="login-form__wrapper">
        <h2 className="login-form__title">Đăng nhập</h2>
        <InputCustom
          name="username"
          className="input-phone"
          placeholder="Tên đăng nhập *"
          control={control}
          iconLeft={<LocalPhoneRoundedIcon />}
        />
        <InputCustom
          name="password"
          className="input-password"
          type="password"
          placeholder="Nhập mật khẩu *"
          control={control}
          iconLeft={<LockIcon />}
        />
        <div className="tag-redirect text-right">
          <Link className="tag" to="/auth/forgot-password">
            Quên mật khẩu?
          </Link>
        </div>
        <div style={{ marginTop: "40px", marginBottom: "60px" }}>
          <ButtonCustom
            className="btn-login"
            height="48px"
            onClick={handleSubmit(onSubmit)}
          >
            ĐĂNG NHẬP
          </ButtonCustom>
        </div>
        <div className="tag-redirect">
          Bạn chưa có tài khoản?
          <Link className="tag" to="/auth/register">
            {" "}
            Đăng ký ngay?
          </Link>
        </div>
      </div>
      <Footer itemType="2" />
    </>
  );
};

export default LoginForm;
