import { Link, useParams } from "react-router-dom";
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
import { useAppSelector } from "hooks/useAppSelector";
import { useAppDispatch } from "hooks/useAppDispatch";
import { extraReducersGetInfoEmployeeById } from "store/slices/Main/Employees/actions/extraReducers";
import LoadingCustom from "components/LoadingCustom";
import { convertIdToName, convertTimestampToString } from "utils/convertFunctions";
import { listEducation, listGender, listMarriedStatus, listRoles, listStatusEmployees, listTypeEmployees } from "utils/ListData";

const View = () => {
    const { loading, infoOfEmployee } = useAppSelector((state) => state.employees);
    const { id } = useParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(
            extraReducersGetInfoEmployeeById({
                id: id,
            })
        );
    }, [id])

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
                            agent_code={infoOfEmployee.agent_code}
                            id={infoOfEmployee._id}
                        />
                        <WorkInformation
                            jobPosition={infoOfEmployee.agent_position}
                            department={infoOfEmployee.agent_position}
                            statusEmployee={convertIdToName({
                                id: infoOfEmployee.agent_status,
                                list: listStatusEmployees,
                            })}
                            statusUsingHappyTime={infoOfEmployee.is_used_happy_time}
                            startWorkingDate={convertTimestampToString(
                                infoOfEmployee.start_working_date
                            )}
                            typeEmployee={convertIdToName({
                                id: infoOfEmployee.agent_type,
                                list: listTypeEmployees,
                            })} isRequiredTimekeeping={undefined} workBranch={undefined} />
                        <Profile
                            phoneNumber={infoOfEmployee.phone_number}
                            email={infoOfEmployee.personal_mail}
                            emailCompany={infoOfEmployee.company_mail}
                            gender={convertIdToName({
                                id: infoOfEmployee.gender,
                                list: listGender,
                            })}
                            birthDate={convertTimestampToString(
                                infoOfEmployee.date_of_birth
                            )}
                            temporaryAddress={infoOfEmployee.staying_address}
                            marriedStatus={convertIdToName({
                                id: infoOfEmployee.married_status,
                                list: listMarriedStatus,
                            })}
                            personalTaxCode={infoOfEmployee.personal_tax_id}
                            citizenId={infoOfEmployee.identify_id}
                            issuedPlace={infoOfEmployee.issued_by}
                            permanentAddress={infoOfEmployee.residence_address}
                            supplyDate={convertTimestampToString(
                                infoOfEmployee.issued_date
                            )}
                            education={convertIdToName({
                                id: infoOfEmployee.education_type,
                                list: listEducation,
                            })}
                            school={infoOfEmployee.school_name}
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
                        <Permission
                            role={convertIdToName({
                                id: infoOfEmployee.role,
                                list: listRoles,
                            })}
                        />
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
