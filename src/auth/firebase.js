import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { toast } from 'react-toastify';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
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
    createUserWithEmailAndPassword(auth, email, password);

    updateProfile(auth.currentUser, {
      displayName: `${name} ${surname}`,
    });
    //
    if (auth.currentUser) {
      const { email, displayName} = auth.currentUser;
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ email, displayName})
      );
    }

    // navigate("/login");
    toast.info("Registered successfully!");
  } catch (error) {
    toast.info(error.message);
  }
};

// Login Function
export const loginWithEmail = async (email, password, navigate) => {
  try {
    signInWithEmailAndPassword(auth, email, password);
    // navigate("/");
    toast.info("Logged in successfully!");
  } catch (error) {
    toast.info(error.message);
  }
};

// Login With Google
export const loginWithGoogle = async (navigate) => {
  const provider = new GoogleAuthProvider();

  await signInWithPopup(auth, provider)
    .then(() => {
      // navigate("/");
      toast.info("Logged in successfully!");
    })
    .catch((error) => {
      toast.info(error.message);
    });
};

// Logout Function
export const logOut = (navigate) => {
  signOut(auth);
  // navigate("/login");
  toast.info("Logged out successfully!");
  
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

// Reset Function
export const passwordReset = (navigate, email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // navigate("/login");
      toast.info("Please check your mail box!");
    })
    .catch((error) => {
      toast.info(error.message);
    });
};
