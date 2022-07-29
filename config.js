import firebase from "firebase";
require("@firebase/firestore");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbskqX8VSxkVvnMcfDAMezP5Rsq9y8z4k",
  authDomain: "pro-71-68021.firebaseapp.com",
  projectId: "pro-71-68021",
  storageBucket: "pro-71-68021.appspot.com",
  messagingSenderId: "1078208057985",
  appId: "1:1078208057985:web:995be6c6566b80d5713380",
  measurementId: "G-D0RFNHNWLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
