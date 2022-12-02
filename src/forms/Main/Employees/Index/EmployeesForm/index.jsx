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
    extraReducersGetInfoEmployeeById,
    extraReducersUpdateInfoEmployee,
} from "../../../../../store/slices/Main/Employees/actions/extraReducers";
import { convertStringToTimestamp, convertTimestampToString } from "../../../../../utils";
import { updateStatusState } from "../../../../../store/slices/Main/Employees/employeesSlice";

const EmployeesForm = ({ method }) => {
    // REACT HOOK FORM
    const {
        register,
        handleSubmit,
        setValue,
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
        dispatch(
            extraReducersGetInfoEmployeeById({
                id: sessionStorage.getItem("idSelectedEmployee"),
            })
        );
    }, []);

    useEffect(() => {
        if (method === "update") {
            setValue("avatar", infoOfEmployee.avatar);
            setValue("citizenId", infoOfEmployee.identify_id);
            setValue("temporaryAddress", infoOfEmployee.staying_address);
            setValue("education", infoOfEmployee.education_type?.name);
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
            navigate("../list/view");
        }

        // Clean function
        return () => {
            dispatch(updateStatusState("fail"));
        };
    }, [status]);
    // ****************************

    // ARROW FUNCTIONS
    const handleOnSubmit = (data) => {
        console.log("data", data);
        const dataSubmit = {
            agent_code: infoOfEmployee.agent_code,
            agent_position: data.agent_position,
            agent_status: data.employeeStatus,
            agent_type: data.typeEmployee,
            avatar: null,
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
            start_working_date: data.startWorkingDate,
            staying_address: data.temporaryAddress,
            stop_working_date: infoOfEmployee.stop_working_date,
            tenant_id: infoOfEmployee.tenant_id,
            total_date_off: data.numOfLeaveThisYear,
            username: null,
            working_branch: data.workBranch,
            _id: infoOfEmployee._id,
        };

        console.log("dataSubmit", dataSubmit);
        dispatch(
            extraReducersUpdateInfoEmployee({
                id: infoOfEmployee._id,
                dataUpdate: dataSubmit,
            })
        );
    };
    const handleOnCancel = () => {
        navigate("../list/view");
    };
    // ****************************
    console.log("infoOfEmployee", infoOfEmployee);
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
                        graduationDate={convertTimestampToString(
                            infoOfEmployee.graduation_date
                        )}
                        gender={parseInt(infoOfEmployee.gender)}
                        marriedStatus={parseInt(infoOfEmployee.married_status)}
                        supplyDate={convertTimestampToString(infoOfEmployee.issued_date)}
                        birthDate={convertTimestampToString(infoOfEmployee.date_of_birth)}
                    />
                    <BankInformation
                        register={register}
                        setValue={setValue}
                        errors={errors}
                    />
                    <WorkInformation
                        register={register}
                        setValue={setValue}
                        trigger={trigger}
                        errors={errors}
                        startWorkingDate={convertTimestampToString(
                            infoOfEmployee.startWorkingDate
                        )}
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
                        manipulationRight={infoOfEmployee.role}
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

export default EmployeesForm;
