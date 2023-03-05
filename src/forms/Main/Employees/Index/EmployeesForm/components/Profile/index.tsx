import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import "./styles.scss";
import InputFile from "components/InputFile";
import InputCustom from "components/InputCustom";
import SelectCustom from "components/SelectCustom";
import InputDate from "components/InputDate";
import { listEducation, listGender, listMarriedStatus } from "utils/ListData";
import React from "react";

export type Props = {
  register: any,
  setValue: any,
  control: any,
  trigger: any,
  graduationDate: any,
  gender: any,
  marriedStatus: any,
  supplyDate: any,
  birthDate: any,
  education: any,
  avatar: any,
}

const Profile: React.FC<Props> = ({
  register,
  setValue,
  control,
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
              name="citizenId"
              width="100%"
              className="input-item"
              label="Số CCCD/CMND/Hộ chiếu"
              control={control}
              placeholder="Số CCCD/CMND/Hộ chiếu"
            />
            <InputCustom
              name="temporaryAddress"
              width="100%"
              className="input-item"
              label="Địa chỉ tạm trú"
              control={control}
              placeholder="Địa chỉ tạm trú"
            />
            <SelectCustom
              name="education"
              control={control}
              width="100%"
              className="input-item"
              label="Học vấn"
              options={listEducation}
              placeholder="Học vấn"
              defaultValue={education}
            />
            <InputDate
              id="graduationDate"
              className="input-item"
              label="Ngày tốt nghiệp"
              placeholder="Ngày tốt nghiệp"
              setValue={setValue}
              defaultValue={graduationDate}
              trigger={trigger} />
          </div>
          <div className="col">
            <InputCustom
              name="name"
              width="100%"
              className="input-item"
              label="Họ và tên"
              required={true}
              control={control}
              placeholder="Họ và tên"
            />
            <InputCustom
              name="phoneNumber"
              width="100%"
              className="input-item"
              label="Số điện thoại"
              required={true}
              placeholder="Số điện thoại"
              control={control}
            />
            <InputCustom
              name="emailCompany"
              width="100%"
              type="email"
              className="input-item"
              label="Email công ty"
              control={control}
              placeholder="Email công ty"
            />
            <InputCustom
              name="issuedPlace"
              width="100%"
              className="input-item"
              label="Nơi cấp"
              control={control}
              placeholder="Nơi cấp"
            />
            <InputCustom
              name="permanentAddress"
              width="100%"
              className="input-item"
              label="Địa chỉ thường trú"
              control={control}
              placeholder="Địa chỉ thường trú"
            />
            <InputCustom
              name="school"
              width="100%"
              className="input-item"
              label="Trường học"
              control={control}
              placeholder="Trường học"
            />
            <SelectCustom
              name="marriedStatus"
              width="100%"
              className="input-item"
              label="Tình trạng hôn nhân"
              control={control}
              options={listMarriedStatus}
              placeholder="Tình trạng hôn nhân"
              defaultValue={marriedStatus}
            />
          </div>
          <div className="col">
            <SelectCustom
              name="gender"
              width="100%"
              className="input-item"
              label="Giới tính"
              control={control}
              options={listGender}
              placeholder="Giới tính"
              defaultValue={gender}
            />
            <InputDate
              id="birthDate"
              className="input-item"
              label="Ngày sinh"
              placeholder="Ngày sinh"
              setValue={setValue}
              defaultValue={birthDate}
              trigger={trigger} />
            <InputCustom
              name="personalEmail"
              width="100%"
              type="email"
              className="input-item"
              label="Email cá nhân"
              required={true}
              control={control}
              placeholder="Email cá nhân"
            />
            <InputDate
              id="supplyDate"
              className="input-item"
              label="Ngày cấp"
              placeholder="Ngày cấp"
              setValue={setValue}
              defaultValue={supplyDate}
              trigger={trigger} />
            <InputCustom
              name="personalTaxCode"
              width="100%"
              className="input-item"
              label="Mã số thuế cá nhân"
              control={control}
              placeholder="Mã số thuế cá nhân"
            />
            <InputCustom
              name="major"
              width="100%"
              className="input-item"
              label="Chuyên ngành"
              control={control}
              placeholder="Chuyên ngành"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
