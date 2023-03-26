import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import "./styles.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Divider } from "@mui/material";
import { schema } from "./handleForm";
import InputFile from "components/InputFile";
import InputCustom from "components/InputCustom";
import ButtonCustom from "components/ButtonCustom";

const CreateWorkspacesForm = () => {
  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log("data", data);
  };
  return (
    <>
      <form className="create-workspaces-form__wrapper">
        <Link className="tag-link" to="..">
          <ArrowBackIcon />
          Quay lại
        </Link>
        <h1 className="create-workspaces-form__title">Tạo workspace mới</h1>
        <div className="create-workspaces-form__input-content">
          <div className="input-image">
            <InputFile
              name="companyImg"
              sizePreImg="100px"
              type={1}
              className="input-btn"
              control={control}
            />
          </div>
          <div className="input-name">
            <InputCustom
              name="companyName"
              className="name-company"
              placeholder="Tên workspace của bạn"
              control={control}
            />
          </div>
          <Divider className="divider" />
          <ButtonCustom
            onClick={handleSubmit(onSubmit)}
            width="110px"
            height="32px"
          >
            Tạo
          </ButtonCustom>
        </div>
      </form>
    </>
  );
};

export default CreateWorkspacesForm;
