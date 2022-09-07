// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const API_KEY = process.env.API_KEY
const MESSAGE_SENDER_ID = process.env.MESSAGE_SENDER_ID
const APP_ID = process.env.APP_ID

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "control-de-gastos-personales.firebaseapp.com",
  projectId: "control-de-gastos-personales",
  storageBucket: "control-de-gastos-personales.appspot.com",
  messagingSenderId: MESSAGE_SENDER_ID,
  appId: APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)