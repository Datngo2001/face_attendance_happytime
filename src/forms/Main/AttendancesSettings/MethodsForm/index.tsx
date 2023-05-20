import { useEffect } from "react";
import {
    TimekeepingByPhone,
} from "./components";
import "./styles.scss";
import { useAppSelector } from "hooks/useAppSelector";
import { extraReducersCreateAttendanceConfig, extraReducersGetAttendanceConfig, extraReducersUpdateAttendanceConfig } from "store/slices/Main/Attendance-settings/actions/extraReducers";
import { useAppDispatch } from "hooks/useAppDispatch";
import ButtonCustom from "components/ButtonCustom";
import useCRUDForm from "hooks/useCRUDForm";
import { schema } from "./validation";
import { defaultValue } from "./defaultValues";
import { FormAction } from "forms/formAction";

const MethodsForm = () => {

    // HOOK REDUX TOOLKIT
    const { attendanceConfig, lastCreateSuccess, lastUpdateSuccess } = useAppSelector((state) => state.attendanceSettings);
    const dispatch = useAppDispatch();
    // ****************************

    const formAction = attendanceConfig ? FormAction.UPDATE : FormAction.CREATE;

    // REACT HOOK FORM
    const { control, setValue, getValues, handleSubmit } = useCRUDForm({
        defaultValues: attendanceConfig ?? defaultValue,
        validationSchema: schema
    })
    // ****************************

    console.log(getValues())

    // HOOK EFFECT
    useEffect(() => {
        dispatch(extraReducersGetAttendanceConfig());
    }, [lastCreateSuccess, lastUpdateSuccess]);
    // ****************************

    // ARROW FUNCTIONS
    const handleOnSubmit = (data) => {
        if (formAction === FormAction.UPDATE) {
            dispatch(extraReducersUpdateAttendanceConfig({ data }));
        } else if (formAction === FormAction.CREATE) {
            dispatch(extraReducersCreateAttendanceConfig({ data }));
        }
    };
    // ****************************
    return (
        <>
            <div className="attendances-setting--methods-form__wrapper">
                <TimekeepingByPhone
                    setValue={setValue}
                    getValues={getValues}
                    control={control}
                />

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
