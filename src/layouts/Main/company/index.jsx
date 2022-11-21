import { useEffect } from "react";
import { tabTitle, titleHeaderMain } from "../../../utils";
import ContentLayout from "../../ContentLayout";
import { dataListButtonSlideLeft } from "./dataListButtonSideLeft";
import "./styles.scss";

const CompanyLayout = () => {
    // GLOBAL FUNCTION
    tabTitle("Cài đặt doanh nghiệp");
    // ******************************

    // STATE
    // ******************************

    // HOOK EFFECT
    useEffect(() => {
        titleHeaderMain("Cài đặt doanh nghiệp");
    }, []);
    // ******************************
    return (
        <>
            <ContentLayout listDataButton={dataListButtonSlideLeft} />
        </>
    );
};

export default CompanyLayout;
