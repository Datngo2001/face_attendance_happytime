import { Divider, Tooltip } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import "./styles.scss";
import "../index.scss";
import ButtonCustom from "../../../../components/ButtonCustom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputCustom from "../../../../components/InputCustom";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./handleForm";
import InputFile from "../../../../components/InputFile";

const InfoForm = () => {
  // HOOK FORM
  const {
    register,
    handleSubmit,
    setValue,
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
      <div className="info-form__wrapper profile-forms__wrapper">
        <p className="profile-forms__title">Thông tin cá nhân</p>
        <div className="info-form__body">
          <div className="avatar">
            <InputFile
              id="avatar"
              name="avatar"
              className="avatar-input"
              title="Đổi ảnh đại diện"
              sizePreImg="100px"
              type={2}
              register={register}
              setValue={setValue}
            />
          </div>
          <div className="info">
            <div className="field-control">
              <p className="label" style={{ fontWeight: "500" }}>
                Số điện thoại
              </p>
              <p className="number-phone">
                0964088473{" "}
                <Tooltip
                  placement="right"
                  arrow
                  title={`Thông tin không được phép chỉnh sửa. Vui lòng liên hệ HappyTime để được hỗ trợ tiếp.`}
                >
                  <span className="icon">
                    <ErrorOutlineOutlinedIcon />
                  </span>
                </Tooltip>
              </p>
            </div>
            <div className="field-control">
              <InputCustom
                id="name"
                name="name"
                label="Họ và tên"
                required={true}
                width="300px"
                type="text"
                register={register}
                placeholder="Nhập họ và tên"
                message={errors}
              />
            </div>
            <div className="field-control">
              <InputCustom
                id="email"
                name="email"
                label="Email"
                required={true}
                width="300px"
                register={register}
                placeholder="Nhập email"
                message={errors}
              />
            </div>
          </div>
        </div>
      </div>
      <Divider />
      <div className="profile-forms__action">
        <ButtonCustom
          height="32px"
          width="57px"
          onClick={handleSubmit(handleOnSubmit)}
        >
          Lưu
        </ButtonCustom>
      </div>
    </>
  );
};

export default InfoForm;
