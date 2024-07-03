import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCt3DQLF-NXfuafA9XuKBMq30UDy-RJ_aM",
    authDomain: "diplomado-200ce.firebaseapp.com",
    projectId: "diplomado-200ce",
    storageBucket: "diplomado-200ce.appspot.com",
    messagingSenderId: "331483069956",
    appId: "1:331483069956:web:d20c055e313e0c8e287f51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
