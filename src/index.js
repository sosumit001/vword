import React, { useEffect,useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

import {signInWithEmailAndPassword,createUserWithEmailAndPassword, getAuth,signOut, onAuthStateChanged} from 'firebase/auth'
import { getStorage } from 'firebase/storage';


// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBSsrgO8gmBWzqyo8tGBF2EvHlMLhYrOy4",
  authDomain: "userauth-35b9f.firebaseapp.com",
  projectId: "userauth-35b9f",
  storageBucket: "userauth-35b9f.appspot.com",
  messagingSenderId: "620475100653",
  appId: "1:620475100653:web:ee4ba50a19f047939d4be4",
  measurementId: "G-X747QMVCXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();

const auth = getAuth(app);







export function signUp(email,password){
  return createUserWithEmailAndPassword(auth,email,password);
};
export function logIn(email,password){
  return signInWithEmailAndPassword(auth,email,password)
}
export function logOut(){
  return signOut(auth);
}

export function useAuth(){
  const [currentUser,setCurrentUser] = useState();

  useEffect(()=>{
    const unsub = onAuthStateChanged(auth,user=>setCurrentUser(user))
    return unsub;
  },[])

  return currentUser;
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
   <BrowserRouter>

  <App />
   </BrowserRouter>
  </React.StrictMode>
);

