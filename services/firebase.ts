import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxMQpvwgWQRf6J6bhBQogY0TBQrrUW1B4",
  authDomain: "reactigram-bef28.firebaseapp.com",
  projectId: "reactigram-bef28",
  storageBucket: "reactigram-bef28.appspot.com",
  messagingSenderId: "288941756683",
  appId: "1:288941756683:web:f7f8df2e90ad3e6bc5120e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, app, db };
