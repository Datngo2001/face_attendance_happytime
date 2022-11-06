import "./styles.scss";
import loading from "../../assets/images/loading.gif";

const LoadingCustom = () => {
    return (
        <>
            <div className="loading-custom__wrapper">
                <img className="gif" src={loading} alt="" />
            </div>
        </>
    );
};

export default LoadingCustom;
