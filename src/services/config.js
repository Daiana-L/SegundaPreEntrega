import { getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDJKCES6tI5y56PwuMnQvDxz90dqvNSxPw",
  authDomain: "segunda-entrega-22365.firebaseapp.com",
  projectId: "segunda-entrega-22365",
  storageBucket: "segunda-entrega-22365.appspot.com",
  messagingSenderId: "364377355360",
  appId: "1:364377355360:web:b264464322eac0cf8a7f05"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);