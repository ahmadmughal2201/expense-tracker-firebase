// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNt1OZInoDlwML8y2lYRLbA5AwPo26BwM",
  authDomain: "expense-tracker-1e05b.firebaseapp.com",
  projectId: "expense-tracker-1e05b",
  storageBucket: "expense-tracker-1e05b.appspot.com",
  messagingSenderId: "117696844802",
  appId: "1:117696844802:web:6b88b0aa6282f089ae831b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);