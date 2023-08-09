import { initializeApp } from "firebase/app";
// the initializeApp function creates an app instance based off some type of config
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWiitDin5k338X2CyQi31kR0MAP1k0qFU",
  authDomain: "orizon-travel-db.firebaseapp.com",
  projectId: "orizon-travel-db",
  storageBucket: "orizon-travel-db.appspot.com",
  messagingSenderId: "373187972694",
  appId: "1:373187972694:web:af3a6bc19cab242cc875f7",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(); //instantiates the db

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  //check if user data exists
  if (!userSnapshot.exists()) {
    // if it doesn't exist, create / set the document with the data from userAuth in my collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  // if it does, return userDocRef
  return userDocRef;
};
