import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.js";

export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return { user: userCredential.user, message: "Login successful!" };
  } catch (error) {
    return { error: error.message };
  }
};
