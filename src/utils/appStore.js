import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptSearchReducer from '../utils/gptSlice';
import configReducer from "./languageSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gptSearch: gptSearchReducer,
    config: configReducer
  },
});

export default appStore;
