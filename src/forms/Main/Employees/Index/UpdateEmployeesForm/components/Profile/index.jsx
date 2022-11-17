import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import InputCustom from "../../../../../../../components/InputCustom";
import InputFile from "../../../../../../../components/InputFile";
import "./styles.scss";

const Profile = ({ register, setValue, errors }) => {
    return (
        <>
            <div className="update-employees-form-profile__wrapper">
                <div className="title">
                    <AccountBoxRoundedIcon />
                    Thông tin cá nhân
                </div>
                <div className="update-employees-form__container">
                    <div className="col">
                        <InputFile
                            id="avatar"
                            className="input-item"
                            type={2}
                            sizePreImg="180px"
                            register={register}
                            setValue={setValue}
                            title="Đổi ảnh đại diện"
                        />
                        <div style={{ width: "100%", height: "25px" }}></div>
                        <InputCustom
                            id="citizenId"
                            width="100%"
                            className="input-item"
                            label="Số CCCD/CMND/Hộ chiếu"
                            register={register}
                            placeholder="Số CCCD/CMND/Hộ chiếu"
                            message={errors}
                        />
                        <InputCustom
                            id="temporaryAddress"
                            width="100%"
                            className="input-item"
                            label="Địa chỉ tạm trú"
                            register={register}
                            placeholder="Địa chỉ tạm trú"
                            message={errors}
                        />
                    </div>
                    <div className="col">
                        <InputCustom
                            id="name"
                            width="100%"
                            className="input-item"
                            label="Họ và tên"
                            required={true}
                            register={register}
                            placeholder="Họ và tên"
                            message={errors}
                        />
                        <InputCustom
                            id="phoneNumber"
                            width="100%"
                            className="input-item"
                            label="Số điện thoại"
                            register={register}
                            placeholder="Số điện thoại"
                            message={errors}
                        />
                        <InputCustom
                            id="emailCompany"
                            width="100%"
                            type="email"
                            className="input-item"
                            label="Email công ty"
                            register={register}
                            placeholder="Email công ty"
                            message={errors}
                        />
                        <InputCustom
                            id="issuedPlace"
                            width="100%"
                            className="input-item"
                            label="Nơi cấp"
                            register={register}
                            placeholder="Nơi cấp"
                            message={errors}
                        />
                        <InputCustom
                            id="permanentAddress"
                            width="100%"
                            className="input-item"
                            label="Địa chỉ thường trú"
                            register={register}
                            placeholder="Địa chỉ thường trú"
                            message={errors}
                        />
                        <InputCustom
                            id="school"
                            width="100%"
                            className="input-item"
                            label="Trường học"
                            register={register}
                            placeholder="Trường học"
                            message={errors}
                        />
                    </div>
                    <div className="col">
                        <InputCustom
                            id="personalEmail"
                            width="100%"
                            type="email"
                            className="input-item"
                            label="Email cá nhân"
                            register={register}
                            placeholder="Email cá nhân"
                            message={errors}
                        />
                        <InputCustom
                            id="personalTaxCode"
                            width="100%"
                            className="input-item"
                            label="Mã số thuế cá nhân"
                            register={register}
                            placeholder="Mã số thuế cá nhân"
                            message={errors}
                        />
                        <InputCustom
                            id="major"
                            width="100%"
                            className="input-item"
                            label="Chuyên ngành"
                            register={register}
                            placeholder="Chuyên ngành"
                            message={errors}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
