import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import SelectCustom from "../../../../../../../components/SelectCustom";
import { listRoles } from "../../../../../../../utils/ListData";
import "./styles.scss";

const Permission = ({ register, setValue, errors, manipulationRight, method }) => {
    return (
        <>
            <div className="employees-form--permission__wrapper divider-top">
                <div className="title">
                    <SettingsRoundedIcon />
                    Quyền thao tác trên HappyTime
                </div>
                <div className="employees-form__container">
                    <div className="col">
                        <SelectCustom
                            id="manipulationRight"
                            width="100%"
                            required={true}
                            disabled={true}
                            className="input-item"
                            label="Quyền thao tác"
                            options={listRoles}
                            register={register}
                            placeholder="Quyền thao tác"
                            message={errors}
                            defaultValue={manipulationRight}
                            setValue={setValue}
                        />
                    </div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
            </div>
        </>
    );
};

export default Permission;
