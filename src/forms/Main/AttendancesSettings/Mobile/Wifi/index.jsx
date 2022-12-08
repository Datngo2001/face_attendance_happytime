import { useForm } from "react-hook-form";
import InputCustom from "../../../../../components/InputCustom";
import "./styles.scss";

const WifiAddingForm = ({ method }) => {
    // REACT HOOK FORM
    const { register, setValue } = useForm({});
    // ****************************

    return (
        <>
            <div className="wifi-adding-form__wrapper">
                <div className="field-control">
                    <InputCustom
                        id="wifiName"
                        width="470px"
                        label="Tên IP Wi-Fi"
                        placeholder="Nhập Tên IP Wi-Fi"
                        register={register}
                        required={true}
                    />
                </div>
                <div className="field-control">
                    <InputCustom
                        id="wifiName"
                        width="470px"
                        label="IP"
                        placeholder="Nhập Địa chỉ IP"
                        register={register}
                        required={true}
                    />
                </div>

                <p className="des">
                    IP hiện tại của bạn là 2401:d800:724b:ee03:bdfa:be83:443d:fca2
                </p>

                
            </div>
        </>
    );
};

export default WifiAddingForm;
