import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBzUHwkXhcX2dokj2lwFKhJ47nIVp3tA60",
    authDomain: "fir-login-f9fc3.firebaseapp.com",
    databaseURL: "https://fir-login-f9fc3-default-rtdb.firebaseio.com",
    projectId: "fir-login-f9fc3",
    storageBucket: "fir-login-f9fc3.appspot.com",
    messagingSenderId: "380120111691",
    appId: "1:380120111691:web:878c30a20d13fb54b28bce",
    measurementId: "G-BYMHBV1N49"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;