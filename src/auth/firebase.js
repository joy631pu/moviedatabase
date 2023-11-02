import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { toast } from 'react-toastify';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBVBlldATILgGTUuQN_J_YHJxZTuvhGE2U",

    authDomain: "joy9161.firebaseapp.com",
  
    projectId: "joy9161",
  
    storageBucket: "joy9161.appspot.com",
  
    messagingSenderId: "325290723940",
  
    appId: "1:325290723940:web:c5d1c522790badd4fb2d71",
  
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Create a new user
export const createUser = async (name, surname, email, password, navigate) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: `${name} ${surname}`,
    });
    //
    if (auth.currentUser) {
      const { email, displayName, photoURL } = auth.currentUser;
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ email, displayName, photoURL })
      );
    }

    // navigate("/");
    toast.info("Registered successfully!");
  } catch (error) {
    toast.info(error.message);
  }
};

// Login Function
export const loginWithEmail = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    // navigate("/");
    toast.info("Logged in successfully!");
  } catch (error) {
    toast.info(error.message);
  }
};

// Login Control Function
export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { email, displayName} = user;
      setCurrentUser({ email, displayName});
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ email, displayName})
      );
    } else {
      localStorage.removeItem("currentUser");
      setCurrentUser(false);
    }
  });
};
