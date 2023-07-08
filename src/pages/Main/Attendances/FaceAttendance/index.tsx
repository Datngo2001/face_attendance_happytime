import { useCallback, useRef, useState } from "react";
import { SettingForm } from "../../../../forms/Main/Attendances";
import "./styles.scss";
import Webcam from "react-webcam";
import Clarifai from "clarifai";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};


const FaceAttendance = () => {
    const [imgSrc, setImgSrc] = useState(null);
    const [box, setBox] = useState(null)
    const webcamRef = useRef(null);

    const capture = useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImgSrc(imageSrc);
        },
        [webcamRef]
    );


    return (
        <>
            <div className="FaceAttendance__wrapper">
                <div className="content-title">Canh chỉnh khuôn mặt bạn vào giữa khung hình</div>
                <div className="webcam">
                    <Webcam
                        audio={false}
                        height={720}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        width={1280}
                        videoConstraints={videoConstraints} />
                    <div className="capture-frame"></div>
                </div>
                <button onClick={capture}>Capture photo</button>

                {imgSrc && (<img src={imgSrc} alt="" />)}

            </div>
        </>
    );
};

export default FaceAttendance;
