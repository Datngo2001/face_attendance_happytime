import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastify = ({mess, type = "default", autoClose = 3000}) => {
    // type: default, info, success, error, warning
    switch (type) {
        case "success":
            return toast.success(mess, {
                position: "top-center",
                autoClose: autoClose,
                hideProgressBar: true,
                theme: "colored",
            });
        case "warning":
            return toast.warning(mess, {
                position: "top-center",
                autoClose: autoClose,
                hideProgressBar: true,
                theme: "colored",
            });
        case "error":
            return toast.error(mess, {
                position: "top-center",
                autoClose: autoClose,
                hideProgressBar: true,
                theme: "colored",
            });
        default:
            return toast(mess, {
                position: "top-center",
                autoClose: autoClose,
                hideProgressBar: true,
                theme: "colored",
            });
    }
};

export default toastify;
