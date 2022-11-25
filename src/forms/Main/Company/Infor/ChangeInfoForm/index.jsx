import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./styles.scss";
import InputFile from "../../../../../components/InputFile";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { listScales, schema } from "./handleForm";
import InputCustom from "../../../../../components/InputCustom";
import SelectCustom from "../../../../../components/SelectCustom";
import ButtonCustom from "../../../../../components/ButtonCustom";
import InputNote from "../../../../../components/InputNote";

const ChangeInfoForm = () => {
    // REACT HOOK FORM
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });
    //****************************

    //ARROW FUNCTIONS
    const handleOnSubmit = (data) => {
        console.log("data", data);
    };
    //****************************

    return (
        <>
            <div className="change-info-form__wrapper">
                <Link className="content-navigator" to="../info">
                    <ArrowBackRoundedIcon />
                    Quay lại
                </Link>
                <div className="content-title">Cập nhật thông tin công ty</div>
                <p className="change-info-form__note divider-bottom">
                    <InfoOutlinedIcon />
                    Thông tin cài đặt tại đây sẽ hiển thị tại mục Thông tin công trên App
                    HappyTime khi nhân sự truy cập workspace này.
                </p>
                <div className="change-info-form__body">
                    <div className="width-20">
                        <p className="avatar-header">Logo công ty</p>
                        <InputFile
                            id="companyAvatar"
                            register={register}
                            sizePreImg="100px"
                            title="Đổi Logo"
                            setValue={setValue}
                        />
                    </div>
                    <div className="width-40">
                        <InputCustom
                            id="companyName"
                            className="input-custom"
                            label="Tên công ty"
                            required={true}
                            width="300px"
                            placeholder="Nhập tên công ty"
                            register={register}
                            message={errors}
                        />
                        <InputCustom
                            id="companyHotline"
                            className="input-custom"
                            label="Hotline công ty"
                            type="phone"
                            required={true}
                            width="300px"
                            placeholder="Nhập số điện thoại"
                            register={register}
                            message={errors}
                        />
                        <InputCustom
                            id="companyEmail"
                            className="input-custom"
                            type="email"
                            label="Địa chỉ email công ty"
                            width="300px"
                            placeholder="Nhập email"
                            register={register}
                            message={errors}
                        />
                        <SelectCustom
                            id="companyScale"
                            label="Quy mô công ty"
                            placeholder="Quy mô công ty"
                            required={true}
                            width="300px"
                            register={register}
                            className="input-custom"
                            options={listScales}
                            message={errors}
                        />
                        <InputCustom
                            id="codeTax"
                            className="input-custom"
                            label="Mã số thuế"
                            width="300px"
                            placeholder="Nhập Mã số thuế"
                            register={register}
                            message={errors}
                        />
                    </div>
                    <div className="width-40">
                        <InputCustom
                            id="companyWebsite"
                            className="input-custom"
                            label="Website"
                            width="300px"
                            placeholder="Nhập địa chỉ website"
                            register={register}
                            message={errors}
                        />
                        <InputCustom
                            id="companyFanpage"
                            className="input-custom"
                            label="Fanpage"
                            width="300px"
                            placeholder="Nhập địa chỉ fanpage"
                            register={register}
                            message={errors}
                        />
                        <InputNote
                            id="mainBaseAddress"
                            label="Địa chỉ trụ sở chính"
                            register={register}
                            placeholder="Nhập địa chỉ trụ sở chính"
                            width="300px"
                            height="128px"
                        />
                        <InputNote
                            id="introBusiness"
                            label="Giới thiệu doanh nghiệp"
                            register={register}
                            placeholder="Nhập giới thiệu doanh nghiệp"
                            width="300px"
                            height="128px"
                        />
                    </div>
                </div>
                <div className="change-info-form__actions divider-top">
                    <ButtonCustom className="btn" height="32px" width="auto" type={3}>
                        Hủy bỏ
                    </ButtonCustom>
                    <ButtonCustom
                        className="btn"
                        height="32px"
                        width="auto"
                        type={2}
                        onClick={handleSubmit(handleOnSubmit)}
                    >
                        Lưu
                    </ButtonCustom>
                </div>
            </div>
        </>
    );
};

export default ChangeInfoForm;
