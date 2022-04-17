// fireBase Setup

import Firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

const app = {
    apiKey: "AIzaSyA67ny3A-eaVxiqQOZ2Gv1fswwcjiE2nbA",
    authDomain: "chat-app-looseleaf.firebaseapp.com",
    projectId: "chat-app-looseleaf",
    storageBucket: "chat-app-looseleaf.appspot.com",
    messagingSenderId: "12013797714",
    appId: "1:12013797714:web:e31477a25665d5a113fa8b"
}

const FirebaseApp = Firebase.initializeApp(app);
const db = FirebaseApp.firestore();                          // for database i.e store and fetch data 
const auth = Firebase.auth();
const provider = new Firebase.auth.GoogleAuthProvider();    // for google authentication

export { db, auth, provider };