import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import SelectCustom from "../../../../../../../components/SelectCustom";
import { permissionList } from "./data";
import "./styles.scss";

const Permission = ({ register, setValue, errors }) => {
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
                            className="input-item"
                            label="Quyền thao tác"
                            options={permissionList}
                            register={register}
                            placeholder="Quyền thao tác"
                            message={errors}
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
