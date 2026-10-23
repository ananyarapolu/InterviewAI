
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewai-bd4fe.firebaseapp.com",
  projectId: "interviewai-bd4fe",
  storageBucket: "interviewai-bd4fe.firebasestorage.app",
  messagingSenderId: "941333213913",
  appId: "1:941333213913:web:4a007601eaf76ff30084c8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}