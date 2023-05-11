import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from "firebase/storage";
 
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
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);