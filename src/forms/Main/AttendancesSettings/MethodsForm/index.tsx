import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ButtonCustom from "../../../../components/ButtonCustom";
import {
    TimekeepingByFace,
    TimekeepingByFingerprint,
    TimekeepingByPhone,
} from "./components";
import "./styles.scss";
import { useAppSelector } from "hooks/useAppSelector";
import { extraReducersGetAttendanceConfig } from "store/slices/Main/Attendance-settings/actions/extraReducers";
import { useAppDispatch } from "hooks/useAppDispatch";

const MethodsForm = () => {
    // REACT HOOK FORM
    const { register, setValue, handleSubmit } = useForm({});
    // ****************************

    // HOOK REDUX TOOLKIT
    const { attendanceConfig } = useAppSelector((state) => state.attendanceSettings);
    const dispatch = useAppDispatch();
    // ****************************

    // HOOK EFFECT
    useEffect(() => {
        dispatch(extraReducersGetAttendanceConfig());
    }, []);
    // ****************************

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
                    checked={attendanceConfig?.is_enable || true}
                />
                <TimekeepingByFingerprint
                    setValue={setValue}
                    checked={attendanceConfig?.is_enable || true}
                />
                <TimekeepingByFace setValue={setValue} checked={undefined} />
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
