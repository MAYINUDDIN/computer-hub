// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYLV4w904NYhw5iqL09jF8X-qj_vsAsPg",
  authDomain: "computerhub-ed1f1.firebaseapp.com",
  projectId: "computerhub-ed1f1",
  storageBucket: "computerhub-ed1f1.appspot.com",
  messagingSenderId: "772645907615",
  appId: "1:772645907615:web:3bbd5d9b36b0a4f6d406aa"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;