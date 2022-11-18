import StickyNote2RoundedIcon from "@mui/icons-material/StickyNote2Rounded";
import { useState } from "react";
import InputCustom from "../../../../../../../components/InputCustom";
import "./styles.scss";

const Note = ({ register, setValue, errors }) => {
    // STATE
    const [length, setLength] = useState(0);
    // ****************************

    // ARROW FUNCTIONS
    const getLengthTextarea = () => {
        const textarea = document.getElementById("note");
        return textarea.value.length;
    };

    const handleOnChange = (e) => {
        setLength(getLengthTextarea);
    };
    // ****************************

    return (
        <>
            <div className="employees-form--note__wrapper divider-top">
                <div className="title">
                    <StickyNote2RoundedIcon />
                    Ghi chú
                </div>
                <div className="input-control">
                    <textarea
                        id="note"
                        {...register("note")}
                        maxLength="500"
                        onChange={handleOnChange}
                    />
                </div>
                <div className="note-length">{`${length} / 500`}</div>
            </div>
        </>
    );
};

export default Note;
