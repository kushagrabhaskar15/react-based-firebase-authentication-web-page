import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKRdQQ7qFeM0LrK8eks8t_3oJUDD4OjbM",
  authDomain: "login-auth-817d0.firebaseapp.com",
  projectId: "login-auth-817d0",
  storageBucket: "login-auth-817d0.firebasestorage.app",
  messagingSenderId: "17772552765",
  appId: "1:17772552765:web:d00fb079d9a72afc374054",
  measurementId: "G-RWJ67RFHFP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth};
export {db};