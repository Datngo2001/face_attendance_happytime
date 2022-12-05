import { storage } from "./firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const uploadImgToFirebase = async ({ imageUpload, idUser }) => {
    
    if (imageUpload === null) return;
    const imageRef = ref(storage, `/images/${imageUpload.name}`);
    const imgUrl = await uploadBytes(imageRef, imageUpload).then((response) => {
        return getDownloadURL(response.ref).then((url) => {
            return url;
        });
    });

    return await imgUrl;
};
