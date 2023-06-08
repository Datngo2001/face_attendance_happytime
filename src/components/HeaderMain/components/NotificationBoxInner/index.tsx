import "./styles.scss";

type Props = {
    listOfNotifications?: any;
}

const NotificationBoxInner: React.FC<Props> = ({ listOfNotifications }) => {
    return (
        <>
            <div className="notification-box-inner__wrapper">
                <p className="title">Thông báo</p>
                {!listOfNotifications ? (
                    <p className="none">Bạn chưa có thông báo nào</p>
                ) : (
                    listOfNotifications.map((item) => {
                        return item;
                    })
                )}
            </div>
        </>
    );
};

export default NotificationBoxInner;
