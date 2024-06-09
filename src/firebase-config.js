
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from 'firebase/auth' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlXHagZUq8CBStQd513zwRfe24DnYupzE",
  authDomain: "blogproject-85fde.firebaseapp.com",
  projectId: "blogproject-85fde",
  storageBucket: "blogproject-85fde.appspot.com",
  messagingSenderId: "491206452564",
  appId: "1:491206452564:web:644d03bc414ac4e8b394c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();