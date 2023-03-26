import { Divider, Tooltip } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import "./styles.scss";
import "../index.scss";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./handleForm";
import InputFile from "components/InputFile";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";

const InfoForm = () => {
  // HOOK FORM
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
      <div className="info-form__wrapper profile-forms__wrapper">
        <p className="profile-forms__title">Thông tin cá nhân</p>
        <div className="info-form__body">
          <div className="avatar">
            <InputFile
              name="avatar"
              className="avatar-input"
              title="Đổi ảnh đại diện"
              sizePreImg="100px"
              type={2}
              control={control}
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
                name="name"
                label="Họ và tên"
                required={true}
                width="300px"
                type="text"
                control={control}
                placeholder="Nhập họ và tên"
              />
            </div>
            <div className="field-control">
              <InputCustom
                name="email"
                label="Email"
                required={true}
                width="300px"
                control={control}
                placeholder="Nhập email"
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
