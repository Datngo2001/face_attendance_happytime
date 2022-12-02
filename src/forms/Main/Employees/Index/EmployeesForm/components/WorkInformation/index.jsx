import BusinessCenterRoundedIcon from "@mui/icons-material/BusinessCenterRounded";
import CheckboxCustom from "../../../../../../../components/CheckboxCustom";
import InputCustom from "../../../../../../../components/InputCustom";
import InputDate from "../../../../../../../components/InputDate";
import SelectCustom from "../../../../../../../components/SelectCustom";
import {
    jobPositionList,
    listStatusEmployees,
    listTypeEmployees,
} from "../../../../../../../utils/ListData";
import "./styles.scss";

const WorkInformation = ({ register, setValue, trigger, errors, startWorkingDate }) => {
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
                            disabled={true}
                            width="100%"
                            className="input-item"
                            label="Mã nhân viên"
                            register={register}
                            placeholder="Mã nhân viên"
                            message={errors}
                        />
                        <InputDate
                            id="startWorkingDate"
                            className="input-item"
                            label="Ngày bắt đầu đi làm"
                            required={true}
                            placeholder="Ngày bắt đầu đi làm"
                            setValue={setValue}
                            message={errors}
                            trigger={trigger}
                            defaultValue={startWorkingDate}
                        />
                        <CheckboxCustom
                            id="doNotRequireTimekeeping"
                            className="input-item checkbox"
                            register={register}
                            label="Không yêu cầu chấm công"
                        />
                    </div>
                    <div className="col">
                        <SelectCustom
                            id="department"
                            width="100%"
                            className="input-item"
                            required={true}
                            label="Phòng ban"
                            register={register}
                            placeholder="Phòng ban"
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
                            options={listStatusEmployees}
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
                            options={listStatusEmployees}
                            message={errors}
                        />
                        <SelectCustom
                            id="typeEmployee"
                            width="100%"
                            className="input-item"
                            label="Loại hình nhân sự"
                            register={register}
                            placeholder="Loại hình nhân sự"
                            options={listTypeEmployees}
                            message={errors}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorkInformation;
