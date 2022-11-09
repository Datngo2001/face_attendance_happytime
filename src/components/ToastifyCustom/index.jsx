import { ToastContainer } from "react-toastify";
import "./styles.scss";

const ToastifyCustom = ({ mess, autoClose, type }) => {
    console.log("mess", mess);
    return (
        <ToastContainer position="top-center" autoClose={autoClose}>
            {mess}
        </ToastContainer>
    );
};

export default ToastifyCustom;
