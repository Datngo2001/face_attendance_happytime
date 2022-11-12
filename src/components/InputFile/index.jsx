import "./styles.scss";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

const InputFile = ({
    id,
    className,
    type,
    format,
    register,
    setValue,
    title,
    sizePreImg,
}) => {
    // STATE
    const [imgSrc, setImgSrc] = useState("");
    const [fileName, setFileName] = useState("");
    // ******************************

    // VARIABLES
    const accept = ".png, .jpg, .jpeg, .gif, .bmp";
    // ******************************

    // ARROW FUNCTION
    const handlePreviewFile = (e) => {
        if (e.target.files && e.target.files[0]) {
            let imgFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (x) => {
                setImgSrc(x.target.result);
            };
            reader.readAsDataURL(imgFile);
            setValue(id, imgFile);
            setFileName(imgFile.name);
        }
    };
    // ****************************

    return (
        <>
            <div className={`input-file__wrapper ${className ? className : ""}`}>
                <div
                    className="input-file__image"
                    style={{
                        minHeight: sizePreImg,
                        width: sizePreImg,
                        height: sizePreImg,
                    }}
                >
                    {imgSrc ? (
                        <img src={imgSrc} alt="" className="input-file__image-preview" />
                    ) : type === 1 ? (
                        <ApartmentIcon />
                    ) : (
                        <PersonIcon />
                    )}
                </div>
                {type === 1 ? (
                    <label htmlFor={id} className="icon">
                        <CameraAltIcon />
                    </label>
                ) : (
                    <label htmlFor={id} className="btn">
                        {title}
                    </label>
                )}
                <input
                    id={id}
                    {...register(id)}
                    onChange={handlePreviewFile}
                    type="file"
                    accept={accept}
                />
            </div>
        </>
    );
};

export default InputFile;
