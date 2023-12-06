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
  

  apiKey: "AIzaSyBQxr5T615VATNQ_MYsEl6pJzRJvBjaJ5c",

  authDomain: "moviedatabasefinalproject.firebaseapp.com",

  databaseURL: "https://moviedatabasefinalproject-default-rtdb.firebaseio.com",

  projectId: "moviedatabasefinalproject",

  storageBucket: "moviedatabasefinalproject.appspot.com",

  messagingSenderId: "61532340290",

  appId: "1:61532340290:web:c3d8cc89b7a9854a956ddb",

  measurementId: "G-9QXCLFYYGY"



  
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// Create a new user
export const createUser = async (name, surname, email, password, history) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);

    updateProfile(auth.currentUser, {
      displayName: `${name} ${surname}`,
    });
    
    if (auth.currentUser) {
      const { email, displayName} = auth.currentUser;
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ email, displayName})
      );
    }

    history.push("/");
    toast.info("Registered successfully!");
  } 
  catch (error) {
    toast.info(error.message);
  }
};

// Login Function
export const loginWithEmail = async (email, password, history) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    history.push("/");
    toast.info("Logged in successfully!");
  } catch (error) {
    toast.info(error.message);
  }
};

// Login With Google
export const loginWithGoogle = async (history) => {
  const provider = new GoogleAuthProvider();

  await signInWithPopup(auth, provider)
    .then(() => {
      history.push("/");
      toast.info("Logged in successfully!");
    })
    .catch((error) => {
      toast.info(error.message);
    });
};

// Logout Function
export const logOut = (history) => {
  signOut(auth);
  history.push("/");
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
export const passwordReset = (history, email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      history.push("/login");
      toast.info("Please check your mail box!");
    })
    .catch((error) => {
      toast.info(error.message);
    });
};
