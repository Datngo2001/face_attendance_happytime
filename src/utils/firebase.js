import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyACDxGyShEXbdCDQkg4MLVXSQ5WsUNh1ms",
    authDomain: "happytimeimages.firebaseapp.com",
    projectId: "happytimeimages",
    storageBucket: "happytimeimages.appspot.com",
    messagingSenderId: "401274170090",
    appId: "1:401274170090:web:1a4744ae0b2ce3b331c593",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
