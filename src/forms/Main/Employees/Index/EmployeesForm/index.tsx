import { useForm } from "react-hook-form";
import { schema } from "./handleForm";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.scss";
import {
    AnnualLeave,
    BankInformation,
    Note,
    Profile,
    WorkInformation,
} from "./components";
import { useNavigate } from "react-router-dom";
import Permission from "./components/Permission";
import { useEffect, useMemo } from "react";
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";
import { extraReducersCreateInfoEmployee, extraReducersGetInfoEmployeeById, extraReducersUpdateInfoEmployee } from "store/slices/Main/Employees/actions/extraReducers";
import { updateStatusState } from "store/slices/Authentication/authSlice";
import { checkExist } from "auth";
import { uploadImgToFirebase } from "utils/uploadImgToFirebase";
import LoadingCustom from "components/LoadingCustom";
import ButtonCustom from "components/ButtonCustom";
import { FormAction } from "forms/formAction";
import { CreateDefaultValues } from "./defaultValues";

export type Props = {
    action: FormAction
}

const EmployeesForm: React.FC<Props> = ({ action = FormAction.CREATE }) => {
    const { loading, infoOfEmployee, status } = useAppSelector((state) => state.employees);

    const defaultValue = useMemo(() => {
        if (action === FormAction.CREATE) {
            return CreateDefaultValues
        }
        return infoOfEmployee;
    }, [infoOfEmployee])

    const {
        control,
        handleSubmit,
        setError,
        reset,
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: defaultValue
    });

    useEffect(() => { reset(defaultValue) }, [defaultValue])

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (action === FormAction.UPDATE) {
            dispatch(
                extraReducersGetInfoEmployeeById({
                    id: sessionStorage.getItem("idSelectedEmployee"),
                })
            );
        }
    }, []);

    useEffect(() => {
        if (status === "success") {
            if (action === FormAction.UPDATE) {
                navigate("../list/view");
            } else {
                navigate("../list/index");
            }
        }

        // Clean function
        return () => {
            dispatch(updateStatusState("fail"));
        };
    }, [status]);

    const handleOnSubmitUpdate = async (data) => {
        const isExistPhone = await checkExist({
            phone: data.phone_number,
        });
        const isExistPersonalEmail = await checkExist({
            email: data.personal_mail,
        });

        if (isExistPhone.payload && data.phone_number !== infoOfEmployee.phone_number) {
            setError("phone_number", {
                type: "custom",
                message: "Số điện thoại đã được sử dụng",
            });
        }
        if (
            isExistPersonalEmail.payload &&
            data.personal_mail !== infoOfEmployee.personal_mail
        ) {
            setError("personal_mail", {
                type: "custom",
                message: "Email đã được sử dụng",
            });
        }

        let checkPersonalEmail = false;
        if (isExistPersonalEmail.payload) {
            if (data.personal_mail === infoOfEmployee.personal_mail) {
                checkPersonalEmail = true;
            }
        } else {
            checkPersonalEmail = true;
        }
        let checkPhone = false;
        if (isExistPhone.payload) {
            if (data.phone_number === infoOfEmployee.phone_number) {
                checkPhone = true;
            }
        } else {
            checkPhone = true;
        }

        if (checkPhone && checkPersonalEmail) {
            let imgUrl;
            if (data.avatar !== infoOfEmployee.avatar) {
                imgUrl = await uploadImgToFirebase({
                    id: data.phone_number,
                    imageUpload: data.avatar,
                });
            }

            dispatch(
                extraReducersUpdateInfoEmployee({
                    id: infoOfEmployee._id,
                    dataUpdate: { ...data, avatar: imgUrl },
                })
            );
        }
    };
    const handleOnSubmitCreate = async (data) => {
        console.log(data)
        const isExistPhone = await checkExist({
            phone: data.phone_number,
        });
        const isExistPersonalEmail = await checkExist({
            email: data.personal_mail,
        });

        if (isExistPhone.payload) {
            setError("phone_number", {
                type: "custom",
                message: "Số điện thoại đã được sử dụng",
            });
        }
        if (isExistPersonalEmail.payload) {
            setError("personal_mail", {
                type: "custom",
                message: "Email đã được sử dụng",
            });
        }
        if (!isExistPersonalEmail.payload && !isExistPhone.payload) {
            const imgUrl = await uploadImgToFirebase({
                id: data.id,
                imageUpload: data.avatar,
            });
            dispatch(
                extraReducersCreateInfoEmployee({
                    dataCreate: { ...data, avatar: imgUrl },
                })
            );
        }
    };

    const handleOnCancel = () => {
        navigate(-1);
    };

    return (
        <>
            {loading ? (
                <LoadingCustom />
            ) : (
                <div className="employees-form__wrapper">
                    <Profile control={control} />
                    <BankInformation control={control} />
                    <WorkInformation action={action} control={control} />
                    <AnnualLeave control={control} />
                    <Permission control={control} />
                    <Note control={control} />
                    <div className="employees-form__actions divider-top">
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
                            onClick={handleSubmit(
                                action === FormAction.UPDATE
                                    ? handleOnSubmitUpdate
                                    : handleOnSubmitCreate
                            )}
                        >
                            Lưu
                        </ButtonCustom>
                    </div>
                </div>
            )}
        </>
    );
};

export default EmployeesForm;
