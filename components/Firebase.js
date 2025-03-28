import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAql8PHAe6GRzUMOZOpzv6EQ3E6lV_cWoA",
  authDomain: "appacessosilvio.firebaseapp.com",
  projectId: "appacessosilvio",
  storageBucket: "appacessosilvio.firebasestorage.app",
  messagingSenderId: "1024158802418",
  appId: "1:1024158802418:web:f8662a6515c92d4008cb6b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
