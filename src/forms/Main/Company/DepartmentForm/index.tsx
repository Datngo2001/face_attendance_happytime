import React from "react";
import "./styles.scss"
import { FormAction } from "forms/formAction";

export type Props = {
  action: FormAction
  setOpen: any
}

const DepartmentForm: React.FC<Props> = ({ action, setOpen }) => {
  return (
    <div>

    </div>
  );
};

export default DepartmentForm;
