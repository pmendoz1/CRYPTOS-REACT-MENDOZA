import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc57USYrBcnLSlWW9tR8i7Fx_4MGcBrM8",
  authDomain: "compracryptosya.firebaseapp.com",
  projectId: "compracryptosya",
  storageBucket: "compracryptosya.appspot.com",
  messagingSenderId: "632143966030",
  appId: "1:632143966030:web:25785bd1697abf0e1ff81f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
