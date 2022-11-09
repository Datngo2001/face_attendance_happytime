import "./styles.scss";
import { tabTitle } from "../../../utils";
import ButtonSideLeftLayout from "../../ButtonSideLeftLayout";
import { dataListButtonSlideLeft } from "./dataListButtonSideLeft";

const EmployeesLayout = () => {
    // GLOBAL FUNCTION
    tabTitle("Quản lý nhân sự");
    // ******************************

    // STATE
    // ******************************

    return (
        <>
            <ButtonSideLeftLayout listDataButton={dataListButtonSlideLeft} />
        </>
    );
};

export default EmployeesLayout;
