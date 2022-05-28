// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIUFgUpgQ2MrBDwb6MxzDIxY6GdkOf2ZY",
    authDomain: "tails-exchange.firebaseapp.com",
    projectId: "tails-exchange",
    storageBucket: "tails-exchange.appspot.com",
    messagingSenderId: "1001834963892",
    appId: "1:1001834963892:web:cd590de9a7e84e07d448e1",
    measurementId: "G-H96SW8ZQ3N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { app, analytics, db };