import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { toggleGptSearch } from "../utils/gptSlice";
import { LANGUAGES_LIST } from "../components/constants";
import { changeLanguage } from "../utils/languageSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptSearchStore = useSelector((store) => store.gptSearch);

  const handleGptSearch = () => {
    dispatch(toggleGptSearch());
  };

  const selectLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }

      return () => {
        unSubscribe();
      };
    });
  }, []);

  return (
    <div className="absolute flex flex-col md:flex-row justify-between px-8 py-2 bg-gradient-to-b from-black z-10 w-full">
      <div className="mx-auto md:mx-0">
      <img
        className="w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />
      </div>
     
      {user && (
        <div className="flex ">
          {gptSearchStore.showGptSearch && (
            <select
              className="my-4 px-4 mr-2 py-2 md:py-0 rounded-lg text-white bg-slate-700 font-semibold text-xs md:text-base"
              onChange={selectLanguage}
            >
              {LANGUAGES_LIST.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-violet-800 text-white rounded-lg font-semibold my-4 px-4 py-2 md:py-0 mr-2 text-xs md:text-base"
            onClick={handleGptSearch}
          >
            {gptSearchStore.showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <div
            className="md:text-xl text-sm text-white font-bold p-2 my-2 underline cursor-pointer py-4 "
            onClick={handleSignOut}
          >
            Sign Out
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
