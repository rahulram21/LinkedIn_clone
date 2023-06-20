// For Firebase JS SDK v7.20.0 and later, measurementId is optiona
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDyBTWDWuwaOX8T2IpZjqZcI3Bl_FLTi_w",
    authDomain: "linkedin-clone-c3728.firebaseapp.com",
    projectId: "linkedin-clone-c3728",
    storageBucket: "linkedin-clone-c3728.appspot.com",
    messagingSenderId: "935559010223",
    appId: "1:935559010223:web:0706df955592bd33dd815a",
    measurementId: "G-CRZ8DFY6X2"
  };

const firebaseapp = initializeApp(firebaseConfig)
const db = getFirestore();
const auth = getAuth(firebaseapp);

export {db, auth}