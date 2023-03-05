import "./styles.scss";
import { useForm } from "react-hook-form";
import InputCustom from "../../../components/InputCustom";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import ButtonCustom from "../../../components/ButtonCustom";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import ApartmentIcon from "@mui/icons-material/Apartment";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import HailIcon from "@mui/icons-material/Hail";
import KeyIcon from "@mui/icons-material/Key";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { schema } from "./handleForm";
import { yupResolver } from "@hookform/resolvers/yup";
import FormatShapesRoundedIcon from "@mui/icons-material/FormatShapesRounded";
import { useAppDispatch } from "hooks/useAppDispatch";
import { useAppSelector } from "hooks/useAppSelector";
import { focusToElement } from "utils";
import { updateStatusState } from "store/slices/Authentication/authSlice";
import { checkExist } from "auth";
import { extraReducersRequestOtp } from "store/slices/Authentication/Register/registerActions";
import SelectCustom from "components/SelectCustom";
import { listPositions, listScales } from "utils/ListData";

const RegisterForm = () => {
  // VARIABLES
  const navigate = useNavigate();

  // ************************************************************

  // STATE
  const {
    control,
    handleSubmit,
    setError,
  } = useForm({ resolver: yupResolver(schema), mode: "onChange" });
  const [disabled, setDisabled] = useState(true);
  // ************************************************************

  // HOOK REACT TOOLKIT
  const { status } = useAppSelector((state) => state.auth);
  // ****************************

  // HOOK REDUX TOOLKIT
  const dispatch = useAppDispatch();
  // ****************************

  // EFFECT
  useEffect(() => {
    focusToElement("phone");
  }, []);

  useEffect(() => {
    if (status) {
      navigate("/auth/confirm-otp");
    }

    // Clean function
    return () => {
      dispatch(updateStatusState(false));
    };
  }, [status]);
  // **************************************************************

  // ARROW FUNCTION
  const onSubmit = async (data) => {
    console.log("data register:", data);

    sessionStorage.setItem("dataRegister", JSON.stringify(data));
    const isExistPhone = await checkExist({
      phone: data.phone,
    });

    const isExistEmail = await checkExist({
      email: data.email,
    });

    if (isExistPhone.payload) {
      setError("phone", {
        type: "custom",
        message: "Số điện thoại đã được sử dụng",
      });
    }
    if (isExistEmail.payload) {
      setError("email", {
        type: "custom",
        message: "Email đã được sử dụng",
      });
    }

    if (!isExistPhone.payload && !isExistEmail.payload) {
      dispatch(
        extraReducersRequestOtp({
          dataRequest: { phone_number: data.phone },
        })
      );
    }
  };
  // **************************************************************

  return (
    <>
      <form className="register-form__wrapper" onSubmit={handleSubmit(onSubmit)}>
        <div className="register-form__header">
          <Link className="tag-redirect" to="../login">
            <KeyboardBackspaceIcon />
            Quay lại
          </Link>
          <h2 className="register-form__title">Đăng ký</h2>
        </div>
        <InputCustom
          name="phone"
          className="input-item"
          type="tel"
          placeholder="Nhập số điện thoại *"
          control={control}
          iconLeft={<LocalPhoneRoundedIcon />}
        />
        <InputCustom
          name="name"
          className="input-item"
          type="text"
          placeholder="Nhập họ và tên *"
          control={control}
          iconLeft={<AccountCircleSharpIcon />}
        />
        <InputCustom
          name="nameCompany"
          className="input-item"
          type="text"
          placeholder="Nhập tên công ty *"
          control={control}
          iconLeft={<ApartmentIcon />}
        />
        <InputCustom
          name="nameCompanyShortHand"
          className="input-item"
          type="text"
          placeholder="Nhập tên viết tắt của công ty *"
          control={control}
          iconLeft={<FormatShapesRoundedIcon />}
        />
        <SelectCustom
          name="position"
          className="input-item"
          width="100%"
          placeholder="Chức vụ *"
          control={control}
          icon={<HailIcon />}
          options={listPositions}
        />
        <InputCustom
          name="email"
          className="input-item"
          type="email"
          placeholder="Nhập email *"
          control={control}
          iconLeft={<EmailIcon />}
        />
        <SelectCustom
          name="scale"
          className="input-item"
          width="100%"
          placeholder="Quy mô công ty *"
          control={control}
          icon={<SupervisorAccountIcon />}
          options={listScales}
        />
        <InputCustom
          name="code"
          className="input-item"
          type="text"
          placeholder="Nhập mã giới thiệu"
          control={control}
          iconLeft={<KeyIcon />}
        />
        <div className="policies">
          <input
            onClick={() => setDisabled(!disabled)}
            id="agree"
            type="checkbox"
            width="16px"
            height="16px"
          />
          Đồng ý với{" "}
          <a
            href="https://www.happytimeapp.vn/dieu-khoan-su-dung"
            target="_blank"
            rel="noreferrer"
          >
            Điều khoản
          </a>
          và
          <a
            href="https://www.happytimeapp.vn/chinh-sach-bao-mat"
            target="_blank"
            rel="noreferrer"
          >
            Chính sách
          </a>
          của HappyTime
        </div>
        <div style={{ marginTop: "40px", marginBottom: "24px" }}>
          <ButtonCustom
            className="btn-register"
            height="48px"
            disabled={disabled}
            isSubmit
          >
            ĐĂNG KÝ
          </ButtonCustom>
        </div>
        <p className="tag-redirect">
          Bạn đã có tài khoản? <Link to="../login">Đăng nhập</Link>
        </p>
      </form>
    </>
  );
};

export default RegisterForm;
