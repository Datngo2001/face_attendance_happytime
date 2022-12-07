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
import ButtonCustom from "../../../../../components/ButtonCustom";
import { useNavigate } from "react-router-dom";
import Permission from "./components/Permission";
import LoadingCustom from "../../../../../components/LoadingCustom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
    extraReducersCreateInfoEmployee,
    extraReducersGetInfoEmployeeById,
    extraReducersUpdateInfoEmployee,
} from "../../../../../store/slices/Main/Employees/actions/extraReducers";
import { convertStringToTimestamp, convertTimestampToString } from "../../../../../utils";
import { updateStatusState } from "../../../../../store/slices/Main/Employees/employeesSlice";
import * as auth from "../../../../../auth/index";
import { uploadImgToFirebase } from "../../../../../utils/uploadImgToFirebase";

const EmployeesForm = ({ method }) => {
    // @method: update/create
    // REACT HOOK FORM
    const {
        register,
        handleSubmit,
        setValue,
        setError,
        trigger,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange",
    });
    // ****************************

    // HOOK ROUTER DOM
    const navigate = useNavigate();
    // ******************************

    // HOOK REACT TOOLKIT
    const { loading, infoOfEmployee, status } = useSelector((state) => state.employees);
    const dispatch = useDispatch();
    // ****************************

    // HOOK EFFECT
    useEffect(() => {
        if (method === "update") {
            dispatch(
                extraReducersGetInfoEmployeeById({
                    id: sessionStorage.getItem("idSelectedEmployee"),
                })
            );
        }
    }, []);

    useEffect(() => {
        if (method === "update") {
            setValue("avatar", infoOfEmployee.avatar);
            setValue("citizenId", infoOfEmployee.identify_id);
            setValue("temporaryAddress", infoOfEmployee.staying_address);
            setValue("name", infoOfEmployee.name);
            setValue("phoneNumber", infoOfEmployee.phone_number);
            setValue("emailCompany", infoOfEmployee.company_mail);
            setValue("issuedPlace", infoOfEmployee.issued_by);
            setValue("permanentAddress", infoOfEmployee.residence_address);
            setValue("school", infoOfEmployee.school_name);
            setValue("personalEmail", infoOfEmployee.personal_mail);
            setValue("personalTaxCode", infoOfEmployee.personal_tax_id);
            setValue("major", infoOfEmployee.major);
            setValue("bankAccountNumber", infoOfEmployee.bank_account_number);
            setValue("bankName", infoOfEmployee.bank);
            setValue("bankBranch", infoOfEmployee.bank_branch);
            setValue("workBranch", infoOfEmployee.working_branch);
            // setValue("workBranch", infoOfEmployee.total_date_off);
            setValue("note", infoOfEmployee.note);
            setValue("staffId", infoOfEmployee.agent_code);
        }
    }, [infoOfEmployee]);

    useEffect(() => {
        if (status === "success") {
            if (method === "update") {
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
    // ****************************

    // ARROW FUNCTIONS
    const handleOnSubmitUpdate = async (data) => {
        const isExistPhone = await auth.checkExist({
            phone: data.phoneNumber,
        });
        const isExistPersonalEmail = await auth.checkExist({
            email: data.personalEmail,
        });

        if (isExistPhone.payload && data.phoneNumber !== infoOfEmployee.phone_number) {
            setError("phoneNumber", {
                type: "custom",
                message: "Số điện thoại đã được sử dụng",
            });
        }
        if (
            isExistPersonalEmail.payload &&
            data.personalEmail !== infoOfEmployee.personal_mail
        ) {
            setError("personalEmail", {
                type: "custom",
                message: "Email đã được sử dụng",
            });
        }

        let checkPersonalEmail = false;
        if (isExistPersonalEmail.payload) {
            if (data.personalEmail === infoOfEmployee.personal_mail) {
                checkPersonalEmail = true;
            }
        } else {
            checkPersonalEmail = true;
        }
        let checkPhone = false;
        if (isExistPhone.payload) {
            if (data.phoneNumber === infoOfEmployee.phone_number) {
                checkPhone = true;
            }
        } else {
            checkPhone = true;
        }

        if (checkPhone && checkPersonalEmail) {
            let imgUrl;
            if (data.avatar !== infoOfEmployee.avatar) {
                imgUrl = await uploadImgToFirebase({
                    id: data.phoneNumber,
                    imageUpload: data.avatar,
                });
            }
            const dataSubmit = {
                agent_code: infoOfEmployee.agent_code,
                agent_position: data.agent_position,
                agent_status: data.employeeStatus,
                agent_type: data.typeEmployee,
                avatar: imgUrl,
                bank: data.bankName,
                bank_account_number: data.bankAccountNumber,
                bank_branch: data.bankBranch,
                company_mail: data.emailCompany,
                create_by: infoOfEmployee.create_by,
                created_date: infoOfEmployee.created_date,
                date_of_birth: convertStringToTimestamp(data.birthDate),
                department: data.department,
                device_id: infoOfEmployee.device_id,
                education_type: data.education,
                gender: data.gender,
                graduation_date: convertStringToTimestamp(data.graduationDate),
                identify_id: data.citizenId,
                is_deleted: infoOfEmployee.is_deleted,
                is_used_happy_time: infoOfEmployee.is_used_happy_time,
                issued_by: data.issuedPlace,
                issued_date: convertStringToTimestamp(data.supplyDate),
                last_update_by: infoOfEmployee.last_update_by,
                last_updated_date: infoOfEmployee.last_updated_date,
                major: data.major,
                married_status: data.marriedStatus,
                name: data.name,
                note: data.note,
                personal_mail: data.personalEmail,
                personal_tax_id: data.personalTaxCode,
                phone_number: data.phoneNumber,
                residence_address: data.permanentAddress,
                role: data.manipulationRight,
                school_name: data.school,
                start_working_date: convertStringToTimestamp(data.startWorkingDate),
                staying_address: data.temporaryAddress,
                stop_working_date: infoOfEmployee.stop_working_date,
                tenant_id: infoOfEmployee.tenant_id,
                total_date_off: data.numOfLeaveThisYear,
                username: null,
                working_branch: data.workBranch,
                _id: infoOfEmployee._id,
            };
            // console.log("dataSubmit", dataSubmit);
            dispatch(
                extraReducersUpdateInfoEmployee({
                    id: infoOfEmployee._id,
                    dataUpdate: dataSubmit,
                })
            );
        }
    };
    const handleOnSubmitCreate = async (data) => {
        // console.log("data", data);
        const isExistPhone = await auth.checkExist({
            phone: data.phoneNumber,
        });
        const isExistPersonalEmail = await auth.checkExist({
            email: data.personalEmail,
        });

        if (isExistPhone.payload) {
            setError("phoneNumber", {
                type: "custom",
                message: "Số điện thoại đã được sử dụng",
            });
        }
        if (isExistPersonalEmail.payload) {
            setError("personalEmail", {
                type: "custom",
                message: "Email đã được sử dụng",
            });
        }
        if (!isExistPersonalEmail.payload && !isExistPhone.payload) {
            const imgUrl = await uploadImgToFirebase({
                phoneNumber: data.phoneNumber,
                imageUpload: data.avatar,
            });
            const dataSubmit = {
                agent_position: null,
                agent_status: data.employeeStatus || null,
                agent_type: data.typeEmployee || null,
                avatar: imgUrl,
                bank: data.bankName || null,
                bank_account_number: data.bankAccountNumber || null,
                bank_branch: data.bankBranch || null,
                company_mail: data.emailCompany || null,
                date_of_birth: convertStringToTimestamp(data.birthDate) || null,
                department: data.department || null,
                education_type: data.education || null,
                gender: data.gender || null,
                graduation_date: convertStringToTimestamp(data.graduationDate) || null,
                identify_id: data.citizenId || null,
                issued_by: data.issuedPlace || null,
                issued_date: convertStringToTimestamp(data.supplyDate) || null,
                major: data.major || null,
                married_status: data.marriedStatus || null,
                name: data.name,
                note: data.note || null,
                personal_mail: data.personalEmail,
                personal_tax_id: data.personalTaxCode || null,
                phone_number: data.phoneNumber,
                residence_address: data.permanentAddress || null,
                role: 2,
                school_name: data.school || null,
                start_working_date:
                    convertStringToTimestamp(data.startWorkingDate) || null,
                staying_address: data.temporaryAddress || null,
                stop_working_date: infoOfEmployee.stop_working_date || null,
                total_date_off: data.numOfLeaveThisYear || null,
                working_branch: data.workBranch || null,
            };
            // console.log("dataSubmit", dataSubmit);
            dispatch(
                extraReducersCreateInfoEmployee({
                    dataCreate: dataSubmit,
                })
            );
        }
    };
    const handleOnCancel = () => {
        navigate(-1);
    };
    // ****************************
    // console.log("infoOfEmployee", infoOfEmployee);
    return (
        <>
            {loading ? (
                <LoadingCustom />
            ) : (
                <div className="employees-form__wrapper">
                    <Profile
                        register={register}
                        setValue={setValue}
                        errors={errors}
                        trigger={trigger}
                        graduationDate={
                            method === "update" &&
                            convertTimestampToString(infoOfEmployee.graduation_date)
                        }
                        gender={method === "update" && parseInt(infoOfEmployee.gender)}
                        marriedStatus={
                            method === "update" && parseInt(infoOfEmployee.married_status)
                        }
                        education={
                            method === "update" && parseInt(infoOfEmployee.education_type)
                        }
                        supplyDate={
                            method === "update" &&
                            convertTimestampToString(infoOfEmployee.issued_date)
                        }
                        birthDate={
                            method === "update" &&
                            convertTimestampToString(infoOfEmployee.date_of_birth)
                        }
                        avatar={method === "update" && infoOfEmployee.avatar}
                    />
                    <BankInformation
                        register={register}
                        setValue={setValue}
                        errors={errors}
                    />
                    <WorkInformation
                        method={method}
                        register={register}
                        setValue={setValue}
                        trigger={trigger}
                        errors={errors}
                        startWorkingDate={
                            method === "update" &&
                            convertTimestampToString(infoOfEmployee.start_working_date)
                        }
                        employeeStatus={
                            method === "update" && infoOfEmployee.agent_status
                        }
                        typeEmployee={method === "update" && infoOfEmployee.agent_type}
                    />
                    <AnnualLeave
                        register={register}
                        setValue={setValue}
                        errors={errors}
                    />
                    <Permission
                        register={register}
                        setValue={setValue}
                        errors={errors}
                        manipulationRight={method === "update" ? infoOfEmployee.role : 2}
                    />
                    <Note register={register} setValue={setValue} errors={errors} />
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
                                method === "update"
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
