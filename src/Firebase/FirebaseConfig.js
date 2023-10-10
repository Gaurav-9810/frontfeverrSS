// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from 'firebase/auth';

import { FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByU1wAmg0YCFk_C6odo0ZTvonERFNAQnA",
  authDomain: "orage-e9270.firebaseapp.com",
  projectId: "orage-e9270",
  storageBucket: "orage-e9270.appspot.com",
  messagingSenderId: "1096532752392",
  appId: "1:1096532752392:web:741fdaf081b047b055b9bd",
  measurementId: "G-DWSJ63GVHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider =new GoogleAuthProvider();
const fbProvider=new FacebookAuthProvider();

export{auth , provider , fbProvider}
