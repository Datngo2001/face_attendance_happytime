import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ButtonCustom from "../../../../components/ButtonCustom";
import { extraReducersGetInfoConfig } from "../../../../store/slices/Main/Attendance-settings/actions/extraReducers";
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

    // HOOK REDUX TOOLKIT
    const { loading, infoConfig } = useSelector((state) => state.attendanceSettings);
    const dispatch = useDispatch();
    // ****************************

    // HOOK EFFECT
    useEffect(() => {
        dispatch(extraReducersGetInfoConfig());
    }, []);
    // ****************************
    console.log("infoConfig", infoConfig);

    // ARROW FUNCTIONS
    const handleOnSubmit = (data) => {
        console.log("data", data);
    };
    // ****************************
    return (
        <>
            <div className="attendances-setting--methods-form__wrapper">
                <TimekeepingByPhone
                    setValue={setValue}
                    register={register}
                    checked={infoConfig?.is_enable || true}
                />
                <TimekeepingByFingerprint
                    setValue={setValue}
                    checked={infoConfig?.is_enable || true}
                />
                <TimekeepingByFace setValue={setValue} />
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
