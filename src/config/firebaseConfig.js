import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDdXGwSYibx4UfkGhHPB6cKRdR_RZAQyUc",
    authDomain: "awesomephoto-79485.firebaseapp.com",
    databaseURL: "https://awesomephoto-79485.firebaseio.com",
    projectId: "awesomephoto-79485",
    storageBucket: "awesomephoto-79485.firebasestorage.app",
    messagingSenderId: "564230802697",
    appId: "1:564230802697:web:78f29d0c77f4b1a817d7d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
