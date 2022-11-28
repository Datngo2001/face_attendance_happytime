import toast from "react-hot-toast";

export const toastPromise = (
    promise,
    { titleLoading = "", titleSuccess = "", titleError = "" }
) => {
    toast.promise(
        promise,
        {
            loading: titleLoading,
            success: (data) => {
                if (data.message !== "success") {
                    throw data;
                }
                return titleSuccess;
            },
            error: titleError,
        },
        {
            duration: 3000,
            style: {
                border: "1.5px solid #eeeeee",
                fontWeight: "400",
                fontSize: "16px",
            },
        }
    );
};
