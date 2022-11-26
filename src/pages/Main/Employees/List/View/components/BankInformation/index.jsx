import "./styles.scss";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";

const BankInformation = () => {
    return (
        <>
            <div className="view-bank-information__wrapper">
                <div className="title">
                    <AccountBalanceRoundedIcon />
                    Thông tin ngân hàng
                </div>
                <div className="content divider-bottom">
                    <div className="col">
                        <div className="col__label">
                            <p className="label">Số tài khoản ngân hàng</p>
                        </div>
                        <div className="col__data"></div>
                        <div className="col__data"></div>
                    </div>
                    <div className="col">
                        <div className="col__label">
                            <p className="label">Ngân hàng</p>
                            <p className="label">Chi nhánh</p>
                        </div>
                        <div className="col__data">
                            <p className="data"></p>
                            <p className="data"></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BankInformation;
