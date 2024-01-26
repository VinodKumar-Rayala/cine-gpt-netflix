import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validations";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate()
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [message, setMessage] = useState();
  


  const Name = useRef();
  const Email = useRef();
  const Password = useRef();

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let error = validateForm(Email.current.value, Password.current.value);
    setMessage(error);
    if (error) return;

    if (isSignInForm) {
      //Sign in Logic

      signInWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          navigate('/browse')
          console.log(user, "Logged in user success details");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage,"Logged in user errorMessage details");
          setMessage("Invalid Login Credentials!")
        });
    } else {
      //Sign up logic

      createUserWithEmailAndPassword(
        auth,
        Email.current.value,
        Password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user, "Sign up user success details");
          // ...

          updateProfile(user, {
            displayName: Name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
            console.log(error,"catch for update user")
            setMessage(error)
          });
          
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          console.log(errorCode,"+",errorMessage,"catch for create user")
          setMessage("Email Id Already Exists");
        });
    }
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>

      <form
        className="bg-black p-12 absolute w-1/4 my-36 mx-auto right-0 left-0 text-white rounded bg-opacity-80"
        onSubmit={submitHandler}
      >
        <h1 className="font-bold text-3xl py-4 m-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter Name..."
            className="p-2 my-4 w-full bg-gray-700 rounded"
            ref={Name}
          />
        )}
        <input
          type="text"
          placeholder="Enter Email Address...."
          className="p-2 my-4 w-full bg-gray-700 rounded"
          ref={Email}
        />
        <input
          type="password"
          placeholder="Enter Password...."
          className="p-2 my-4 w-full bg-gray-700 rounded"
          ref={Password}
        />
        <span className="text-red-800 font-semibold">{message}</span>
        <button className="p-4 my-6 bg-red-700 w-full rounded">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <span className="text-gray-400">
          {!isSignInForm ? "Already LoggedIn" : "New to Netflix?"}{" "}
        </span>
        <span className="cursor-pointer" onClick={toggleSignUpForm}>
          {!isSignInForm ? "Sign In" : "Sign Up"}
        </span>
      </form>
    </>
  );
};

export default Login;
