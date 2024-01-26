// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8dF7dupji6edfIgGAwDanwvx3qGIYGKo",
  authDomain: "jaanv-cine-gpt-netflix.firebaseapp.com",
  projectId: "jaanv-cine-gpt-netflix",
  storageBucket: "jaanv-cine-gpt-netflix.appspot.com",
  messagingSenderId: "265024121519",
  appId: "1:265024121519:web:c10473ed4495ad23ed025a",
  measurementId: "G-TXMM4V7B23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();