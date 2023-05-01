import { useEffect } from "react";
import { tabTitle, titleHeaderMain } from "../../../utils";
import ContentLayout from "../../ContentLayout";
import { dataListButtonSideLeft } from "./dataListButtonSideLeft";
import "./styles.scss";

const AttendancesLayout = () => {
    // GLOBAL FUNCTION
    tabTitle("Bảng công");
    // ******************************

    // STATE
    // ******************************

    // HOOK EFFECT
    useEffect(() => {
        titleHeaderMain("Bảng công");
    }, []);
    // ******************************
    return (
        <>
            <ContentLayout listDataButton={dataListButtonSideLeft} />
        </>
    );
};

export default AttendancesLayout;
