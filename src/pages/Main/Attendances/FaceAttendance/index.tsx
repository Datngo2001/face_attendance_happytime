import { useCallback, useRef, useState } from "react";
import { SettingForm } from "../../../../forms/Main/Attendances";
import "./styles.scss";
import Webcam from "react-webcam";
import { useAppDispatch } from "hooks/useAppDispatch";
import { extraReducersFaceTracking } from "store/slices/Main/Attendances/actions/extraReducers";
import useConfirmMoldal from "hooks/useConfirmMoldal";
import dayjs from "dayjs";

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

const FaceAttendance = () => {
    const webcamRef = useRef(null);
    const dispatch = useAppDispatch()
    const { openConfirmModal } = useConfirmMoldal();

    const handleResponse = (res) => {
        openConfirmModal(
            res.status > 0 ? "Chấm công thành công" : "Chấm công thất bại",
            res.status > 0 ? redenderMessage(res.payload) : res.payload,
            () => { }
        )
    }

    const checkAttendance = (imageSrc) => {
        dispatch(extraReducersFaceTracking({
            image: imageSrc,
            callBack: (res) => handleResponse(res)
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

function redenderMessage(result: any) {
    return `${result.agent_name} - ${result.department_name} đã ${result.type} vào lúc ${dayjs(result.attendance_time).format('HH:mm:ss')}`
}

export default FaceAttendance;
