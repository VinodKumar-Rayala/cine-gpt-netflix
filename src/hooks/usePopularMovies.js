import  { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_Options } from '../components/constants';
import { addPopularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
 const dispatch = useDispatch();
   
const getPopularMovies =async () => {
    let result =await fetch('https://api.themoviedb.org/3/movie/popular?page=1',API_Options)
    let json =await result.json();
   dispatch(addPopularMovies(json.results))
}

useEffect(() => {
getPopularMovies()
},[])
}

export default usePopularMovies