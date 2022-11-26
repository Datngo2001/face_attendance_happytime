import { toast } from "react-hot-toast";

const toastify = ({ mess, type = "default", duration = 20000 }) => {
    // type: default, info, success, error, warning
    switch (type) {
        case "success":
            return toast.success(mess, {
                duration: duration,
                style: {
                    border: "1.5px solid #61d345",
                    padding: "7px",
                    color: "#212f3f",
                    fontSize: "14px",
                },
            });
        case "error":
            return toast.error(mess, {
                duration: duration,
                style: {
                    border: "1.5px solid #ff4b4b",
                    padding: "7px",
                    color: "#212f3f",
                    fontSize: "14px",
                },
            });
        default:
    }
};

export default toastify;
