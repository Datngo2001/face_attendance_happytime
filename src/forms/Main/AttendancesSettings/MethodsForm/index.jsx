import { useForm } from "react-hook-form";
import ButtonCustom from "../../../../components/ButtonCustom";
import {
    TimekeepingByFace,
    TimekeepingByFingerprint,
    TimekeepingByPhone,
} from "./components";
import "./styles.scss";

const MethodsForm = () => {
    // REACT HOOK FORM
    const { register, setValue, handleSubmit } = useForm({});
    // ****************************

    // ARROW FUNCTIONS
    const handleOnSubmit = (data) => {
        console.log("data", data);
    };
    // ****************************
    return (
        <>
            <div className="attendances-setting--methods-form__wrapper">
                <TimekeepingByPhone setValue={setValue} />
                <TimekeepingByFingerprint />
                <TimekeepingByFace />
                <div className="attendances-setting--methods-form__actions divider-top">
                    <ButtonCustom
                        height="32px"
                        width="60px"
                        onClick={handleSubmit(handleOnSubmit)}
                    >
                        Lưu
                    </ButtonCustom>
                </div>
            </div>
        </>
    );
};

export default MethodsForm;
