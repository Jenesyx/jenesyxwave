// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA7P2ixt-gqnC_IRF44gjGIt8WACKl7_y0",
    authDomain: "jenesyxwave.firebaseapp.com",
    projectId: "jenesyxwave",
    storageBucket: "jenesyxwave.firebasestorage.app",
    messagingSenderId: "470788698589",
    appId: "1:470788698589:web:099d383aa61bb0388d8634",
    measurementId: "G-X3LCKSQRNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);