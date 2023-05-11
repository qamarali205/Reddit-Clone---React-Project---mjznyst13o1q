import { useContext, createContext, useEffect, useState } from "react";
import React from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase/firebase-config";

const AuthContext = createContext();



export const AuthContextProvider = ({ children }) => {
  
  const [user,setUser] = useState({})

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((result) => {
      console.log(result.user)}).catch((error)=>{console.log(error)})
  
  };

  const logOut = () =>{
   // console.log(user);
   
    signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    })
    return ()=>{
      unsubscribe()
    }
  },[])

  return (
    <AuthContext.Provider value={{ googleSignIn,logOut,user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};