import React from 'react'
import MovieListComponenet from './MovieListComponenet';
import { useSelector } from 'react-redux';


const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);

  return (<div className='bg-black'>
    <div className='md:-mt-52 mt-0 md:pl-12 relative z-20'>
      <MovieListComponenet title={"Now Playing"} movies= {movies.nowPlayingMovies}/>
      <MovieListComponenet title={"Trending"} movies= {movies.trendingMovies}/>
      <MovieListComponenet title={"Popular"} movies= {movies.popularMovies}/>
      <MovieListComponenet title={"UpComing"} movies= {movies.upComingMovies}/>
      {/* <MovieListComponenet title={"Horror"} movies= {movies.horrorMovies}/> */}
    </div>
  </div>
  )
}

export default SecondaryContainer