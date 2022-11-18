import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import InputCustom from "../../../../../../../components/InputCustom";
import SelectCustom from "../../../../../../../components/SelectCustom";
import { employeeStatusList, jobPositionList, typeEmployeeList } from "./data";
import "./styles.scss";

const WorkInformation = ({ register, setValue, errors }) => {
    return (
        <>
            <div className="employees-form--work-information__wrapper divider-top">
                <div className="title">
                    <BusinessCenterRoundedIcon />
                    Thông tin công việc
                </div>
                <div className="employees-form__container">
                    <div className="col">
                        <InputCustom
                            id="staffId"
                            width="100%"
                            className="input-item"
                            label="Mã nhân viên"
                            register={register}
                            placeholder="Mã nhân viên"
                            message={errors}
                        />
                    </div>
                    <div className="col">
                        <SelectCustom
                            id="jobPosition"
                            width="100%"
                            className="input-item"
                            required={true}
                            label="Vị trí công việc"
                            register={register}
                            placeholder="Vị trí công việc"
                            options={jobPositionList}
                            message={errors}
                        />
                        <SelectCustom
                            id="employeeStatus"
                            width="100%"
                            className="input-item"
                            required={true}
                            label="Trạng thái nhân sự"
                            register={register}
                            placeholder="Trạng thái nhân sự"
                            options={employeeStatusList}
                            message={errors}
                        />
                    </div>
                    <div className="col">
                        <SelectCustom
                            id="workBranch"
                            width="100%"
                            className="input-item"
                            label="Chi nhánh làm việc"
                            register={register}
                            placeholder="Chi nhánh làm việc"
                            // options={employeeStatusList}
                            message={errors}
                        />
                        <SelectCustom
                            id="typeEmployee"
                            width="100%"
                            className="input-item"
                            label="Loại hình nhân sự"
                            register={register}
                            placeholder="Loại hình nhân sự"
                            options={typeEmployeeList}
                            message={errors}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkInformation;
