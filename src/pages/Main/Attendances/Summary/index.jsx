import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ControlPanel from "./components/ControlPanel";
import Table from "./components/Table";
import "./styles.scss";

const Summary = () => {
    // REACT HOOOK FORM
    const { register, trigger, watch, setValue } = useForm({ mode: "onChange" });
    // ****************************

    // HOOK EFFECT
    useEffect(() => {
        console.log("data", watch());
    }, [watch()]);
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
