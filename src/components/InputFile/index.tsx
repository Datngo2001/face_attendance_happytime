import "./styles.scss";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect, useState } from "react";
import { Controller } from "react-hook-form";

export type Props = {
  control: any;
  name: string;
  className?: string;
  type?: number;
  title?: string;
  sizePreImg?: string;
  defaultValue?: string;
}

const InputFile: React.FC<Props> = ({
  name,
  control,
  className,
  type,
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

  // ARROW FUNCTION
  const handlePreviewFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      let imgFile = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (x) => {
        setImgSrc(x.target.result);
      };
      reader.readAsDataURL(imgFile);
      return imgFile;
    }
  };
  // ****************************

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value, name, ref },
        fieldState: { error },
      }) => (<div className={`input-file__wrapper ${className ? className : ""}`}>
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
          ref={ref}
          onChange={e => onChange(handlePreviewFile(e))}
          value={value.filename}
          type="file"
          accept={accept}
        />
      </div>)}
    />
  );
};

export default InputFile;
