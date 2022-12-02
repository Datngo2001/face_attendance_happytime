import { Link, useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { schema } from "./handleForm";
import InputCustom from "../../../components/InputCustom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.scss";
import ButtonCustom from "../../../components/ButtonCustom";
import LockIcon from "@mui/icons-material/Lock";
import { useEffect } from "react";
import { focusToElement } from "../../../utils";
import { useDispatch, useSelector } from "react-redux";
import { updateStatusState } from "../../../store/slices/Authentication/authSlice";
import * as registerActions from "../../../store/slices/Authentication/Register/registerActions";

const SetPasswordForm = () => {
    // STATE
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });
    // ******************************

    // HOOK REACT TOOLKIT
    const { status } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    // ****************************

    // HOOK ROUTER DOM
    const navigate = useNavigate();
    // ****************************

    // HOOK EFFECT
    useEffect(() => {
        focusToElement("password");
    }, []);

    useEffect(() => {
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
            email: dataRegister?.email,
            scale: parseInt(dataRegister?.scale),
            code: dataRegister?.code,
            password: data.password,
        };

        console.log("dataSubmit", dataSubmit);
        dispatch(registerActions.extraReducersRegister(dataSubmit));
    };
    // ****************************
    return (
        <>
            <form className="set-password-form__wrapper">
                <div className="set-password-form__header">
                    <Link className="tag-redirect" to="../login">
                        <KeyboardBackspaceIcon />
                        Quay lại
                    </Link>
                    <h2 className="set-password-form__title">Thiết lập mật khẩu</h2>
                </div>
                <div className="set-password-form__container">
                    <InputCustom
                        id="password"
                        className="input-item"
                        placeholder="Nhập mật khẩu"
                        type="password"
                        iconLeft={<LockIcon />}
                        register={register}
                        message={errors}
                    />
                    <InputCustom
                        id="confirmPassword"
                        className="input-item"
                        placeholder="Xác nhận mật khẩu"
                        type="password"
                        iconLeft={<LockIcon />}
                        register={register}
                        message={errors}
                    />
                </div>
                <div style={{ marginTop: "40px" }}>
                    <ButtonCustom onClick={handleSubmit(onSubmit)} height="48px">
                        Lưu
                    </ButtonCustom>
                </div>
            </form>
        </>
    );
};

export default SetPasswordForm;
