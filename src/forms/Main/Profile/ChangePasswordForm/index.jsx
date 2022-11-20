import { yupResolver } from "@hookform/resolvers/yup";
import { Divider } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ButtonCustom from "../../../../components/ButtonCustom";
import CheckboxCustom from "../../../../components/CheckboxCustom";
import InputCustom from "../../../../components/InputCustom";
import { schema } from "./handleForm";
import "./styles.scss";

const ChangePasswordForm = () => {
    // REACT HOOK FORM
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema), mode: "onChange" });
    // ****************************

    // HOOK EFFECT
    useEffect(() => {}, []);
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
                        <InputCustom
                            id="oldPassword"
                            label="Mật khẩu hiện tại"
                            required={true}
                            direction="row"
                            type="password"
                            width="300px"
                            register={register}
                            placeholder="Nhập mật khẩu hiện tại"
                            message={errors}
                        />
                    </div>
                    <div className="field-control">
                        <InputCustom
                            id="newPassword"
                            label="Mật khẩu mới"
                            required={true}
                            direction="row"
                            type="password"
                            width="300px"
                            register={register}
                            placeholder="Nhập mật khẩu mới"
                            message={errors}
                        />
                    </div>
                    <div className="field-control">
                        <InputCustom
                            id="confirmNewPassword"
                            label="Xác nhận lại mật khẩu mới"
                            required={true}
                            direction="row"
                            type="password"
                            width="300px"
                            register={register}
                            placeholder="Xác nhận lại mật khẩu mới"
                            message={errors}
                        />
                    </div>
                    <div className="checbox-control">
                        <CheckboxCustom
                            id="logoutFromAllOfDevices"
                            label="Đăng xuất khỏi tất cả các thiết bị"
                            register={register}
                        />
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
