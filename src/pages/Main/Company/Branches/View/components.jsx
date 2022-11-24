import banner from "../../../../../assets/images/none-branches.png";
import ButtonCustom from "../../../../../components/ButtonCustom";
import "./styles.scss";

export const NoneBranches = () => {
    return (
        <>
            <div className="none-branches__wrapper">
                <img src={banner} alt="" className="banner" />
                <p className="description">Chưa có chi nhánh nào được thiết lập</p>
                <ButtonCustom width="102px" className="btn">Thêm mới</ButtonCustom>
            </div>
        </>
    );
};
