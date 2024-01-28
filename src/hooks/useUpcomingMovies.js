import  { useEffect } from 'react'
import { API_Options } from '../components/constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/moviesSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch()

    const fetchUpComingMovies = async() => {
        const result =await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_Options);
        const json = await result.json();
        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(() => {
        fetchUpComingMovies();
    },[])
}

export default useUpcomingMovies