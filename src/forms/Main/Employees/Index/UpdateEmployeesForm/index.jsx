import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import "./styles.scss";

const UpdateEmployeesForm = ({ method }) => {
    // REACT HOOK FORM
    // ****************************

    // HOOK EFFECT
    // ****************************

    // ARROW FUNCTIONS
    const handleOnSubmit = (data) => {
        console.log("data", data);
    };
    // ****************************

    return (
        <>
            <div className="update-employees-form__wrapper">
                <div className="title">
                    <AccountBoxRoundedIcon />Thông tin cá nhân
                </div>
            </div>
        </>
    );
};

export default UpdateEmployeesForm;
