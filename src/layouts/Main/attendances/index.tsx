import { useEffect } from "react";
import { tabTitle, titleHeaderMain } from "../../../utils";
import "./styles.scss";
import CameraLayout from "layouts/CameraLayout";

const AttendancesLayout = () => {
    // GLOBAL FUNCTION
    tabTitle("Bảng công");
    // ******************************

    // STATE
    // ******************************

    // HOOK EFFECT
    useEffect(() => {
        titleHeaderMain("Chấm Công bằng khuôn mặt");
    }, []);
    // ******************************
    return (
        <>
            <CameraLayout />
        </>
    );
};

export default AttendancesLayout;
