// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCELa0-tTyfFpsTsceytKdC7jI4wijU29s",
  authDomain: "sang-ja.firebaseapp.com",
  projectId: "sang-ja",
  storageBucket: "sang-ja.appspot.com",
  messagingSenderId: "626488626261",
  appId: "1:626488626261:web:6a8025e1726366ed0b58dc",
  measurementId: "G-K41MV3Y9ML"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);