import "./styles.scss";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import ApartmentIcon from "@mui/icons-material/Apartment";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect, useState } from "react";
import { Controller, useController } from "react-hook-form";
import ImageIcon from '@mui/icons-material/Image';

type Props = {
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
  const { field: { value, onChange, ref } } = useController({ name, control })
  const [imgSrc, setImgSrc] = useState<any>(defaultValue || value || "");
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
      return imgFile.filename;
    }
  };
  // ****************************

  return (
    <div className={`input-file__wrapper ${className ? className : ""}`}>
      <div
        className="input-file__image"
        style={{
          minHeight: sizePreImg,
          width: sizePreImg,
          height: sizePreImg,
        }}
      >
        {imgSrc && (<img src={imgSrc} alt="" className="input-file__image-preview" />)}
        {!imgSrc && type === 1 && (<ApartmentIcon />)}
        {!imgSrc && type === 2 && (<ImageIcon />)}
        {!imgSrc && type == null && (<PersonIcon />)}
      </div>
      {type === 1 && (
        <label htmlFor={name} className="icon">
          <CameraAltIcon />
        </label>
      )}
      {type !== 1 && (
        <label htmlFor={name} className="btn">
          {title}
        </label>
      )}
      <input
        id={name}
        ref={ref}
        onChange={e => onChange(handlePreviewFile(e))}
        value={value?.startsWith("http") ? "" : value}
        type="file"
        accept={accept}
      />
    </div>
  )
};

export default InputFile;
