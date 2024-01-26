import { useEffect } from "react";
import { API_Options } from "../components/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useFetchTrailer = (movieId) => {
  const dispatch = useDispatch();

  const fetchTrailer = async () => {
    let video = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_Options
    );
    let data = await video.json();
    let filterData = data?.results.filter((video) => video.type === "Trailer");
    let trailer = filterData.length ? filterData[0] : data?.results[0];
    dispatch(addTrailerVideo(trailer));

    
  };

  useEffect(() => {
    fetchTrailer();
  }, []);
};

export default useFetchTrailer;
