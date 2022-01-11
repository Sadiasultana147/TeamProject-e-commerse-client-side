import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [searchText, setSearchText] = useState('');
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState('');
  const [totalPrice, setTotalPrice] = useState();
  const [processing, setProcessing] = useState(false)

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Sign in Using Google
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);


  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => { })
      .finally(() => setIsLoading(false));
  };


  // Register with Email and Password

  const handleCreatingUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleUserLogin = (userEmail, userPassword, callback) => {
    return signInWithEmailAndPassword(auth, userEmail, userPassword);
  };

  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name
    }).then(() => {
      const newUser = { ...user, displayName: name } // recommend
      setUser(newUser)

      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
  }
  const hanldeUserInfoRegister = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('http://localhost:5000/addUserInfo', {
      method: method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then()
  }


  return {
    user,
    setUser,
    isLoading,
    setIsLoading,

    signInUsingGoogle,
    logOut,
    handleCreatingUser,
    handleUserLogin,
    updateName,
    hanldeUserInfoRegister,
    isAdmin,
    setIsAdmin,
    totalPrice, setTotalPrice,
    processing, setProcessing,
    searchText, setSearchText
  };
};

export default useFirebase;
