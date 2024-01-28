import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch";

const Browse = () => {
  const gptSearchStore = useSelector((store) => store.gptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <>
      <Header />

      {/*
      1.Main Container 
        --Video Backbground
        --Video Title
            --Name
            --Description
            --Play and more Info Button
      2.Secondary container
        -Movieslist * n 
          -Movies Card * n
       */}
      {gptSearchStore.showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
};

export default Browse;
