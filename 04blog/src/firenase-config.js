import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAPx0lFMksQuVHMBgpaRsuUIRCoS6KvJgI",
  authDomain: "blog-63d81.firebaseapp.com",
  projectId: "blog-63d81",
  storageBucket: "blog-63d81.appspot.com",
  messagingSenderId: "91374348943",
  appId: "1:91374348943:web:e61a4311040adeaa1a5efa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();