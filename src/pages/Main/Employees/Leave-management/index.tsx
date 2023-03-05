import { useForm } from "react-hook-form";
import { ControlPanel, TableLeaveManagement } from "./Components";
import "./styles.scss";

const LeaveManagement = () => {
    // REACT HOOK FORM
    const { control, watch } = useForm({ mode: "onChange" });
    //****************************

    // ARROW FUNCTIONS
    console.log("data", watch());
    // ****************************

    return (
        <>
            <div className="leave-management__wrapper">
                <ControlPanel control={control} />
                <TableLeaveManagement />
            </div>
        </>
    );
};

export default LeaveManagement;
