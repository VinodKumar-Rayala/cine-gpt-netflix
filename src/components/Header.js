import React ,{useEffect}from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import {  signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {addUser, removeUser } from "../utils/userSlice";
import {  onAuthStateChanged } from "firebase/auth";



const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)


  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.

    }).catch((error) => {
      // An error happened.
      navigate('/error')
    });
  }


  useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user
        dispatch(addUser({uid:uid,email:email,displayName:displayName}));
        navigate('/browse')
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate('/')
      }

      return () => {
        unSubscribe()
      }
    }); 
  },[])
  return (
    <div className="absolute flex justify-between px-8 py-2 bg-gradient-to-b from-black z-10 w-full">
      <img
      className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      {user && <div className="text-xl text-white font-bold p-2 underline cursor-pointer" onClick={handleSignOut}>Sign Out</div>}
    </div>
  );
};

export default Header;
