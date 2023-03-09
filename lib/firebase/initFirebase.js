// Modular Firebase v.9 Initialization.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "@firebase/database";

// USE THIS IN PRODUCTION MODE
// const clientCredentials = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

const clientCredentials = {
    apiKey: "AIzaSyCRMpxKHXORt63Dr7wW6KfulpGpnWU_euM",
    authDomain: "sistem-informasi-cil.firebaseapp.com",
    projectId: "sistem-informasi-cil",
    storageBucket: "sistem-informasi-cil.appspot.com",
    messagingSenderId: "743489213955",
    appId: "1:743489213955:web:95ed67f6a926664028a036",
    measurementId: "G-JK70VWPCYV"
  };

function initFirebase() {
    if (typeof window !== undefined) {
        initializeApp(clientCredentials);
        console.log("Firebase has been init successfully");
    }
}

const app = initializeApp(clientCredentials);

const db = getFirestore(app);

const auth = getAuth(app)

export { initFirebase, db, auth };