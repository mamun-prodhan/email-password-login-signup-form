// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH54sU9J9r6iZPfln6M3yYBUUliwoUDik",
  authDomain: "email-password-login-form.firebaseapp.com",
  projectId: "email-password-login-form",
  storageBucket: "email-password-login-form.appspot.com",
  messagingSenderId: "230021290479",
  appId: "1:230021290479:web:0f100861c60c14324dbe1a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
