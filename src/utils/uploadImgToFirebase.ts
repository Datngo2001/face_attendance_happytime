import { storage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
