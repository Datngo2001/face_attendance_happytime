import { Link, useParams } from "react-router-dom";
import { EmployeesForm } from "../../../../../forms/Main/Employees";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import "./styles.scss";
import { FormAction } from "forms/formAction";
import { useAppDispatch } from "hooks/useAppDispatch";
import { extraReducersGetInfoEmployeeById } from "store/slices/Main/Employees/actions/extraReducers";
import { useEffect } from "react";

const Update = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      extraReducersGetInfoEmployeeById({
        id: id,
      })
    );
  }, [id])

  return (
    <>
      <div className="update__wrapper">
        <Link className="content-navigator" to={`../list/view/${id}`}>
          <ArrowBackRoundedIcon />
          Quay lại
        </Link>
        <h3 className="content-title">Chỉnh sửa thông tin nhân viên</h3>
        <EmployeesForm action={FormAction.UPDATE} />
      </div>
    </>
  );
};

export default Update;
