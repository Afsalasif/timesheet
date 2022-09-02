
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth } from 'firebase/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBb1AFzu4IR4zeY5rPkBms4XaxoMdaU6h8",
  authDomain: "todo-c0ff3.firebaseapp.com",
  projectId: "todo-c0ff3",
  storageBucket: "todo-c0ff3.appspot.com",
  messagingSenderId: "35754897",
  appId: "1:35754897:web:c756329a0977d6358d8030"
};


const app = !getApps().length ? initializeApp(firebaseConfig):getApp();
const db = getFirestore()
const auth = getAuth()

export default app
export {auth ,db}