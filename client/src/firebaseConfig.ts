import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { User } from "./models/user";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const authProvider = new GoogleAuthProvider();

export const signInWithGoogle = async (): Promise<Partial<User>> => {
  const authCredential = await signInWithPopup(auth, authProvider);
  const { email, displayName, photoURL, uid } = authCredential.user;
  return {
    email: email || "",
    displayName: displayName || "",
    photoURL: photoURL || "",
    uid: uid || "",
  };
};

export function signOut(): void {
  auth.signOut();
}
