
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDUecb1Yju7aIN3OmSfHCAdIb57mcoyiD0",
  authDomain: "https://olxclone-43092.firebaseapp.com",
  projectId: "olxclone-43092",
  storageBucket: "olxclone-43092.appspot.com",
  messagingSenderId: "71152145162",
  appId: "1:71152145162:web:d33414aac96c34ed9b60f3",
  measurementId: "G-LQXW94K9KT"
};


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const firestore = getFirestore(firebaseApp); // Initialize Firestore

export { firebaseApp, auth, firestore }; // Export Firestore as well













