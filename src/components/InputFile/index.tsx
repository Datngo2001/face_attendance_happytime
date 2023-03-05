import "./styles.scss";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect, useState } from "react";

export type Props = {
  name: string;
  className?: string;
  type?: number;
  format?: string;
  register: any;
  setValue: any;
  title?: string;
  sizePreImg?: string;
  defaultValue?: string;
}

const InputFile: React.FC<Props> = ({
  name,
  className,
  type,
  format,
  register,
  setValue,
  title,
  sizePreImg,
  defaultValue,
}) => {
  // STATE
  const [imgSrc, setImgSrc] = useState<any>(defaultValue || "");
  // ******************************

  // VARIABLES
  const accept = ".png, .jpg, .jpeg, .gif, .bmp";
  // ******************************

  // HOOK EFFECT
  useEffect(() => {
    setValue(name, defaultValue);
  }, []);
  // ****************************

  // ARROW FUNCTION
  const handlePreviewFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imgFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setImgSrc(x.target.result);
      };
      reader.readAsDataURL(imgFile);
      setValue(name, imgFile);
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
          <label htmlFor={name} className="icon">
            <CameraAltIcon />
          </label>
        ) : (
          <label htmlFor={name} className="btn">
            {title}
          </label>
        )}
        <input
          id={name}
          {...register(name)}
          onChange={handlePreviewFile}
          type="file"
          accept={accept}
        />
      </div>
    </>
  );
};

export default InputFile;
