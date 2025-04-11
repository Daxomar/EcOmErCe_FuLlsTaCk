import { auth } from "./firebaseConfig";
import {  
  signOut, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";



// Sign in with Email and Password
export const doSignInWithEmailAndPassword = (email, password) => signInWithEmailAndPassword(auth, email, password);

///the signout code I created
export const doSignOut = () => signOut(auth);

// Sign in with Google
export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;  // result.user contains user info
};
