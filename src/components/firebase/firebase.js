// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDjJD3ZfEKv5gAwozl9uf55DEhys0hibM",
  authDomain: "reddit-clone-73f2c.firebaseapp.com",
  projectId: "reddit-clone-73f2c",
  storageBucket: "reddit-clone-73f2c.appspot.com",
  messagingSenderId: "405344035811",
  appId: "1:405344035811:web:343d0bb3e9d613231536d6",
  measurementId: "G-D08G0QVX0Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth=getAuth();

export {app, auth}