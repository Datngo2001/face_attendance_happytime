import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import ApartmentIcon from "@mui/icons-material/Apartment";
import "./styles.scss";
import InputCustom from "../../../components/InputCustom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Divider } from "@mui/material";
import ButtonCustom from "../../../components/ButtonCustom";
import InputFile from "../../../components/InputFile";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const CreateWorkspacesForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver() });

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
                        <ApartmentIcon />
                        <InputFile className="input-btn" icon={<CameraAltIcon />} />
                    </div>
                    <div className="input-name">
                        <InputCustom
                            id="nameCompany"
                            className="name-company"
                            placeholder="Tên workspace của bạn"
                            register={register}
                        >
                            {errors.nameCompany?.message}
                        </InputCustom>
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
