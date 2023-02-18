import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import InputCustom from "../../../../../../../components/InputCustom";
import InputDate from "../../../../../../../components/InputDate";
import InputFile from "../../../../../../../components/InputFile";
import SelectCustom from "../../../../../../../components/SelectCustom";
import {
  listEducation,
  listGender,
  listMarriedStatus,
} from "../../../../../../../utils/ListData";
import "./styles.scss";

const Profile = ({
  register,
  setValue,
  errors,
  trigger,
  graduationDate,
  gender,
  marriedStatus,
  supplyDate,
  birthDate,
  education,
  avatar,
}) => {
  return (
    <>
      <div className="employees-form--profile__wrapper">
        <div className="title">
          <AccountBoxRoundedIcon />
          Thông tin cá nhân
        </div>
        <div className="employees-form__container">
          <div className="col">
            <InputFile
              id="avatar"
              name="avatar"
              className="input-item"
              type={2}
              sizePreImg="180px"
              register={register}
              setValue={setValue}
              defaultValue={avatar}
              title="Đổi ảnh đại diện"
            />
            <div style={{ width: "100%", height: "25px" }}></div>
            <InputCustom
              id="citizenId"
              name="citizenId"
              width="100%"
              className="input-item"
              label="Số CCCD/CMND/Hộ chiếu"
              register={register}
              placeholder="Số CCCD/CMND/Hộ chiếu"
              message={errors}
            />
            <InputCustom
              id="temporaryAddress"
              name="temporaryAddress"
              width="100%"
              className="input-item"
              label="Địa chỉ tạm trú"
              register={register}
              placeholder="Địa chỉ tạm trú"
              message={errors}
            />
            <SelectCustom
              name="education"
              width="100%"
              className="input-item"
              label="Học vấn"
              register={register}
              options={listEducation}
              placeholder="Học vấn"
              defaultValue={education}
              setValue={setValue}
            />
            <InputDate
              id="graduationDate"
              className="input-item"
              label="Ngày tốt nghiệp"
              placeholder="Ngày tốt nghiệp"
              setValue={setValue}
              defaultValue={graduationDate}
              message={errors}
              trigger={trigger}
            />
          </div>
          <div className="col">
            <InputCustom
              id="name"
              name="name"
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
              name="phoneNumber"
              width="100%"
              className="input-item"
              label="Số điện thoại"
              required={true}
              register={register}
              placeholder="Số điện thoại"
              message={errors}
            />
            <InputCustom
              id="emailCompany"
              name="emailCompany"
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
              name="issuedPlace"
              width="100%"
              className="input-item"
              label="Nơi cấp"
              register={register}
              placeholder="Nơi cấp"
              message={errors}
            />
            <InputCustom
              id="permanentAddress"
              name="permanentAddress"
              width="100%"
              className="input-item"
              label="Địa chỉ thường trú"
              register={register}
              placeholder="Địa chỉ thường trú"
              message={errors}
            />
            <InputCustom
              id="school"
              name="school"
              width="100%"
              className="input-item"
              label="Trường học"
              register={register}
              placeholder="Trường học"
              message={errors}
            />
            <SelectCustom
              name="marriedStatus"
              width="100%"
              className="input-item"
              label="Tình trạng hôn nhân"
              register={register}
              options={listMarriedStatus}
              placeholder="Tình trạng hôn nhân"
              defaultValue={marriedStatus}
              setValue={setValue}
            />
          </div>
          <div className="col">
            <SelectCustom
              name="gender"
              width="100%"
              className="input-item"
              label="Giới tính"
              register={register}
              options={listGender}
              placeholder="Giới tính"
              defaultValue={gender}
              setValue={setValue}
            />
            <InputDate
              id="birthDate"
              name="birthDate"
              className="input-item"
              label="Ngày sinh"
              placeholder="Ngày sinh"
              register={register}
              setValue={setValue}
              defaultValue={birthDate}
              errors={errors}
            />
            <InputCustom
              id="personalEmail"
              name="personalEmail"
              width="100%"
              type="email"
              className="input-item"
              label="Email cá nhân"
              required={true}
              register={register}
              placeholder="Email cá nhân"
              message={errors}
            />
            <InputDate
              id="supplyDate"
              className="input-item"
              label="Ngày cấp"
              placeholder="Ngày cấp"
              register={register}
              setValue={setValue}
              defaultValue={supplyDate}
              errors={errors}
              trigger={trigger}
            />
            <InputCustom
              id="personalTaxCode"
              name="personalTaxCode"
              width="100%"
              className="input-item"
              label="Mã số thuế cá nhân"
              register={register}
              placeholder="Mã số thuế cá nhân"
              message={errors}
            />
            <InputCustom
              id="major"
              name="major"
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
