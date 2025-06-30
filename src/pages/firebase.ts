// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBR2VFm27OLfIFw9PCspuX5M9HnwjNUGPo",
  authDomain: "hawahawai-fbd2d.firebaseapp.com",
  projectId: "hawahawai-fbd2d",
  storageBucket: "hawahawai-fbd2d.appspot.com",
  messagingSenderId: "994247198006",
  appId: "1:994247198006:web:e14b265fc1761ba0f8df97",
  measurementId: "G-NRPP1319T6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
