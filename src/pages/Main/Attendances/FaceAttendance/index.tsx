import { useCallback, useRef, useState } from "react";
import { SettingForm } from "../../../../forms/Main/Attendances";
import "./styles.scss";
import Webcam from "react-webcam";
import { useAppDispatch } from "hooks/useAppDispatch";
import { extraReducersFaceTracking } from "store/slices/Main/Attendances/actions/extraReducers";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};


const FaceAttendance = () => {
    const webcamRef = useRef(null);
    const dispatch = useAppDispatch()

    const checkAttendance = (imageSrc) => {
        dispatch(extraReducersFaceTracking({
            image: imageSrc
        }))
    }

    const capture = useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            checkAttendance(imageSrc);
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
                        screenshotFormat="image/png"
                        width={1280}
                        videoConstraints={videoConstraints} />
                    <div className="capture-frame"></div>
                </div>
                <button onClick={capture}>Capture photo</button>
            </div>
        </>
    );
};

export default FaceAttendance;
