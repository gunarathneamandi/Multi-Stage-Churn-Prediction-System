import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCiHD_4MEifEjFnWB7IgrYbz8Z3qctXYww",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "multistagechurnprediction",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "810828825351",
    appId: "YOUR_APP_ID",
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };