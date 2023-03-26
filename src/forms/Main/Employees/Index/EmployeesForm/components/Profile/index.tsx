import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import "./styles.scss";
import InputFile from "components/InputFile";
import InputCustom from "components/InputCustom";
import SelectCustom from "components/SelectCustom";
import InputDate from "components/InputDate";
import { listEducation, listGender, listMarriedStatus } from "utils/ListData";
import React from "react";

export type Props = {
  control: any,
}

const Profile: React.FC<Props> = ({
  control,
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
            {/* <InputFile
              name="avatar"
              className="input-item"
              type={2}
              sizePreImg="180px"
              register={register}
              setValue={setValue}
              defaultValue={avatar}
              title="Đổi ảnh đại diện"
            /> */}
            <div style={{ width: "100%", height: "25px" }}></div>
            <InputCustom
              name="identify_id"
              width="100%"
              className="input-item"
              label="Số CCCD/CMND/Hộ chiếu"
              control={control}
              placeholder="Số CCCD/CMND/Hộ chiếu"
            />
            <InputCustom
              name="staying_address"
              width="100%"
              className="input-item"
              label="Địa chỉ tạm trú"
              control={control}
              placeholder="Địa chỉ tạm trú"
            />
            <SelectCustom
              name="education_type"
              control={control}
              width="100%"
              className="input-item"
              label="Học vấn"
              options={listEducation}
              placeholder="Học vấn"
            />
            <InputDate
              name="graduation_date"
              className="input-item"
              label="Ngày tốt nghiệp"
              placeholder="Ngày tốt nghiệp"
              control={control} />
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
              name="phone_number"
              width="100%"
              className="input-item"
              label="Số điện thoại"
              required={true}
              placeholder="Số điện thoại"
              control={control}
            />
            <InputCustom
              name="company_mail"
              width="100%"
              type="email"
              className="input-item"
              label="Email công ty"
              control={control}
              placeholder="Email công ty"
            />
            <InputCustom
              name="issued_by"
              width="100%"
              className="input-item"
              label="Nơi cấp"
              control={control}
              placeholder="Nơi cấp"
            />
            <InputCustom
              name="residence_address"
              width="100%"
              className="input-item"
              label="Địa chỉ thường trú"
              control={control}
              placeholder="Địa chỉ thường trú"
            />
            <InputCustom
              name="school_name"
              width="100%"
              className="input-item"
              label="Trường học"
              control={control}
              placeholder="Trường học"
            />
            <SelectCustom
              name="married_status"
              width="100%"
              className="input-item"
              label="Tình trạng hôn nhân"
              control={control}
              options={listMarriedStatus}
              placeholder="Tình trạng hôn nhân"
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
            />
            <InputDate
              name="date_of_birth"
              className="input-item"
              label="Ngày sinh"
              placeholder="Ngày sinh"
              control={control} />
            <InputCustom
              name="personal_mail"
              width="100%"
              type="email"
              className="input-item"
              label="Email cá nhân"
              required={true}
              control={control}
              placeholder="Email cá nhân"
            />
            <InputDate
              name="issued_date"
              className="input-item"
              label="Ngày cấp"
              placeholder="Ngày cấp"
              control={control} />
            <InputCustom
              name="personal_tax_id"
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
