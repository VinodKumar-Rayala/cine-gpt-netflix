import React from "react";
import Header from "./Header";
import useNowPlayingMovies from  '../hooks/useNowPlayingMovies'
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {


  useNowPlayingMovies()
 
  return (<>
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

       <MainContainer />
       <SecondaryContainer />
    </>
  );
};

export default Browse;
