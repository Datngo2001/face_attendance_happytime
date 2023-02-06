import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateTimeStart } from "../../../../store/slices/Main/Attendances/attendancesSlice";
import ControlPanel from "./components/ControlPanel";
import Table from "./components/Table";
import "./styles.scss";

const Summary = () => {
  // REACT HOOOK FORM
  const { register, setValue, trigger, watch } = useForm({ mode: "onChange" });
  // ****************************

  // HOOK EFFECT
  useEffect(() => {
    const subscription = watch((value) => console.log("data", value));
    return () => subscription.unsubscribe();
  }, [watch]);
  // ****************************

  return (
    <>
      <div className="attendances--summary__wrapper">
        <ControlPanel
          register={register}
          setValue={setValue}
          trigger={trigger}
        />
      </div>
    </>
  );
};

export default Summary;
