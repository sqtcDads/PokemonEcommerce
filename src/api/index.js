import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBXBlTrAexHKdUF5TKaMgynPJhPZmpN0FA",
    authDomain: "coderfirebase.firebaseapp.com",
    projectId: "coderfirebase",
    storageBucket: "coderfirebase.appspot.com",
    messagingSenderId: "913853059833",
    appId: "1:913853059833:web:7a95f6659c8a2391f2c828"
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)