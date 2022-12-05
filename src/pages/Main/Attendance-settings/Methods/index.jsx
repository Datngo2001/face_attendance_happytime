import { MethodsForm } from "../../../../forms/Main/AttendancesSettings";
import "./styles.scss";

const Methods = () => {
    return (
        <>
            <div className="attendance-settings--methods__wrapper">
                <div className="content-title">Hình thức chấm công</div>
                <MethodsForm />
            </div>
        </>
    );
};

export default Methods;
