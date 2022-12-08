import { useEffect } from "react";
import { useForm } from "react-hook-form";
import ControlPanel from "./components/ControlPanel";
import "./styles.scss";

const Summary = () => {
    // REACT HOOOK FORM
    const { register, watch } = useForm({ mode: "onChange" });
    // ****************************

    // HOOK EFFECT
    useEffect(() => {
        console.log("data", watch());
    }, [watch()]);
    // ****************************

    return (
        <>
            <div className="attendances--summary__wrapper">
                <ControlPanel register={register} />
            </div>
        </>
    );
};

export default Summary;