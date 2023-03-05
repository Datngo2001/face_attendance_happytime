import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import "./styles.scss";
import InputCustom from "components/InputCustom";

const BankInformation = ({ control }) => {
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
              name="bankAccountNumber"
              width="100%"
              className="input-item"
              label="Số tài khoản ngân hàng"
              control={control}
              placeholder="Số tài khoản ngân hàng"
            />
          </div>
          <div className="col">
            <InputCustom
              name="bankName"
              width="100%"
              className="input-item"
              label="Ngân hàng"
              control={control}
              placeholder="Ngân hàng"
            />
          </div>
          <div className="col">
            <InputCustom
              name="bankBranch"
              width="100%"
              className="input-item"
              label="Chi nhánh"
              control={control}
              placeholder="Chi nhánh"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BankInformation;
