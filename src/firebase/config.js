import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";




// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVckGd8svczIk9-HO_Vaj27ET8iOrVP2s",
    authDomain: "elite-78a26.firebaseapp.com",
    projectId: "elite-78a26",
    storageBucket: "elite-78a26.firebasestorage.app",
    messagingSenderId: "438071924847",
    appId: "1:438071924847:web:281569a0d2849c86bf559a"
};

// init firebase
initializeApp(firebaseConfig)





//init firebase auth
const auth = getAuth();

const database = getDatabase();

const db = getFirestore();

const storage = getStorage();

const analytics = getAnalytics();



export { auth, db, database, storage, analytics}

