import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9vj3pd1BmfN4hy4bgUqlDnfxv92s8OYM",
  authDomain: "auth-development-4deaa.firebaseapp.com",
  projectId: "auth-development-4deaa",
  storageBucket: "auth-development-4deaa.appspot.com",
  messagingSenderId: "37683483150",
  appId: "1:37683483150:web:3c9c61499d2170272f225f",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export default app;
