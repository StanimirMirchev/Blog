import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCEt6Qe9ZtLDjqDq0ofnzquXj2XjXtjxHc",
    authDomain: "blog-e166d.firebaseapp.com",
    projectId: "blog-e166d",
    storageBucket: "blog-e166d.appspot.com",
    messagingSenderId: "158377363623",
    appId: "1:158377363623:web:5f2ca1b5824fe4e9437382"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage};