import EmployeesForm from "../../../../../forms/Main/Employees/Index/EmployeesForm";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import "./styles.scss";
import { Link } from "react-router-dom";

const Create = () => {
  // STATE
  // ******************************

  // HOOK EFFECT
  // *****************************

  return (
    <>
      <div className="create__wrapper">
        <Link className="content-navigator" to="../list/index">
          <ArrowBackRoundedIcon />
          Quay lại
        </Link>
        <div className="content-title">Thêm mới nhân viên</div>
        <EmployeesForm action="create" />
      </div>
    </>
  );
};

export default Create;
