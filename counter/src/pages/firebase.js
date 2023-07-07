// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDu8Kvq4F4j5s5eCQTtbD8viBAHLhERKls",
  authDomain: "counterassignement.firebaseapp.com",
  projectId: "counterassignement",
  storageBucket: "counterassignement.appspot.com",
  messagingSenderId: "661575206813",
  appId: "1:661575206813:web:3416cec3927a03c8d11174",
  measurementId: "G-S5ZNRC86QD"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth()

export{app, auth}