import { toast } from "react-hot-toast";

const toastify = ({ mess, type = "default", duration = 3000 }) => {
    // type: default, info, success, error, warning
    switch (type) {
        case "success":
            return toast.success(mess, {
                duration: duration,
                style: {
                    border: "1.5px solid #61d345",
                    padding: "7px",
                    color: "#212f3f",
                    fontSize: "16px",
                    fontWeight: "400",
                },
            });
        case "error":
            return toast.error(mess, {
                duration: duration,
                style: {
                    border: "1.5px solid #ff4b4b",
                    padding: "7px",
                    color: "#212f3f",
                    fontSize: "16px",
                    fontWeight: "400",
                },
            });
        default:
    }
};

export default toastify;
