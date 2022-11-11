import { yupResolver } from "@hookform/resolvers/yup";
import { Divider } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ButtonCustom from "../../../../components/ButtonCustom";
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
                        <div className="label">
                            <label htmlFor="oldPassword">
                                Mật khẩu hiện tại <span className="requirement">*</span>
                            </label>
                        </div>
                        <InputCustom
                            id="oldPassword"
                            type="password"
                            width="300px"
                            register={register}
                            placeholder="Nhập mật khẩu hiện tại"
                            message={errors}
                        />
                    </div>
                    <div className="field-control">
                        <div className="label">
                            <label htmlFor="newPassword">
                                Mật khẩu mới <span className="requirement">*</span>
                            </label>
                        </div>
                        <InputCustom
                            id="newPassword"
                            type="password"
                            width="300px"
                            register={register}
                            placeholder="Nhập mật khẩu mới"
                            message={errors}
                        />
                    </div>
                    <div className="field-control">
                        <div className="label">
                            <label htmlFor="confirmNewPassword">
                                Xác nhận lại mật khẩu mới{" "}
                                <span className="requirement">*</span>
                            </label>
                        </div>
                        <InputCustom
                            id="confirmNewPassword"
                            type="password"
                            width="300px"
                            register={register}
                            placeholder="Xác nhận lại mật khẩu mới"
                            message={errors}
                        />
                    </div>
                    <div className="checbox-control">
                        <input
                            id="logoutFromAllOfDevices_checkbox"
                            type="checkbox"
                            {...register("logoutFromAllOfDevices_checkbox")}
                        />
                        <div className="label">
                            <label htmlFor="logoutFromAllOfDevices_checkbox">
                                Đăng xuất khỏi tất cả các thiết bị
                            </label>
                        </div>
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
