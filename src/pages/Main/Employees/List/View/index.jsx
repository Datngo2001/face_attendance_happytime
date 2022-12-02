import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.scss";
import "../index.scss";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import {
    BankInformation,
    Header,
    Note,
    Permission,
    Profile,
    WorkInformation,
} from "./components";
import { useEffect } from "react";
import LoadingCustom from "../../../../../components/LoadingCustom";
import { extraReducersGetInfoEmployeeById } from "../../../../../store/slices/Main/Employees/actions/extraReducers";
import {
    convertRoleIdToTitle,
    convertTimestampToString,
} from "../../../../../utils/convertFunctions";

const View = () => {
    // HOOK REACT TOOLKIT
    const { loading, infoOfEmployee } = useSelector((state) => state.employees);
    const dispatch = useDispatch();
    // *****************************

    // VARIABLES
    // ******************************

    // HOOK EFFECT
    useEffect(() => {
        dispatch(
            extraReducersGetInfoEmployeeById({
                id: sessionStorage.getItem("idSelectedEmployee"),
            })
        );

        // Clean function
    }, []);
    // *****************************

    // ARROW FUNCTIONS
    // *****************************

    return (
        <>
            <div className="view__wrapper">
                <Link className="content-navigator" to="../list/index">
                    <ArrowBackRoundedIcon />
                    Quay lại
                </Link>
                <h3 className="content-title">Chi tiết nhân viên</h3>
                {loading ? (
                    <LoadingCustom />
                ) : (
                    <>
                        <Header
                            avatar={infoOfEmployee.avatar}
                            name={infoOfEmployee.name}
                            id={infoOfEmployee.agent_code}
                        />
                        <WorkInformation
                            jobPosition={infoOfEmployee.agent_position}
                            department={infoOfEmployee.agent_position}
                            statusEmployee={infoOfEmployee.agent_status}
                            statusUsingHappyTime={infoOfEmployee.is_used_happy_time}
                        />
                        <Profile
                            phoneNumber={infoOfEmployee.phone_number}
                            email={infoOfEmployee.personal_mail}
                            emailCompany={infoOfEmployee.company_mail}
                            gender={infoOfEmployee.gender}
                            birthDate={convertTimestampToString(
                                infoOfEmployee.date_of_birth
                            )}
                            temporaryAddress={infoOfEmployee.staying_address}
                            marriedStatus={infoOfEmployee.married_status}
                            personalTaxCode={infoOfEmployee.personal_tax_id}
                            citizenId={infoOfEmployee.identify_id}
                            issuedPlace={infoOfEmployee.issued_by}
                            permanentAddress={infoOfEmployee.residence_address}
                            supplyDate={convertTimestampToString(
                                infoOfEmployee.issued_date
                            )}
                            education={infoOfEmployee.education_type}
                            school={infoOfEmployee.school}
                            major={infoOfEmployee.major}
                            graduationDate={convertTimestampToString(
                                infoOfEmployee.graduation_date
                            )}
                        />
                        <BankInformation
                            bankAccountNumber={infoOfEmployee.bank_account_number}
                            bankName={infoOfEmployee.bank}
                            bankBranch={infoOfEmployee.bank_branch}
                        />
                        <Permission role={convertRoleIdToTitle(infoOfEmployee.role)} />
                        <Note
                            note={
                                infoOfEmployee.note || (
                                    <span style={{ color: "#cccccc", fontWeight: "500" }}>
                                        Chưa cập nhật
                                    </span>
                                )
                            }
                        />
                    </>
                )}
            </div>
        </>
    );
};

export default View;
