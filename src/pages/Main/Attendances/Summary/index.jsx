import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateTimeStart } from "../../../../store/slices/Main/Attendances/attendancesSlice";
import ControlPanel from "./components/ControlPanel";
import Table from "./components/Table";
import "./styles.scss";

const Summary = () => {
    // REACT HOOOK FORM
    const { register, trigger, watch, setValue } = useForm({ mode: "onChange" });
    // ****************************

    // HOOK REDUX TOOLKIT
    const { timeStart, listWeekdays } = useSelector((state) => state.attendances);
    const dispatch = useDispatch();
    // ****************************

    // STATE
    // ****************************

    // HOOK EFFECT
    useEffect(() => {
        console.log("data", watch());
    }, [watch()]);

    useEffect(() => {
        dispatch(updateTimeStart(watch().timeStart));
    }, [watch().timeStart]);
    // ****************************
    return (
        <>
            <div className="attendances--summary__wrapper">
                <ControlPanel register={register} setValue={setValue} trigger={trigger} />
                <Table />
            </div>
        </>
    );
};

export default Summary;
