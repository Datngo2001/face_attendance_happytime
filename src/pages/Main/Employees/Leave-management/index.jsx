import { useForm } from "react-hook-form";
import { ControlPanel, TableLeaveManagement } from "./Components";
import "./styles.scss";

const LeaveManagement = () => {
    // REACT HOOK FORM
    const { register, watch } = useForm({ mode: "onChange" });
    //****************************

    // ARROW FUNCTIONS
    console.log("data", watch());
    // ****************************

    return (
        <>
            <div className="leave-management__wrapper">
                <ControlPanel register={register} />
                <TableLeaveManagement />
            </div>
        </>
    );
};

export default LeaveManagement;
