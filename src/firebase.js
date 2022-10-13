// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBva2dxQAejMAqZcwlE6brPRe8cbDiVUNQ",
  authDomain: "clone-netflix-b543d.firebaseapp.com",
  projectId: "clone-netflix-b543d",
  storageBucket: "clone-netflix-b543d.appspot.com",
  messagingSenderId: "244608150396",
  appId: "1:244608150396:web:cec2649035d9016d2dd2f9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



