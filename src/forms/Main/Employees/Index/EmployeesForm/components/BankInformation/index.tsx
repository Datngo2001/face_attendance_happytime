import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import "./styles.scss";
import InputCustom from "components/InputCustom";

export type Props = {
  control: any
}

const BankInformation: React.FC<Props> = ({ control }) => {
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
              name="bank_account_number"
              width="100%"
              className="input-item"
              label="Số tài khoản ngân hàng"
              control={control}
              placeholder="Số tài khoản ngân hàng"
            />
          </div>
          <div className="col">
            <InputCustom
              name="bank"
              width="100%"
              className="input-item"
              label="Ngân hàng"
              control={control}
              placeholder="Ngân hàng"
            />
          </div>
          <div className="col">
            <InputCustom
              name="bank_branch"
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
