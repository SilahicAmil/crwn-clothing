import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC2D53piGkFqVcVSulooNOFKjhNSgSQZfw",
  authDomain: "crwn-clothing-db-be6b0.firebaseapp.com",
  projectId: "crwn-clothing-db-be6b0",
  storageBucket: "crwn-clothing-db-be6b0.appspot.com",
  messagingSenderId: "17071979876",
  appId: "1:17071979876:web:14dc487018b50a12fe8e71",
};

// Init Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  // if user data DOES NOT exist
  if (!userSnapshot.exists()) {
    // create and set the document with data from userAuth collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error created users", error.message);
    }
    // if user data exists return userDocRef
    return userDocRef;
  }
};
