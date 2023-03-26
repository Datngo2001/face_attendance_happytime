import { Link, useNavigate } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./styles.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./handleForm";
import { useEffect } from "react";
import { useAppSelector } from "hooks/useAppSelector";
import { extraReducersGetInfoCompany, extraReducersUpdateInfoCompany } from "store/slices/Main/Company/actions/extraReducers";
import { useAppDispatch } from "hooks/useAppDispatch";
import { updateStatusState } from "store/slices/Authentication/authSlice";
import { uploadImgToFirebase } from "utils/uploadImgToFirebase";
import LoadingCustom from "components/LoadingCustom";
import InputFile from "components/InputFile";
import InputCustom from "components/InputCustom";
import SelectCustom from "components/SelectCustom";
import { listScales } from "utils/ListData";
import InputNote from "components/InputNote";
import ButtonCustom from "components/ButtonCustom";

const ChangeInfoForm = () => {
  // HOOK REACT TOOLKIT
  const { infoOfCompany, status, loading } = useAppSelector(
    (state) => state.company
  );
  const dispatch = useAppDispatch();
  // ****************************

  // REACT HOOK FORM
  const {
    control,
    register,
    handleSubmit,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      avatar: infoOfCompany.avatar
    }
  });
  //****************************

  // ROUTER HOOK
  const navigate = useNavigate();
  //****************************


  // HOOK EFFECT
  useEffect((): any => {
    dispatch(extraReducersGetInfoCompany());
  }, []);

  useEffect(() => {
    if (status === "success") {
      navigate("../info");
    }

    // Clean function
    return () => {
      dispatch(updateStatusState("fail"));
    };
  }, [status]);
  // ****************************

  //ARROW FUNCTIONS
  const handleOnSubmit = async (data) => {
    let imgUrl;
    if (data.avatar !== infoOfCompany.avatar) {
      imgUrl = await uploadImgToFirebase({
        id: infoOfCompany._id,
        imageUpload: data.avatar,
      });
    }

    dispatch(
      extraReducersUpdateInfoCompany({
        dataUpdate: { ...data, avatar: imgUrl, scale: parseInt(data.companyScale) },
      })
    );
  };
  //****************************

  return (
    <>
      {loading ? (
        <LoadingCustom />
      ) : (
        <div className="change-info-form__wrapper">
          <Link className="content-navigator" to="../info">
            <ArrowBackRoundedIcon />
            Quay lại
          </Link>
          <div className="content-title">Cập nhật thông tin công ty</div>
          <p className="change-info-form__note divider-bottom">
            <InfoOutlinedIcon />
            Thông tin cài đặt tại đây sẽ hiển thị tại mục Thông tin công trên
            App HappyTime khi nhân sự truy cập workspace này.
          </p>
          <div className="change-info-form__body">
            <div className="width-20">
              <p className="avatar-header">Logo công ty</p>
              <InputFile
                name="avatar"
                register={register}
                sizePreImg="100px"
                title="Đổi Logo"
                setValue={setValue}
              />
            </div>
            <div className="width-40">
              <InputCustom
                name="company_name"
                className="input-custom"
                label="Tên công ty"
                required={true}
                width="300px"
                placeholder="Nhập tên công ty"
                control={control}
              />
              <InputCustom
                name="company_shorthand"
                className="input-custom"
                label="Tên viết tắt của công ty"
                required={true}
                width="300px"
                placeholder="Nhập tên viết tắt của công ty"
                control={control}
              />
              <InputCustom
                name="hotline"
                className="input-custom"
                label="Hotline công ty"
                type="phone"
                width="300px"
                placeholder="Nhập số điện thoại"
                control={control}
              />
              <InputCustom
                name="company_mail"
                className="input-custom"
                type="email"
                label="Địa chỉ email công ty"
                width="300px"
                placeholder="Nhập email"
                control={control}
              />
              <SelectCustom
                name="companyScale"
                label="Quy mô công ty"
                placeholder="Quy mô công ty"
                required={true}
                width="300px"
                control={control}
                className="input-custom"
                options={listScales}
              />
              <InputCustom
                name="tax_number"
                className="input-custom"
                label="Mã số thuế"
                width="300px"
                placeholder="Nhập Mã số thuế"
                control={control}
              />
            </div>
            <div className="width-40">
              <InputCustom
                name="website"
                className="input-custom"
                label="Website"
                width="300px"
                placeholder="Nhập địa chỉ website"
                control={control}
              />
              <InputCustom
                name="fanpage"
                className="input-custom"
                label="Fanpage"
                width="300px"
                placeholder="Nhập địa chỉ fanpage"
                control={control}
              />
              <InputNote
                name="mainBaseAddress"
                label="Địa chỉ trụ sở chính"
                control={control}
                placeholder="Nhập địa chỉ trụ sở chính"
                width="300px"
                height="128px" />
              <InputNote
                name="introBusiness"
                label="Giới thiệu doanh nghiệp"
                control={control}
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
      )}
    </>
  );
};

export default ChangeInfoForm;
