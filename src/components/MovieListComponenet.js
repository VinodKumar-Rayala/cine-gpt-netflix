import React from "react";
import MovieCard from "./MovieCard";

const MovieListComponenet = ({ title, movies }) => {
 
  return (
    <div className="px-6 ">
      <h1 className="md:text-3xl text-sm font-bold md:font-normal py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies && movies.length > 0 && movies.map((item, index) => (
            <MovieCard posterPath={item.poster_path} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListComponenet;
