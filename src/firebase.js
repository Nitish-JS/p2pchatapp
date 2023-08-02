import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgfxSWPlH0OJWPtX1aWfB8yTpn4aGACwk",
  authDomain: "chatapp-4fcfc.firebaseapp.com",
  projectId: "chatapp-4fcfc",
  storageBucket: "chatapp-4fcfc.appspot.com",
  messagingSenderId: "292811620878",
  appId: "1:292811620878:web:1c394b165cb26907f0f25f",
  measurementId: "G-1B7X5SX0S9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };