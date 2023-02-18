import { useEffect } from "react";
import { dataListButtonSideLeft } from "./dataListButtonSideLeft";
import { tabTitle, titleHeaderMain } from "utils";
import ContentLayout from "layouts/ContentLayout";

const ScheduleLayout = () => {
  // GLOBAL FUNCTION
  tabTitle("Cài đặt lịch");
  // ******************************

  // STATE
  // ******************************

  // HOOK EFFECT
  useEffect(() => {
    titleHeaderMain("Cài đăt lịch");
  }, []);
  // ******************************
  return (
    <>
      <ContentLayout listDataButton={dataListButtonSideLeft} />
    </>
  );
};

export default ScheduleLayout;
