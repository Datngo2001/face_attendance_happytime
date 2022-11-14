import "./styles.scss";

export const ActivedStatusContent = () => {
    return (
        <>
            <div className="active-status-content__wrapper">
                <p className="content">
                    Các nhân viên trong workspace sẽ có thể truy cập vào workspace đã được
                    kích hoạt trên app HappyTime. Bạn có chắc chắn muốn thực hiện thao tác
                    này không?
                </p>
            </div>
        </>
    );
};

export const DisabledStatusContent = () => {
    return (
        <>
            <div className="active-status-content__wrapper">
                <p className="content">
                    Các nhân viên trong workspace sẽ không thể truy cập vào workspace đã
                    bị vô hiệu hóa trên app HappyTime. Bạn có chắc chắn muốn thực hiện
                    thao tác này không?
                </p>
            </div>
        </>
    );
};
