// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBWfOAnRbGRL_ZN7Oi2cdMDFEKucCboDE",
  authDomain: "public-idea.firebaseapp.com",
  projectId: "public-idea",
  storageBucket: "public-idea.appspot.com",
  messagingSenderId: "859162377935",
  appId: "1:859162377935:web:8e4f001d3dd960bd98c1ba",
  measurementId: "G-7LQMC0DMSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);