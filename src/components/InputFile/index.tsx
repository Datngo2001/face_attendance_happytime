import "./styles.scss";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect, useState } from "react";

export type Props = {
  id: string;
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
  id,
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
    setValue(id, defaultValue);
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
      setValue(id, imgFile);
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
