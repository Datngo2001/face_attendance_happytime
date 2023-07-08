import { storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL, uploadString, StringFormat } from "firebase/storage";

export const uploadImgToFirebase = async ({ imageUpload, id }) => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `/images/${id}`);
    const imgUrl = await uploadBytes(imageRef, imageUpload).then((response) => {
        return getDownloadURL(response.ref).then((url) => {
            return url;
        });
    });

    return await imgUrl;
};

export const uploadImgBase64ToFirebase = async ({ imageUpload, id }) => {
    console.log(imageUpload)
    if (imageUpload === null) return;
    const imageRef = ref(storage, `/images/${id}`);
    const imgUrl = await uploadString(imageRef, imageUpload, 'data_url').then((response) => {
        return getDownloadURL(response.ref).then((url) => {
            return url;
        });
    });

    return await imgUrl;
};