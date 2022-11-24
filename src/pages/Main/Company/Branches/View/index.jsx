import { NoneBranches } from "./components";
import "./styles.scss";

const View = () => {
    return (
        <>
            <div className="company--branches-view__wrapper">
                <div className="content-title">Hệ thống chi nhánh</div>
                <NoneBranches/>
            </div>
        </>
    );
};

export default View;
