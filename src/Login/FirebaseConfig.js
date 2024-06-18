// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQJHpKsg2gALqICMW-hdaPCjsNmyyub2c",
  authDomain: "login-auth-cff8f.firebaseapp.com",
  projectId: "login-auth-cff8f",
  storageBucket: "login-auth-cff8f.appspot.com",
  messagingSenderId: "599567034871",
  appId: "1:599567034871:web:a4a782117f6358ebfe26f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export default app;