import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import "./styles.scss";
import InputCustom from "components/InputCustom";

const BankInformation = ({ register, setValue, errors }) => {
  return (
    <>
      <div className="employees-form--bank-information__wrapper divider-top">
        <div className="title">
          <AccountBalanceIcon />
          Thông tin ngân hàng
        </div>
        <div className="employees-form__container">
          <div className="col">
            <InputCustom
              id="bankAccountNumber"
              name="bankAccountNumber"
              width="100%"
              className="input-item"
              label="Số tài khoản ngân hàng"
              register={register}
              placeholder="Số tài khoản ngân hàng"
              message={errors}
            />
          </div>
          <div className="col">
            <InputCustom
              id="bankName"
              name="bankName"
              width="100%"
              className="input-item"
              label="Ngân hàng"
              register={register}
              placeholder="Ngân hàng"
              message={errors}
            />
          </div>
          <div className="col">
            <InputCustom
              id="bankBranch"
              name="bankBranch"
              width="100%"
              className="input-item"
              label="Chi nhánh"
              register={register}
              placeholder="Chi nhánh"
              message={errors}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BankInformation;
