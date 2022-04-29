import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCP67CUDDkG6UwvA4L8TKr9vpbh9g1iJEw",
  authDomain: "twitter-clone-04.firebaseapp.com",
  projectId: "twitter-clone-04",
  storageBucket: "twitter-clone-04.appspot.com",
  messagingSenderId: "382356296128",
  appId: "1:382356296128:web:f157bff91a9a81faeb7825",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
