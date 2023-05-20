import { useEffect } from "react";
import { dataListButtonSideLeft } from "./dataListButtonSideLeft";
import { tabTitle, titleHeaderMain } from "utils";
import ContentLayout from "layouts/ContentLayout";

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
