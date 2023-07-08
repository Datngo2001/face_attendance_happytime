import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "config/api";
import { toastPromise } from "utils";
import { uploadImgBase64ToFirebase } from "utils/uploadImgToFirebase";

export const extraReducersFaceTracking = createAsyncThunk(
    "faceTracking",
    async ({ image }: any) => {
        let promise = new Promise((resolve, reject) => {
            uploadImgBase64ToFirebase({
                id: Date.now(),
                imageUpload: image,
            })
                .then(url => resolve(url))
                .catch(err => reject(err))
        })
            .then(imgUrl => api.post("/api/attendance/check_attendance/face_tracking", { image: imgUrl }))
            .then((response: any) => ({
                payload: response.payload,
                message: response.message,
            }))
            .catch((error) => {
                console.log(error)
                return error
            })


        toastPromise(promise, {
            titleLoading: "Đang thực hiện...",
            titleSuccess: "Chấm công thành công",
            titleError: "Chấm công thất bại",
        });
        return promise;
    }
);