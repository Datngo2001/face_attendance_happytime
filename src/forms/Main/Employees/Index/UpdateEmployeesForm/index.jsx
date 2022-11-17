import { useForm } from "react-hook-form";
import { schema } from "./handleForm";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.scss";
import { Profile } from "./components";
import ButtonCustom from "../../../../../components/ButtonCustom";
import { useNavigate } from "react-router-dom";

const UpdateEmployeesForm = ({ method }) => {
    // REACT HOOK FORM
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema), mode: "onChange" });
    // ****************************

    // HOOK ROUTER
    const navigate = useNavigate();
    // ******************************

    // HOOK EFFECT
    // ****************************

    // ARROW FUNCTIONS
    const handleOnSubmit = (data) => {
        console.log("data", data);
    };

    const handleOnCancel = () => {
        navigate("../list/view");
    };
    // ****************************

    return (
        <>
            <div className="update-employees-form__wrapper">
                <Profile register={register} setValue={setValue} errors={errors} />
                <div className="update-employees-form__actions divider-top">
                    <ButtonCustom
                        className="btn btn--cancel"
                        width="auto"
                        height="32px"
                        onClick={handleOnCancel}
                    >
                        Hủy bỏ
                    </ButtonCustom>
                    <ButtonCustom
                        className="btn"
                        width="auto"
                        height="32px"
                        onClick={handleSubmit(handleOnSubmit)}
                    >
                        Lưu
                    </ButtonCustom>
                </div>
            </div>
        </>
    );
};

export default UpdateEmployeesForm;
