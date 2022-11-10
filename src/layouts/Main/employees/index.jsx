import "./styles.scss";
import { tabTitle, titleHeaderMain } from "../../../utils";
import { dataListButtonSlideLeft } from "./dataListButtonSideLeft";
import ContentLayout from "../../ContentLayout";
import { useEffect } from "react";

const EmployeesLayout = () => {
    // GLOBAL FUNCTION
    tabTitle("Quản lý nhân sự");
    // ******************************

    // STATE
    // ******************************

    // HOOK EFFECT
    useEffect(() => {
        titleHeaderMain("Quản lý nhân sự");
    }, []);
    // ******************************

    return (
        <>
            <ContentLayout listDataButton={dataListButtonSlideLeft} />
        </>
    );
};

export default EmployeesLayout;
