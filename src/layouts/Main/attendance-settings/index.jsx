import { useEffect } from "react";
import { tabTitle, titleHeaderMain } from "../../../utils";
import ContentLayout from "../../ContentLayout";
import { dataListButtonSideLeft } from "./dataListButtonSideLeft";

const AttendanceSettingsLayout = () => {
    // GLOBAL FUNCTION
    tabTitle("Cài đặt chấm công");
    // ******************************

    // STATE
    // ******************************

    // HOOK EFFECT
    useEffect(() => {
        titleHeaderMain("Cài đặt chấm công");
    }, []);
    // ******************************
    return (
        <>
            <ContentLayout listDataButton={dataListButtonSideLeft} />
        </>
    );
};

export default AttendanceSettingsLayout;
