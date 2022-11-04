import "./styles.scss";

export const StatusEmployee = ({ status }) => {
    // STATE
    // ******************************
    // VARIABLES
    // ******************************

    // HOOK EFFECT
    // ******************************

    // ARROW FUNCTION
    const convertToTitle = (status) => {
        let text = "";
        switch (parseInt(status)) {
            case 1:
                text = "Đang làm việc";
                break;
            default:
                text = "Không có trạng thái";
        }
        return text;
    };
    // ********************************

    return (
        <>
            <div className={`status-emloyee__wrapper type-${status}`}>
                <p className="text">{convertToTitle(status)}</p>
            </div>
        </>
    );
};

export const StatusUsingHappyTime = ({ status }) => {
    // ARROW FUNCTION
    const convertToTitle = (status) => {
        let text = "";
        switch (parseInt(status)) {
            case 1:
                text = "Đã sử dụng";
                break;
            case 2:
                text = "Chưa sử dụng";
                break;
            default:
                text = "Không có trạng thái";
        }
        return text;
    };
    // ********************************
    return (
        <>
            <div className="status-using-time__wrapper">
                <p className="text">{convertToTitle(status)}</p>
            </div>
        </>
    );
};
